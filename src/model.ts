export type TeamNode = {
  id: string;
  name: string;
  position: { x: number; y: number };
  style: Record<string, string | number>;
};

export type QuarterNode = {
  id: string;
  data: { label: string | null };
  position: { x: number; y: number };
  parentId: string;
  draggable: boolean;
  type?: "group";
  style: Record<string, string | number>;
};

export type Edge = {
  id: string;
  source: string;
  target: string;
  type?: string;
};
