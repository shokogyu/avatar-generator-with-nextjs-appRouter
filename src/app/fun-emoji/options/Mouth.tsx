import React from "react";

import { MouthStyle } from "@/libs/constants";

type Props = {
  optionIconSize: number;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Mouth = (props: Props) => {
  return (
    <div className="space-y-1">
      <p className="mixin/label">口のタイプ</p>
      <ul className="mixin/icon-list">
        {Object.entries(MouthStyle).map(([key, value]) => (
          <li key={key}>
            <input
              type="radio"
              name="mouth"
              id={`mouth-${key}`}
              value={value}
              onChange={props.handleRadioChange}
              className="mixin/icon-radio peer"
            />
            <label htmlFor={`mouth-${key}`} className="mixin/icon-label peer-checked:border-4">
              <img
                src={`https://api.dicebear.com/8.x/fun-emoji/svg?eyes=closed&mouth=${value}`}
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

export default Mouth;
