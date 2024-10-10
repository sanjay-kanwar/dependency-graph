export const edges = [

  //TEAM1
  { id: "e1-1", source: "team1_Q1", target: "team1_Q1-a", type: "floating" },
  { id: "e1-1", source: "team1_Q1", target: "team1_Q1-a", type: "floating"},
  { id: "e1-2", source: "team1_Q1", target: "team1_Q1-b", type: "floating" },
  { id: "e1-3", source: "team1_Q1", target: "team1_Q1-c", type: "floating" },
  { id: "e1-4", source: "team1_Q1", target: "team1_Q1-d", type: "floating" },

  { id: "e1-5", source: "team1_Q2", target: "team1_Q2-a", type: "floating" },
  { id: "e1-6", source: "team1_Q2", target: "team1_Q2-b", type: "floating" },
  { id: "e1-7", source: "team1_Q2", target: "team1_Q2-c", type: "floating" },
  { id: "e1-8", source: "team1_Q2", target: "team1_Q2-d", type: "floating" },

  // TEAM2
  { id: "e1-9", source: "team2_Q1", target: "team2_Q1-a", type: "floating" },
  { id: "e1-10", source: "team2_Q1", target: "team2_Q1-b", type: "floating" },
  { id: "e1-11", source: "team2_Q1", target: "team2_Q1-c", type: "floating" },
  { id: "e1-12", source: "team2_Q1", target: "team2_Q1-d", type: "floating" },

  { id: "e1-13", source: "team2_Q2", target: "team2_Q2-a", type: "floating" },
  { id: "e1-14", source: "team2_Q2", target: "team2_Q2-b", type: "floating" },
  { id: "e1-15", source: "team2_Q2", target: "team2_Q2-c", type: "floating" },
  { id: "e1-16", source: "team2_Q2", target: "team2_Q2-d", type: "floating" },

  {
    id: "e1-17",
    source: "team2_Q2-d",
    target: "team1_Q1-b",
    animated: true,
    style: {
      strokeWidth: 1,
      stroke: "#FF0072",
    },
   type: 'floating' 
  },
];
