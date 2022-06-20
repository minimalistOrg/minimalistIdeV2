export interface FnInfoType {
  fninfo: ObjTree;
}

export interface ObjTree {
  id: string;
  name: string;
  params: TreesitterData[];
  index: number;
  value: [];
  event: boolean;
  order: number;
  element: null | (HTMLElement & FnInfoType);
  Bubble: () => null | HTMLElement;
  visibility: boolean;
}

export interface BubbleProps {
  tree: ObjTree[];
  fnindex?: number;
  call?: (HTMLElement & FnInfoType) | null;
}

export interface RenderType {
  callTree: { value: boolean };
}

export interface StoreFn {
  addbubble: { value: CodeBlockCodeType[] };
}

export interface TreesitterData {
  children: TreesitterData[];
  text: string;
  type: string;
  typeId: number;
  id: number;
  parent: TreesitterData;
}

export interface TypeComponentProps {
  data: TreesitterData;
}

export interface CallTreeType {
  data: ObjTree[];
}

export interface CodeBlockCodeType {
  name: string;
  node: TreesitterData;
  id: number;
  nothing: string;
  from: string;
  language?: string;
}

export interface CodeBlockType {
  code: CodeBlockCodeType;
  id: string;
  data: ObjTree;
  call: (HTMLElement & FnInfoType) | null | undefined;
  openBubble: (event: { target: HTMLElement }) => void;
  closeBubble: () => void;
}

export interface LoadCodeType {
  isOpen: boolean;
  event: { gist: () => void };
  load: (data: responseGistType[]) => void;
  setData: (data: CodeBlockCodeType[]) => void;
}

export interface responseGistType {
  content: string;
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  truncated: boolean;
}

export interface responseGithubType {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
  language?: string;
}

export interface codeGithubType {
  sha: string;
  node_id: string;
  size: number;
  url: string;
  content: string;
  encoding: string;
}
