import React, { FormEventHandler, MouseEventHandler } from "react";
import "./Button.style.scss";

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  className: string;
  disabled: boolean;
  onSubmit: FormEventHandler;
  size: ButtonSize;
  rounded: boolean;
}

export type ButtonSize = {
  small: "button__small";
  medium: "button__medium";
  large: "button__large";
};

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={`${props.className} ${
        props.rounded == true ? "button__rounded" : ""
      } ${props.size ? props.size : ""}`}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props?.label ?? "default button"}
    </button>
  );
};

export default Button;
