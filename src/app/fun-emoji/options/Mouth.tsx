import React from "react";

import { MouthStyle } from "@/app/fun-emoji/page";

type Props = {
  optionIconSize: number;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Mouth = (props: Props) => {
  return (
    <div>
      <p>Mouth</p>
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
