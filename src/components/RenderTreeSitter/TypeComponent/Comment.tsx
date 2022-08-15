import {TypeComponentProps} from "../../../types/interface";

function Comment(props: TypeComponentProps) {
  const data = props.data;
  // console.log(data);

  return <span className="CommentType">{data.text}</span>;
}

export default Comment;
