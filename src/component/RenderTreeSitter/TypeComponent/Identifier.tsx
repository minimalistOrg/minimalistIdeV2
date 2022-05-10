function Identifier(props: any) {
  const data = props.data;
  // console.log(data)

  return <span className="Identifier">{data.text}</span>;
}

export default Identifier;
