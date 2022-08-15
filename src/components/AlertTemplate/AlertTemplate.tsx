import IcoClose from "../../icons/IcoClose";
import IconInfo from "../../icons/IconInfo";
import IconSuccess from "../../icons/IconSuccess";
import IconError from "../../icons/IconError";

import styleAlert from "./AlertTemplate.module.css";

export const AlertTemplate = ({ style, options, message, close }: any) => (
  <div className={styleAlert.alert} style={style}>
    <div className={styleAlert.containerMsg}>
      <span
        className={styleAlert.icon}
        style={{ color: `var(--color-${options.type})` }}
      >
        {options.type === "info" && <IconInfo size={16} />}
        {options.type === "success" && <IconSuccess size={16} />}
        {options.type === "error" && <IconError size={16} />}
      </span>
      <span>{message}</span>
    </div>
    <button onClick={close}>
      <IcoClose size={16} />
    </button>
  </div>
)
