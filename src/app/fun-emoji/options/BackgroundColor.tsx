import React from "react";

type Props = {
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BackgroundColor = (props: Props) => {
  return (
    <>
      <label htmlFor="backgroundColor" className="mixin/label">
        背景色
      </label>
      <input type="color" name="backgroundColor" id="backgroundColor" onChange={props.handleColorChange} />
    </>
  );
};

export default BackgroundColor;
