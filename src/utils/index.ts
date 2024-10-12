import { QuarterNode, TeamNode, Edge, DependingNode } from "../model";

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
        dependsOn: [

        ],
      },
      S4: {
        dependsOn: [],
      },
    },
    Q3: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [
            {
                team: "TeamD",
                quarter: "Q1",
                node: "S6",
              },
        ],
      },
      S5: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
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
      S5: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
  },
  {
    name: "TeamB",
    Q1: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
    Q2: {},
    Q3: {
      S2: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [  {
            team: "TeamE",
            quarter: "Q3",
            node: "S4",
          },],
      },
    },
    Q4: {
      S1: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
  },
  {
    name: "TeamC",
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
      S1: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
    Q3: {
      S2: {
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
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
  },
  {
    name: "TeamD",
    Q1: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
      S5: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S13: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
      S15: {
        dependsOn: [],
      },
      S16: {
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
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S5: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
      S13: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
      S15: {
        dependsOn: [],
      },
      S16: {
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
    Q4: {},
  },
  {
    name: "TeamE",
    Q1: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [
        
        ],
      },
    },
    Q2: {},
    Q3: {
      S2: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
      S3: {
        dependsOn: [],
      },
      S24: {
        dependsOn: [],
      },
      S1: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
    },
    Q4: {
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
      S1: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
    },
  },
  {
    name: "TeamF",
    Q1: {
      S1: {
        dependsOn: [
            
        ],
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
        dependsOn: [
          
        ],
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
        dependsOn: [
            {
                team: "TeamF",
                quarter: "Q1",
                node: "S1",
              },
        ],
      },
    },
  },
  {
    name: "TeamG",
    Q1: {
      S1: {
        dependsOn: [],
      },
      S2: {
        dependsOn: [],
      },
      S3: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [],
      },
      S5: {
        dependsOn: [],
      },
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
      S13: {
        dependsOn: [],
      },
      S14: {
        dependsOn: [],
      },
      S15: {
        dependsOn: [],
      },
      S16: {
        dependsOn: [],
      },
    },
    Q2: {
      S6: {
        dependsOn: [],
      },
      S7: {
        dependsOn: [],
      },
      S8: {
        dependsOn: [],
      },
      S9: {
        dependsOn: [],
      },
      S10: {
        dependsOn: [],
      },
      S11: {
        dependsOn: [],
      },
      S12: {
        dependsOn: [],
      },
      S13: {
        dependsOn: [],
      },
    },
    Q3: {},
    Q4: {
      S1: {
        dependsOn: [],
      },
      S4: {
        dependsOn: [
            {
                team: "TeamB",
                quarter: "Q1",
                node: "S1",
              },
        ],
      },
    },
  },
];

export const buildTeams = () => {
  const xAxis = 10;
  const yAxis = 0;
  const teams: TeamNode[] = [];
  let EDGES: Edge[] = [];
  let Qs: QuarterNode[] = [];
  for (const [i, t] of TEAMS.entries()) {
    const team: TeamNode = {
      id: `${t.name}`,
      name: t.name,
      data: { label: t.name },
      position: { x: xAxis * 2, y: i === 0 ? 120 : yAxis + 120 * (i + 1) },
      style: {
        height: 120,
        width: 1080,
        background: `rgba(140, 240, 240, ${(i + 1) / 10})`,
        border: "solid 1px black",
        display: "flex",
        fontSize: "1.2rem",
      },
    };
    teams.push(team);
    const { quarters, edges } = buildQuarter(t);
    EDGES.push(...edges);
    Qs.push(...quarters);
  }
  return { nodes: [...teams, ...Qs], edges: [...EDGES].flat() };
};

const buildQuarter = (team) => {
  const quarters: QuarterNode[] = [];
  const allEdges: Edge[] = [];
  const Qs = Object.entries(team).filter(([key]) => key !== "name");
  for (const [i, [key, value]] of Qs.entries()) {
    const quarter: QuarterNode = {
      id: `${team.name}-${key}`,
      data: { label: null },
      position: { x: i === 0 ? 0 : i * 270, y: 0 },
      parentId: `${team.name}`,
      draggable: false,
      extent: "parent",
      type: "group",
      style: {
        height: 120,
        width: 270,
        overflow: "hidden",
      },
    };
    const quarterNode = {
      id: `${team.name}_${key}`,
      data: { label: `${key}` },
      position: { x: i <= 1 ? 100 : 50 * i, y: 50 },
      parentId: `${team.name}-${key}`,
      draggable: true,
      extent: "parent",
      style: {
        ...nodeDefaults.style,
        fontSize: ".35rem",
        border: "solid green 1px",
        overflow: "hidden",
      },
    };
    const { subNodes, edges } = buildServicesNode(quarter, quarterNode, value);

    quarters.push(quarter);
    quarters.push(quarterNode);
    quarters.push(...subNodes);
    allEdges.push(...edges);
  }
  return { quarters, edges: allEdges };
};
const buildServicesNode = (
  quarter: QuarterNode,
  quarterNode: QuarterNode,
  value: any
) => {
  const subNodes: QuarterNode[] = [];
  const edges: Edge[] = [];
  const center = { x: 270 / 2, y: 120 / 2 };
  const tickets = Object.entries(value);
  for (const [i, [key, val]] of tickets.entries()) {
    const degrees = i * (360 / tickets.length);
    const radians = degrees * (Math.PI / 180);
    const x = 80 * Math.cos(radians) + center.x;
    const y = 50 * Math.sin(radians) + center.y;
    const node = {
      id: `${quarterNode.id}_${key}`,
      data: { label: `${key}` },
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
      id: `edge-${quarterNode.id}_${key}`,
      source: quarterNode.id,
      target: `${quarterNode.id}_${key}`,
    };
    if (val?.dependsOn?.length) {
        for(const dependItem of val.dependsOn){
            let interConnEdge = {
                id: `edge-${quarter.id}`,
                target: `${dependItem.team}_${dependItem.quarter}_${dependItem.node}`,
                source: `${quarterNode.id}_${key}`,
                animated: true,
                style: { stroke: "red" },
              };
              edges.push(interConnEdge);
        }
      
    }

    edges.push(edge);
    subNodes.push(node);
  }
  return { subNodes, edges };
};
