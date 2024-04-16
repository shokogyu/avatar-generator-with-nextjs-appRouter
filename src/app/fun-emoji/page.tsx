"use client";


import { ChangeEventHandler, RefAttributes, useCallback, useEffect, useMemo, useState } from "react";

import { funEmoji } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

// import { createAvatar } from "@dicebear/core";
// import * as style from "@dicebear/fun-emoji";

import { DownloadButton } from "@/components/DownloadButton";
import { Slider } from "@/components/ui/slider";
import { SliderProps } from "@radix-ui/react-slider";

enum EyeStyle {
  Closed = "closed",
  Closed2 = "closed2",
  Crying = "crying",
  Cute = "cute",
  Glasses = "glasses",
  Love = "love",
  Pissed = "pissed",
  Plain = "plain",
  Sad = "sad",
  Shades = "shades",
  SleepClose = "sleepClose",
  Stars = "stars",
  TearDrop = "tearDrop",
  Wink = "wink",
  Wink2 = "wink2",
}

enum MouthStyle {
  Cute = "cute",
  Drip = "drip",
  FaceMask = "faceMask",
  KissHeart = "kissHeart",
  LilSmile = "lilSmile",
  Pissed = "pissed",
  Plain = "plain",
  Sad = "sad",
  Shout = "shout",
  Shy = "shy",
  Sick = "sick",
  SmileLol = "smileLol",
  SmileTeeth = "smileTeeth",
  TongueOut = "tongueOut",
  WideSmile = "wideSmile",
}

type Options = {
  flip?: boolean;
  rotate?: number;
  scale?: number;
  raduis?: number;
  size?: number;
  backgroundColor?: string[];
  backgroundType?: string[];
  translateX?: number;
  translateY?: number;
  eyes?: EyeStyle[];
  mouth?: MouthStyle[];
};

export default function FunEmoji() {
  const [seed, setSeed] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(100);
  const [size, setSize] = useState(300);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState(`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${seed}`);
  const [options, setOptions] = useState<Options>({ size: size });
  let optionParams = "";
  const optionIconSize = 50;

  const handleRamdomButtonClick = () => {
    let x = Math.floor(Math.random() * 1000);
    setSeed(x);
  };
  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateOptions(e.target.name, e.target.checked);
  };

  const handleRangeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const fieldName = e.target.name;
    const value = Number(e.target.value);
    switch (fieldName) {
      case "rotate":
        setRotate(value);
        break;
      case "scale":
        setScale(value);
        break;
      case "size":
        setSize(value);
        break;
      case "translateX":
        setTranslateX(value);
        break;
      case "translateY":
        setTranslateY(value);
        break;
    }
    updateOptions(e.target.name, value);
  };
  const handleRangeChange1: any = (e) => {
    console.log(e);
    console.log(e.name);
    const fieldName = e.name;
    const value = Number(e.value);
    switch (fieldName) {
      case "rotate":
        setRotate(value);
        break;
      case "scale":
        setScale(value);
        break;
      case "size":
        setSize(value);
        break;
      case "translateX":
        setTranslateX(value);
        break;
      case "translateY":
        setTranslateY(value);
        break;
    }
    updateOptions(e.name, value);
  };

  const handleColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const hexWithoutHashtag = e.target.value.slice(1);
    updateOptions(e.target.name, hexWithoutHashtag);
  };

  const handleRadioChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateOptions(e.target.name, e.target.value);
  };

  const updateOptions = (key: string, value: string | number | boolean) => {
    setOptions((prevOptions) => {
      return { ...prevOptions, [key]: value };
    });
  };

  const generateAvatar = useCallback(() => {
    const keys = Object.keys(options);
    keys.forEach((key) => {
      optionParams += `&${key}=${options[key]}`;
    });
    setAvatarUrl(`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${seed}${optionParams}`);
    if (options) {
    } else {
      // setAvatarUrl(`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${seed}`);
    }
  }, [seed, options]);

  console.log(avatarUrl);

  useEffect(() => {
    generateAvatar();
  }, [generateAvatar, seed, options]);


  // createAvatar(funEmoji, {
  //   eyes: ["closed","closed2","crying"]
  // });

  return (
    <div>
      <h1>Fun Emoji Avatar Generator</h1>

      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Avatar" />
          <DownloadButton url={avatarUrl} />
        </div>
      )}
      <button onClick={handleRamdomButtonClick}>Random</button>

      <input type="checkbox" name="flip" id="flip" className="" onChange={handleCheckboxChange} />
      <label htmlFor="flip">反転する</label>

