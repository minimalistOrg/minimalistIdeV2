function MemberExpression(props: any) {
  const data = props.data;
  // console.log(data);
  return (
    <span className="MemberExpression">
      <span>{data.children[0].text}</span>
      <span>{data.children[1].text}</span>
      <span>{data.children[2].text}</span>
    </span>
  );
}

export default MemberExpression;
