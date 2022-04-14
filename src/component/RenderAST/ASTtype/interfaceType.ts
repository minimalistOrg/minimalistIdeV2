import IfStatement from "./IfStatement";

export interface BinaryExpressionType {
  data: { left: DataBubble; right: DataBubble; operator: string };
}

export interface DataBubble {
  type: string;
}

export interface CallExpressionType {
  data: { type: "string" };
}

export interface reduxSliceaddBubble {
  addbubble: { value: DataBubble };
}

export interface IfStatementType {
  alternate: { body: object };
  consequent: { body: object };
  test: object;
}

export interface LogicalExpressionType {
  left: object;
  right: object;
  operator: string;
}

export interface MemberExpressionType {
  object: object;
  property: object;
}

export interface VariableDeclarationType {
  kind: string;
  declarations: Array<{ id: { name: string }; init: object }>;
}
