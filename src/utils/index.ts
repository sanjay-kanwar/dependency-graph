import { QuarterNode, TeamNode, Edge } from "../model";

const nodeDefaults = {
  style: {
    borderRadius: "100%",
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
    name: "TeamA",
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
  { name: "TeamB" },
];
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const SERVICES = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"];
export const buildTeams = () => {
  const teams: TeamNode[] = [];
  const xAxis = 50;
  const yAxis = 70;
  for (let i = 0; i < TEAMS.length; i++) {
    const team: TeamNode = {
      id: `team${i + 1}`,
      name: TEAMS[i].name,
      data: { label: TEAMS[i].name },
      position: { x: xAxis * 1, y: i === 0 ? 0 : yAxis * (i + 1) },
      style: {
        height: 120,
        width: 1080,
        background: i == 0 ? "lightgray" : "wheat",
        border: "solid 1px black",
        display: "flex",
        fontSize: "1.2rem",
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
        position: { x: j === 0 ? 0 : j * 270, y: 0 },
        parentId: `${teams[i].id}`,
        draggable: false,
        type: "group",
        style: {
          height: 120,
          width: 270,
          overflow: "hidden",
        },
      };
      const quarterNode = {
        id: `${teams[i].id}_${QUARTERS[j]}`,
        data: { label: `${QUARTERS[j]}` },
        position: { x: j <= 1 ? 100 : 50 * j, y: 50 },
        parentId: `${teams[i].id}-${QUARTERS[j]}`,
        draggable: true,
        extent: "parent",
        style: {
          ...nodeDefaults.style,
          fontSize: ".35rem",
          border: "solid green 1px",
          overflow: "hidden",
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
    const x = 80 * Math.cos(radians) + center.x;
    const y = 50 * Math.sin(radians) + center.y;
    const node = {
      id: `${quarterNode.id}_${SERVICES[i]}`,
      data: { label: `${SERVICES[i]}` },
      position: { x, y },
      parentId: quarter.id,
      extent: "parent",
      draggable: true,
      style: {
        ...nodeDefaults.style,
        backgroundColor: i === 4 ? "red" : "#000000",
        color: "#fff",
        fontSize: ".35rem",
      },
    };
    const edge = {
      id: `edge-${quarterNode.id}_${SERVICES[i]}`,
      source: quarterNode.id,
      target: `${quarterNode.id}_${SERVICES[i]}`,
    };
    let interConnEdge = {
      id: `edge-${quarter.id}`,
      target: "team1_Q1_S5",
      source: "team2_Q4_S5",
      animated: true,
      style: { stroke: 'red' },
    };
    edges.push(interConnEdge);

    edges.push(edge);
    subNodes.push(node);
  }
  return { subNodes, edges };
};
