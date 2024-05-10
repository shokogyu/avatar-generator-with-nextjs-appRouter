import React from "react";

type Props = {
  rotate: number;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Rotate = (props: Props) => {
  return (
    <>
      <div className="mixin/label-area">
        <label htmlFor="rotate" className="mixin/label">
          回転
        </label>
        <span className="mixin/num">{props.rotate}</span>
      </div>
      <input
        type="range"
        name="rotate"
        id="rotate"
        min={0}
        max={360}
        value={props.rotate}
        onChange={props.handleRangeChange}
        className="mixin/range"
      />
    </>
  );
};

export default Rotate;
