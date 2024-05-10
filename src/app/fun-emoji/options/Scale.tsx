import React from "react";

type Props = {
  scale: number;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Scale = (props: Props) => {
  return (
    <>
      <div className="mixin/label-area">
        <label htmlFor="scale" className="mixin/label">
          顔の大きさ
        </label>
        <span className="mixin/num">{props.scale}</span>
      </div>
      <input
        type="range"
        name="scale"
        id="scale"
        min={0}
        max={200}
        value={props.scale}
        onChange={props.handleRangeChange}
        className="mixin/range"
      />
    </>
  );
};

export default Scale;
