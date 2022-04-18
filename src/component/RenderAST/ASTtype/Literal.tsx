function Literal(props:{data:{raw:string},order:any}):JSX.Element{

  const data:string= props.data.raw;
// eslint-disable-next-line
const classType: string= "ast-literal" + "-" + typeof eval(data)

  return <span className={classType} data-hover="true" data-order={props.order}>{data}</span>
}

export default Literal;
