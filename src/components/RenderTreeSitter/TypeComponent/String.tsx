import { TypeComponentProps } from "../../../types/interface";

export const StringType = ({ data }: TypeComponentProps) => {
  return (
    <span className={data.type}>{data.text}</span>
  )
}
