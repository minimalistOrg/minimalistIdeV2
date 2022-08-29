import { TypeComponentProps } from "../../../types/interface"
import ChooseType from "../ChooseType"

export const MemberExpression = ({ data }: TypeComponentProps) => {
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
