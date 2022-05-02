import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CallTree.css";
import {TreeCall} from "../Root-file/CallTree"
import React from "react"

function CallTree(props:any) {
  const dataBubbleTree = useSelector((state:any) => state.callTree.value);

  useEffect(() => {
    console.log(TreeCall, dataBubbleTree)
  // eslint-disable-next-line
  }, [dataBubbleTree]);

  const TreeLi= (input:any)=>{
    return (
      <ul>
        { input.map((e:any,index:number)=>{
          return (
            <React.Fragment key={index}>
            <li>{e.name}</li>
            {TreeLi(e.value)}
              </React.Fragment>
          )
        }) }
      </ul>
    )
  }

  return (
    <section className="CallTree" onClick={()=>{console.log(TreeCall)}}>
      {TreeLi(props.data)}
    </section>
  );
}

export default CallTree;
