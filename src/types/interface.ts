import { SUPPORTED_LANGUAGES } from "../constants";

export interface FnInfoType {
  fninfo: ObjTree;
}

export interface ObjTree {
  id: string;
  ied?: string;
  position?: string;
  name: string;
  params: TreesitterData[];
  index: number;
  value: ObjTree[];
  event: boolean;
  order: number;
  element: () => null | HTMLElement;
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
  startPosition: {row:number, colum: number};
 endPosition: {row:number, colum:number}
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
  load: (data: File[]) => void;
}

export interface File {
  content: string;
  language: string;
  fullname: string
}

export interface stacktraceType {
  file: string;
  row: string;
  colum:string;
}

export interface SuccessProjectResponse {
  success: true
  files: File[]
}

export interface ErrorProjectResponse {
  success: false
  errorString?: string
  code?: number
}

export type ProjectResponse = SuccessProjectResponse | ErrorProjectResponse

export type Language = typeof SUPPORTED_LANGUAGES[number]
