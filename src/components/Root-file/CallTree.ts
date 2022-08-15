import { ObjTree } from "../../types/interface";


export let TreeCall: ObjTree[] = [
  // {
  //   id: "0",
  //   ied: "x0",
  //   name: "main",
  //   params: [{text:"("},{text:")"}] as TreesitterData[],
  //   index: 0,
  //   value: [
  //
  // {
  //   id: "1",
  //   ied:"x1",
  //   name: "main",
  //   params: [{text:"("},{text:")"}] as TreesitterData[],
  //   index: 1,
  //   value: [],
  //   event: false,
  //   order: 0,
  //   visibility: true,
  //   element: () => {
  //       let result = document.getElementById("idx1");
  //       return result;
  //     },
  //   Bubble: () => {
  //     let result = document.getElementById("id1");
  //     return result;
  //   },
  // },
  //   ],
  //   event: false,
  //   order: 0,
  //   visibility: true,
  //   element: () => {
  //       let result = document.getElementById("idx0");
  //       return result;
  //     },
  //   Bubble: () => {
  //     let result = document.getElementById("id0");
  //     return result;
  //   },
  // },
];

export function resetTreeCall(): void {
  TreeCall = [];
}

export function setTreeCall(data:any){
    TreeCall = data;
}

Object.defineProperty(window, "UrlData", {value:()=>{
    /*let obj= JSON.stringify(TreeCall,(key,value)=>{
        if(key === "params"){
            return [{text:"("},{text:")"}]
        }else{
            return value
        }
    })*/

// console.log(TreeCall)
    return TreeCall
}})


