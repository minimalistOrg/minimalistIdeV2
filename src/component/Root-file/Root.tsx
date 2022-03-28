import "./Root.css";
import CodeBlock from "../CodeBlock/CodeBlock";

function Root() {
  return (
    <section>
      <CodeBlock title="gameLoop" argument="a">
        {`
        let turn = 0 let board = [ [ 0 , 0 , 0 ] , [ 0 , 0 , 0 ] , [ 0 , 0 , 0 ]
        ] let gameEnded? = false
        `}
      </CodeBlock>
      <CodeBlock title="conditional" argument="a">
        {`
        if(false){
        const x= plus(1,5)
        }else{5}
        `}
      </CodeBlock>
      <CodeBlock title="nested" argument="a">
        {`
        plus ( plus ( 1 , 2 ) , 3 )
        `}
      </CodeBlock>
    </section>
  );
}

export default Root;
