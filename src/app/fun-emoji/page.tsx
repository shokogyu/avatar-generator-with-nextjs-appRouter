"use client";

import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from "react";

import { DownloadButton } from "@/components/DownloadButton";
import BackgroundColor from "@/app/fun-emoji/options/BackgroundColor";
import BackgroundType from "@/app/fun-emoji/options/BackgroundType";
import Eyes from "@/app/fun-emoji/options/Eyes";
import Flip from "@/app/fun-emoji/options/flip";
import Mouth from "@/app/fun-emoji/options/Mouth";
import Rotate from "@/app/fun-emoji/options/Rotate";
import Scale from "@/app/fun-emoji/options/Scale";
import TranslateX from "@/app/fun-emoji/options/TranslateX";
import TranslateY from "@/app/fun-emoji/options/TranslateY";

export enum EyeStyle {
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

export enum MouthStyle {
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
      if (key === "size") {
        return;
      }
      optionParams += "&" + key + "=" + options[key];
      // optionParams += `&${key}=` + options[key];
    });
    setAvatarUrl(`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${seed}${optionParams}`);
  }, [seed, options, optionParams]);

  console.log(avatarUrl);

  useEffect(() => {
    generateAvatar();
  }, [generateAvatar, seed, options]);

  return (
    <section className="mx-auto my-8 max-h-screen w-11/12 rounded-lg bg-gray-100 p-8">
      <div className="h-2/5">
        {/* <h1 className="text-center text-3xl font-bold">Fun Emoji Avatar Generator</h1> */}

        {avatarUrl && (
          <div className="">
            <div className="mx-auto size-60 text-center">
              <img src={avatarUrl} alt="Avatar" className="" />
            </div>
            <div className="flex justify-center space-x-2">
              <DownloadButton url={avatarUrl} />
              <button onClick={handleRamdomButtonClick} className="block">
                <img src="./icon/random.svg" alt="Random" className="bg-slate-300 size-8 rounded-md" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-7 h-3/5 space-y-8  border-t border-gray-300 pt-7">
        <div className="space-y-8 overflow-y-auto mixin/field-layout:flex mixin/field-layout:items-center mixin/field-layout:gap-3 mixin/label:text-sm mixin/label:font-bold">
          <div className="">
            <ul className="grid grid-cols-3 gap-6">
              <li className="mixin/field-layout">
                <Flip handleCheckboxChange={handleCheckboxChange} />
              </li>
              <li className="mixin/field-layout">
                <BackgroundColor handleColorChange={handleColorChange} />
              </li>
            </ul>
          </div>
          <div>
            <div
              className="
                  mixin/range:mt-1 mixin/range:block
                  mixin/label-area:flex mixin/range:w-full mixin/range:cursor-pointer
                  mixin/label-area:items-center mixin/label-area:justify-between
                  mixin/num:text-xs"
            >
              <ul className="grid grid-cols-3 gap-6">
                <li>
                  <Rotate handleRangeChange={handleRangeChange} rotate={rotate} />
                </li>
                <li>
                  <Scale handleRangeChange={handleRangeChange} scale={scale} />
                </li>
                <li>
                  <div className="mixin/label-area">
                    <label htmlFor="size" className="mixin/label">
                      サイズ
                    </label>
                    <span className="mixin/num">{size}</span>
                  </div>
                  <input
                    type="range"
                    name="size"
                    id="size"
                    min={1}
                    max={700}
                    value={size}
                    onChange={handleRangeChange}
                    className="mixin/range"
                  />
                </li>
                <li>
                  <TranslateX handleRangeChange={handleRangeChange} translateX={translateX} />
                </li>
                <li>
                  <TranslateY handleRangeChange={handleRangeChange} translateY={translateY} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BackgroundType handleRadioChange={handleRadioChange} />
          </div>
          <div
            className="
            mixin/icon-radio:peer
            mixin/icon-label:block mixin/icon-list:grid
            mixin/icon-radio:hidden mixin/icon-list:grid-flow-col-dense mixin/icon-list:gap-2 mixin/icon-label:border-[#2196f3]"
          >
            <Eyes handleRadioChange={handleRadioChange} optionIconSize={optionIconSize} />
            <Mouth handleRadioChange={handleRadioChange} optionIconSize={optionIconSize} />
          </div>
        </div>
      </div>
    </section>
  );
}
