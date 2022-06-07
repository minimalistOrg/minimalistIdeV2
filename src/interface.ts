export interface ObjTree {
  id: string;
  name: string;
  params: [{ text: string }];
  index: number;
  value: [];
  event: boolean;
  order: number;
  element: null | HTMLElement;
  Bubble: () => null | HTMLElement;
  visibility: boolean;
}

export interface BubbleProps {
  tree: ObjTree[];
  fnindex?: number;
  call?: number|null;
}

export interface RenderType {
  callTree: { value: boolean };
}

export interface StoreFn{
    addbubble: {value: ObjTree[]}
}
