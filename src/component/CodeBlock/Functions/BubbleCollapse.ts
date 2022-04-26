export function BubbleCollapse(e:any){
  console.log(e.currentTarget.parentNode.parentNode.nextElementSibling)
  const body= e.currentTarget.parentNode.parentNode.nextElementSibling
  
  body.classList.toggle("CodeBlock__body--collapse")
  e.currentTarget.classList.toggle("rotateIco-90")
}
