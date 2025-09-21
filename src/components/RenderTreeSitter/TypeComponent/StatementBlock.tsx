import { TypeComponentProps } from "../../../types/interface"
import { ChooseType } from "../ChooseType"

export const StatementBlock = ({ data }: TypeComponentProps) => {
  // Remove first and last children that are '{' & '}'
  const statementBlockChildren = data.children.slice(1, -1)

  return (
    <div className="StatementBlock">
      {
        statementBlockChildren.map((child, index) => {
          return (
            <ChooseType info={child} key={index} />
          )
        })
      }
    </div>
  )
}
