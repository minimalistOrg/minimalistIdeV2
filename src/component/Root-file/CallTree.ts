import { ObjTree } from "../../types/interface";

export let TreeCall: ObjTree[] = [
  // {
  //   id: 0,
  //   name: "main",
  //   params: [{text:"("},{text:")"}],
  //   index: 0,
  //   value: [],
  //   event: false,
  //   order: 0,
  //   element: null,
  //   Bubble: () => {
  //     let result = document.getElementById("id" + 0);
  //     return result;
  //   },
  // },
];

export function resetTreeCall(): void {
  TreeCall = [];
}

Object.defineProperty(window, "UrlData", {value:()=>{
    let obj= JSON.stringify(TreeCall,(key,value)=>{
        if(key === "params"){
            return [{text:"("},{text:")"}]
        }else{
            return value
        }
    })


    return btoa(obj)
}})
