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

const teams = [
  {
    id: "team1",
    position: { x: 50, y: 0 },
    style: {
      backgroundColor: "rgba(255, 0, 255, 0.2)",
      height: 80,
      width: 670,
    },
  },
  {
    id: "team2",
    position: { x: 50, y: 78 },
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      height: 80,
      width: 670,
    },
  },
];

const TEAM_1_QUARTER_1 = [
  {
    id: "team1-Q1",
    data: { label: null },
    position: { x: 0, y: 0 },
    parentId: "team1",
    type: "group",
    style: {
      backgroundColor: "rgba(100, 100, 0, 0.2)",
      height: 80,
      width: 270,
    },
  },
  {
    id: "team1_Q1",
    data: { label: "Q1" },
    position: { x: 100, y: 10 },
    parentId: "team1",
    style: {
      ...nodeDefaults.style,
    },
  },
  {
    id: "team1_Q1-a",
    data: { label: "a" },
    position: { x: -30, y: 40 },
    parentId: "team1_Q1",
    ...nodeDefaults,
  },

  {
    id: "team1_Q1-b",
    data: { label: "b" },
    position: { x: 30, y: 40 },
    parentId: "team1_Q1",
    ...nodeDefaults,
  },
];
const TEAM_1_QUARTER_2 = [
  {
    id: "team1-Q2",
    data: { label: null },
    position: { x: 270, y: 0 },
    parentId: "team1",
    type: "group",
    style: {
      backgroundColor: "rgba(100, 100, 0, 0.3)",
      height: 80,
      width: 270,
    },
  },
  {
    id: "team1_Q2",
    data: { label: "Q2" },
    position: { x: 400, y: 10 },
    parentId: "team1",
    style: {
      ...nodeDefaults.style,
      backgroundColor: "lightgreen",
      height: 10,
      width: 10,
    },
  },
  {
    id: "team1_Q2-c",
    data: { label: "c" },
    position: { x: -30, y: 40 },
    parentId: "team1_Q2",
    ...nodeDefaults,
  },

  {
    id: "team1_Q2-d",
    data: { label: "d" },
    position: { x: 30, y: 40 },
    parentId: "team1_Q2",
    ...nodeDefaults,
  },
];

const TEAM_2_QUARTER_1 = [
  {
    id: "team2-Q1",
    data: { label: null },
    position: { x: 0, y: 0 },
    parentId: "team2",
    type: "group",
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.3)",
      height: 80,
      width: 270,
    },
  },
  {
    id: "team2_Q1",
    data: { label: "Q1" },
    position: { x: 100, y: 10 },
    parentId: "team2",
    style: {
      ...nodeDefaults.style,
      backgroundColor: "lightgreen",
      height: 10,
      width: 10,
    },
  },
  {
    id: "team2_Q1-a",
    data: { label: "a" },
    position: { x: -30, y: 40 },
    parentId: "team2_Q1",
    ...nodeDefaults,
  },

  {
    id: "team2_Q1-b",
    data: { label: "b" },
    position: { x: 30, y: 40 },
    parentId: "team2_Q1",
    ...nodeDefaults,
  },
];
const TEAM_2_QUARTER_2 = [
  {
    id: "team2-Q2",
    data: { label: null },
    position: { x: 270, y: 0 },
    parentId: "team2",
    type: "group",
    draggable: false,
    style: {
      backgroundColor: "rgba(255, 255, 0, 0.4)",
      height: 80,
      width: 270,
    },
  },
  {
    id: "team2_Q2",
    data: { label: "Q2" },
    position: { x: 400, y: 10 },
    parentId: "team2",
    style: {
      ...nodeDefaults.style,
      backgroundColor: "lightgreen",
      height: 10,
      width: 10,
    },
  },
  {
    id: "team2_Q2-c",
    data: { label: "c" },
    position: { x: -30, y: 40 },
    parentId: "team2_Q2",
    ...nodeDefaults,
  },

  {
    id: "team2_Q2-d",
    data: { label: "d" },
    position: { x: 30, y: 40 },
    parentId: "team2_Q2",
    ...nodeDefaults,
  },
];

export const nodes: any[] = [
  ...teams,
  ...TEAM_1_QUARTER_1,
  ...TEAM_1_QUARTER_2,
  ...TEAM_2_QUARTER_1,
  ...TEAM_2_QUARTER_2,
];
