import React from "react";

import { EyeStyle } from "@/libs/constants";

type Props = {
  optionIconSize: number;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Eyes = (props: Props) => {
  return (
    <div className="space-y-1">
      <p className="mixin/label">目のタイプ</p>
      <ul className="mixin/icon-list">
        {Object.entries(EyeStyle).map(([key, value]) => (
          <li key={key}>
            <input
              type="radio"
              name="eyes"
              id={`eye-${key}`}
              value={value}
              onChange={props.handleRadioChange}
              className="mixin/icon-radio peer"
            />
            <label htmlFor={`eye-${key}`} className="mixin/icon-label peer-checked:border-4">
              <img
                src={`https://api.dicebear.com/8.x/fun-emoji/svg?eyes=${value}&mouth=lilSmile`}
                width={props.optionIconSize}
                height={props.optionIconSize}
                alt=""
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eyes;
