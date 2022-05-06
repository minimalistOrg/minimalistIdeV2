function Identifier(props: { data: { name: string } }): JSX.Element {
  const data: { name: string } = props.data;
  // console.log(data)
  return (
    <span className={`p3 ast-identifier-${data.name}`} data-idhover={data.name}>
      {data.name}
    </span>
  );
}

export default Identifier;
