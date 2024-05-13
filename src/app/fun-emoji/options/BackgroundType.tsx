import React, { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";

import { Radio, Typography } from "@material-tailwind/react";

import BackgroundColor from "@/app/fun-emoji/options/BackgroundColor";

type Props = {
  backgroundType: string;
  setBackgroundType: Dispatch<SetStateAction<string>>;
  setBackgroundColor: Dispatch<SetStateAction<string[]>>;
  updateOptions: (key: string, value: string | number | boolean | Array<string>) => void;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BackgroundType = (props: Props) => {
  const handleBgTypeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.setBackgroundType(e.target.value);
    props.handleRadioChange(e);
  };

  const Icon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-full scale-105">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <p className="mixin/label w-20">背景タイプ</p>
        <div>
          <div className="flex gap-10">
            <Radio
              name="backgroundType"
              ripple={false}
              color="blue"
              icon={<Icon />}
              value="solid"
              className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
              label={
                <Typography color="blue-gray" className="text-sm font-medium text-black">
                  単色
                </Typography>
              }
              defaultChecked
              onChange={handleBgTypeChange}
            />
            <Radio
              name="backgroundType"
              ripple={false}
              color="blue"
              value="gradientLinear"
              icon={<Icon />}
              className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
              label={
                <Typography color="blue-gray" className="text-sm font-medium text-black">
                  グラデーション
                </Typography>
              }
              onChange={handleBgTypeChange}
            />
          </div>
        </div>
      </div>
      <BackgroundColor
        backgroundType={props.backgroundType}
        setBackgroundColor={props.setBackgroundColor}
        updateOptions={props.updateOptions}
      />
    </>
  );
};

export default BackgroundType;
