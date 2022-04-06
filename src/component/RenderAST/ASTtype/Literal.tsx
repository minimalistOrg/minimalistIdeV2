function Literal(props:any){

const data= props.data.raw;
// eslint-disable-next-line
const classType= "ast-literal" + "-" + typeof eval(data)

  return <span className={classType}>{data}</span>
}

export default Literal;
