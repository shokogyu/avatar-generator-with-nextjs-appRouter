"use client";

import { ChangeEventHandler, useCallback, useEffect, useState } from "react";

import { DownloadButton } from "@/components/DownloadButton";

export default function Pravatar() {
  const [size, setSize] = useState(300);
  const [imgId, setImgId] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState(`https://i.pravatar.cc/${size}?img=${imgId}`);

  const getRamdomId = () => {
    // 0〜70までのランダムな数値を生成
    const randomId = Math.floor(Math.random() * 71);
    setImgId(randomId);
  };

  const handleSizeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) return;

    const sizeValue = Number(e.target.value);
    setSize(sizeValue);
  };

  const generateAvatar = useCallback(() => {
    setAvatarUrl(`https://i.pravatar.cc/${size}?img=${imgId}`);
  }, [size, imgId]);

  useEffect(() => {
    generateAvatar();
  }, [generateAvatar, imgId, size]);

  console.log(imgId);
  console.log(size);
  console.log(avatarUrl);

  return (
    <div>
      <h1>Minotar Avatar Generator</h1>
      <input type="range" value={size} min="0" max="1000" onChange={handleSizeChange} />

      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Avatar" />
          <DownloadButton url={avatarUrl} />
        </div>
      )}
      <button onClick={getRamdomId}>Random</button>
    </div>
  );
}
