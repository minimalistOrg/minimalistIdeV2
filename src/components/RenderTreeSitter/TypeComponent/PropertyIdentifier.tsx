import { TypeComponentProps } from "../../../types/interface";

export const PropertyIdentifier = ({ data }: TypeComponentProps) => {
  return (
    <span className={data.type}>{data.text}</span>
  )
}