<div>
  <div className="flex items-center justify-between">
      <label htmlFor="rotate">回転</label>
        <span>{rotate}</span>
  </div>
      {/* <input type="range" name="rotate" id="rotate" min={0} max={360} value={rotate} onChange={handleRangeChange} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-700"/> */}
      <input type="range" name="rotate" id="rotate" min={0} max={360} value={rotate} onChange={handleRangeChange} className="block w-full cursor-pointer"/>
      {/* <Slider name="rotate" id="rotate" max={360} defaultValue={[rotate]}  step={1} onValueChange={handleRangeChange1} /> */}
      {/* <Slider name="rotate" id="rotate" max={360} defaultValue={[rotate]} value={[rotate]} step={1} onValueChange={()=>handleRangeChange1('rotate')} /> */}
      
      {/* <Slider defaultValue={[33]} max={360} step={1}/> */}

</div>



      <input type="range" name="scale" id="scale" min={0} max={200} value={scale} onChange={handleRangeChange} />
      <label htmlFor="scale">スケール</label>

      <input type="range" name="size" id="size" min={1} max={700} value={size} onChange={handleRangeChange} />
      <label htmlFor="size">サイズ</label>

      <input
        type="range"
        name="translateX"
        id="translateX"
        min={-100}
        max={100}
        value={translateX}
        onChange={handleRangeChange}
      />
      <label htmlFor="translateX">translateX</label>

      <input
        type="range"
        name="translateY"
        id="translateY"
        min={-100}
        max={100}
        value={translateY}
        onChange={handleRangeChange}
      />
      <label htmlFor="translateY">translateY</label>

      <input type="color" name="backgroundColor" id="backgroundColor" onChange={handleColorChange} />
      <label htmlFor="backgroundColor">背景色</label>

      <p>背景タイプ</p>
      <input
        type="radio"
        name="backgroundType"
        id="gradientLinear"
        value="gradientLinear"
        onChange={handleRadioChange}
      />
      <label htmlFor="gradientLinear">グラデーション</label>
      <input type="radio" name="backgroundType" id="solid" value="solid" onChange={handleRadioChange} />
      <label htmlFor="solid">単色</label>

      <div>
        <p>Eyes</p>
        <ul className="grid grid-flow-col-dense">
          {Object.entries(EyeStyle).map(([key, value]) => (
            <li key={key}>
              <input type="radio" name="eyes" id={`eye-${key}`} value={value} onChange={handleRadioChange} />
              <label htmlFor={`eye-${key}`}>
                <img
                  src={`https://api.dicebear.com/8.x/fun-emoji/svg?eyes=${value}&mouth=lilSmile`}
                  width={optionIconSize}
                  height={optionIconSize}
                  alt=""
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Mouth</p>
        <ul className="grid grid-flow-col-dense">
          {Object.entries(MouthStyle).map(([key, value]) => (
            <li key={key}>
              <input type="radio" name="mouth" id={`mouth-${key}`} value={value} onChange={handleRadioChange} />
              <label htmlFor={`mouth-${key}`}>
                <img
                  src={`https://api.dicebear.com/8.x/fun-emoji/svg?eyes=closed&mouth=${value}`}
                  width={optionIconSize}
                  height={optionIconSize}
                  alt=""
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

