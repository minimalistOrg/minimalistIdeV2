import "./CodeBlock.css";

interface CodeBlockEntry {
  title: string;
  argument: string;
  children: string;
}

function CodeBlock(props: CodeBlockEntry) {
  return (
    <div className="CodeBlock">
      <div className="CodeBlock__header">
        <div className="CodeBlock__title">
          {props.title}
          <span className="CodeBlock__arguments">({props.argument})</span>
        </div>
        <button className="CodeBlock__menu">...</button>
      </div>
      <div className="CodeBlock__body">
        <code>{props.children.toString()}</code>
      </div>
    </div>
  );
}

export default CodeBlock;
