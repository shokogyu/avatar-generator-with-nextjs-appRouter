import React from "react";

type Props = {
  translateY: number;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TranslateY = (props: Props) => {
  return (
    <>
      <div className="mixin/label-area">
        <label htmlFor="translateY" className="mixin/label">
          translateY
        </label>
        <span className="mixin/num">{props.translateY}</span>
      </div>
      <input
        type="range"
        name="translateY"
        id="translateY"
        min={-100}
        max={100}
        value={props.translateY}
        onChange={props.handleRangeChange}
        className="mixin/range"
      />
    </>
  );
};

export default TranslateY;
