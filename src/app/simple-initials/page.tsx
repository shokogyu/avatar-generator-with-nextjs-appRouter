"use client";

import { ChangeEventHandler, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

// import { saveAs } from "file-saver";

import { DownloadButton } from "@/components/DownloadButton";

export default function SimpleInitials() {
  const [name, setName] = useState("Eddie");
  const [color, setColor] = useState("ff0000");
  const [url, setUrl] = useState(`https://avatar.oxro.io/avatar.svg?name=Eddie&background=ff0000`);
  const [options, setOptions] = useState<{
    [key: string]: string | number | boolean;
  }>({});
  const [optionParams, setOptionParams] = useState("");

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const hexWithHashtag = e.target.value;
    const hexWithoutHashtag = hexWithHashtag.slice(1);
    setColor(hexWithoutHashtag);
  };

  const handleUrl = useCallback(() => {
    if (options) {
      let newParams = "";
      for (const prop in options) {
        newParams += `&${prop}=${options[prop]}`;
      }
      setOptionParams(newParams);
    }
    setUrl(`https://avatar.oxro.io/avatar.svg?name=${name}&background=${color}${optionParams}`);
  }, [name, color, options, optionParams]);

  const handleOptionsChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const optionParamKey = e.target.dataset.optionParamKey;
    let value: string | number | boolean;

    if (optionParamKey) {
      setOptions((prevOptions) => {
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        } else if (e.target.type === "text" || e.target.type === "number") {
          value = e.target.value;
        }
        return { ...prevOptions, [optionParamKey]: value };
      });
    }
  };

  useEffect(() => {
    handleUrl();
  }, [handleUrl, name, color, options]);

  return (
    <div>
      <h1>DiceBear Avatar Generator</h1>
      <img src={url} alt="" id="avatarImg" />

      <DownloadButton url={url} />
      <form>
        <div className="">
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
      </form>
      <input type="color" value={`#${color}`} onChange={handleColorChange} />
      <input type="checkbox" name="bold" id="bold" data-option-param-key="bold" onChange={handleOptionsChange} />
      <label htmlFor="bold">太字</label>

      <input
        type="checkbox"
        name="isRounded"
        id="isRounded"
        data-option-param-key="isRounded"
        onChange={handleOptionsChange}
      />
      <label htmlFor="isRounded">角丸</label>

      <input type="number" name="rounded" id="rounded" data-option-param-key="rounded" onChange={handleOptionsChange} />
      <label htmlFor="rounded">角丸の大きさ</label>

      <input
        type="number"
        name="fontSize"
        id="fontSize"
        data-option-param-key="fontSize"
        onBlur={handleOptionsChange}
      />
      <label htmlFor="fontSize">フォントサイズ</label>
      <input type="number" name="width" id="width" data-option-param-key="width" onBlur={handleOptionsChange} />
      <label htmlFor="width">幅</label>
      <input type="number" name="length" id="length" data-option-param-key="length" onBlur={handleOptionsChange} />
      <label htmlFor="length">文字数</label>
    </div>
  );
}
