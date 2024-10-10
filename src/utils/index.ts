import { Position, MarkerType } from "@xyflow/react";
import { nodes as initialNodes } from "../data/nodes";
import { QuarterNode, TeamNode, Edge } from "../model";
// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const { width: intersectionNodeWidth, height: intersectionNodeHeight } =
    intersectionNode.measured;
  const intersectionNodePosition = intersectionNode.internals.positionAbsolute;
  const targetPosition = targetNode.internals.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetNode.measured.width / 2;
  const y1 = targetPosition.y + targetNode.measured.height / 2;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(node, intersectionPoint) {
  const n = { ...node.internals.positionAbsolute, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.measured.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.measured.height - 1) {
    return Position.Bottom;
  }

  return Position.Top;
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}

export function createNodesAndEdges() {
  const nodes = [];
  const edges = [];
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  nodes.push({ id: "target", data: { label: "Target" }, position: center });

  for (let i = 0; i < initialNodes.length; i++) {
    const degrees = i * (360 / initialNodes.length);
    const radians = degrees * (Math.PI / 180);
    const x = 250 * Math.cos(radians) + center.x;
    const y = 250 * Math.sin(radians) + center.y;

    nodes.push({ id: `${i}`, data: { label: "Source" }, position: { x, y } });

    edges.push({
      id: `edge-${i}`,
      target: "target",
      source: `${i}`,
      type: "floating",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    });
  }

  return { nodes, edges };
}
const nodeDefaults = {
  style: {
    borderRadius: "100%",
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ".5rem",
  },
};
const TEAMS = [
  {
    name: "Alpa",
    Q1: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
    },
    Q2: {
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
    },
    Q3: {
      S2: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
    },
    Q4: {
      S1: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
    },
  },
  { name: "Beta" },
];
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const SERVICES = ["S1", "S2", "S3","S4", "S5", "S6","S7", "S8", "S9"];
export const buildTeams = () => {
  const teams: TeamNode[] = [];
  const xAxis = 50;
  const yAxis = 70;
  for (let i = 0; i < TEAMS.length; i++) {
    const team: TeamNode = {
      id: `team${i + 1}`,
      name: TEAMS[i].name,
      position: { x: xAxis * 1, y: i === 0 ? 0 : yAxis * (i + 1) },
      style: {
        height: 120,
        width: 1080,
        background: "transparent",
        border: "solid 1px black",
      },
    };
    teams.push(team);
  }
  const { quarters, edges } = buildQuarter(teams);
  return { nodes: [...teams, ...quarters], edges };
};

const buildQuarter = (teams: TeamNode[]) => {
  const quarters: QuarterNode[] = [];
  const allEdges: Edge[] = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < QUARTERS.length; j++) {
      const quarter: QuarterNode = {
        id: `${teams[i].id}-${QUARTERS[j]}`,
        data: { label: null },
        position: { x: j === 0 ? 0 : (j)*270, y: 0 },
        parentId: `${teams[i].id}`,
        draggable: false,
        type: "group",
        style: {
          height: 120,
          width: 270,
          padding:20
        },
      };
      const quarterNode = {
        id: `${teams[i].id}_${QUARTERS[j]}`,
        data: { label: `${QUARTERS[j]}` },
        position: { x: j <= 1 ? 100 : 50 * (j), y: 20},
        parentId: `${teams[i].id}-${QUARTERS[j]}`,
        draggable: false,
        style: {
          ...nodeDefaults.style,
        },
      };
      const { subNodes, edges } = buildServicesNode(quarter, quarterNode);

      quarters.push(quarter);
      quarters.push(quarterNode);
      quarters.push(...subNodes);
      allEdges.push(...edges);
    }
  }
  return { quarters, edges: allEdges };
};
const buildServicesNode = (quarter: QuarterNode, quarterNode: QuarterNode) => {
  const subNodes: QuarterNode[] = [];
  const edges: Edge[] = [];
  const center = { x: 270 / 2, y: 120 / 2 };
  for (let i = 0; i < SERVICES.length; i++) {
    const degrees = i * (360 / SERVICES.length);
    const radians = degrees * (Math.PI / 180);
    const x = (80 * Math.cos(radians) + center.x);
    const y = (80 * Math.sin(radians) + center.y);
    const node = {
      id: `${quarterNode.id}_${SERVICES[i]}`,
      data: { label: `${SERVICES[i]}` },
      position: { x, y },
      parentId: quarter.id,
      extent: 'parent',
      ...nodeDefaults,
    };
    const edge = {
      id: `edge-${quarterNode.id}_${SERVICES[i]}`,
      source: quarterNode.id,
      target: `${quarterNode.id}_${SERVICES[i]}`,
    };
    edges.push(edge);
    subNodes.push(node);
  }
  return { subNodes, edges };
};
