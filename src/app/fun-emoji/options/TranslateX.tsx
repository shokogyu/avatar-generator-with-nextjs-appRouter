import React from "react";

type Props = {
  translateX: number;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TranslateX = (props: Props) => {
  return (
    <>
      <div className="mixin/label-area">
        <label htmlFor="translateX" className="mixin/label">
          translateX
        </label>
        <span className="mixin/num">{props.translateX}</span>
      </div>
      <input
        type="range"
        name="translateX"
        id="translateX"
        min={-100}
        max={100}
        value={props.translateX}
        onChange={props.handleRangeChange}
        className="mixin/range"
      />
    </>
  );
};

export default TranslateX;
