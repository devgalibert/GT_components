import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  className: string;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props?.label ?? "default button"}
    </button>
  );
};

export default Button;
