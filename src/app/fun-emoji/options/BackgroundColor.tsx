import React, { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";

type Props = {
  backgroundType: string;
  setBackgroundColor: Dispatch<SetStateAction<string[]>>;
  updateOptions: (key: string, value: string | number | boolean | Array<string>) => void;
};

const BackgroundColor = (props: Props) => {
  const defaultBgColor = "f7d594";
  const [colors, setColors] = useState([defaultBgColor, "000000"]); // 配列の中身は「#なしのHex値」

  const handleBgColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let newBgColorArray = [];
    const hexWithoutHashtag = e.target.value.slice(1);
    const i = Number(e.target.dataset.i);

    // グラデーションが選択されている場合
    if (props.backgroundType === "gradientLinear") {
      newBgColorArray = [...colors];
      newBgColorArray[i] = hexWithoutHashtag;

      setColors(newBgColorArray);

      // 単色の場合
    } else {
      newBgColorArray = [...[], hexWithoutHashtag];
    }

    props.setBackgroundColor(newBgColorArray);
    props.updateOptions("backgroundColor", newBgColorArray);
  };

  return (
    <div className="flex items-center gap-3">
      {props.backgroundType === "gradientLinear" ? (
        <>
          <label htmlFor="backgroundColor" className="mixin/label w-20">
            色変更
          </label>
          <div>
            {colors.map((color, i) => (
              <input key={i} type="color" value={`#${color}`} data-i={i} onChange={handleBgColorChange} />
            ))}
          </div>
        </>
      ) : (
        <>
          <label htmlFor="backgroundColor" className="mixin/label block w-20">
            色変更
          </label>
          <div>
            <input
              type="color"
              name="backgroundColorSolid"
              value={`#${colors[0]}`}
              id="backgroundColor"
              onChange={handleBgColorChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BackgroundColor;
