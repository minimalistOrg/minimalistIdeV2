// import ChooseType from "../ChooseType";

function PropertyIdentifier(props: any) {
  const data = props.data;
  // console.log(data);

  return <span className="PropertyIdentifier">{data.text}</span>;
}

export default PropertyIdentifier;
