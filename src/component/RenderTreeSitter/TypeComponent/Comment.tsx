function Comment(props: any) {
  const data = props.data;
  // console.log(data);

  return <span className="CommentType">{data.text}</span>;
}

export default Comment;
