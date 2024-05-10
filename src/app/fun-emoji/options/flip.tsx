import React from "react";

import { Switch } from "@material-tailwind/react";

type Props = {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Flip = (props: Props) => {
  return (
    <>
      <label htmlFor="flip" className="mixin/label">
        反転する
      </label>
      <Switch
        id="flip"
        ripple={false}
        className="!size-full checked:bg-[#2196f3]"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        name="flip"
        onChange={props.handleCheckboxChange}
      />
    </>
  );
};

export default Flip;
