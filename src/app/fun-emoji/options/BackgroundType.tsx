import React from "react";

import { Radio, Typography } from "@material-tailwind/react";

type Props = {
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BackgroundType = (props: Props) => {
  return (
    <>
            <p className="mixin/label">背景タイプ</p>

      <div className="flex">
        <Radio
          name="backgroundType"
          color="blue"
          defaultChecked
          value="solid"
          label={<Typography className="flex text-sm font-medium text-black">単色</Typography>}
          onChange={props.handleRadioChange}
        />
        <Radio
          name="backgroundType"
          color="blue"
          value="gradientLinear"
          label={<Typography className="flex text-sm font-medium text-black">グラデーション</Typography>}
          onChange={props.handleRadioChange}
        />
      </div>
    </>
  );
};

export default BackgroundType;
