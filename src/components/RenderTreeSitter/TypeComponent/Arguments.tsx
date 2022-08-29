import { ChooseType } from "../ChooseType"
import { TypeComponentProps } from "../../../types/interface"

export const Arguments = ({ data }: TypeComponentProps) => {
  return (
    <span className={data.type}>
      {
        data.children.map((child, index) => {
          return (
            <span key={index}>
              <ChooseType info={child} />
            </span>
          )
        })
      }
    </span>
  )
}
