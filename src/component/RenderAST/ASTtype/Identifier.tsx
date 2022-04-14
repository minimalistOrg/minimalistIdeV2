function Identifier(props: { data: { name: string } }):JSX.Element {
  const data: { name: string } = props.data;
  // console.log(data)
  return <>{data.name}</>;
}

export default Identifier;
