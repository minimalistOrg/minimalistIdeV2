function TemplateElement(props: any) {
  const data = props.data;
  // console.log(data)
  return <span>{data.value.raw}</span>;
}

export default TemplateElement;
