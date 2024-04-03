"use client";

import { useState } from "react";

import { DownloadButton } from "@/components/DownloadButton";

export default function Pravatar() {
  const [avatarUrl, setAvatarUrl] = useState("https://i.pravatar.cc/300");

  const generateAvatar = () => {
    // 0から9999までのランダムな数値を生成
    const randomId = Math.floor(Math.random() * 71);
    // ランダムなアバターURLを生成
    const url = `https://i.pravatar.cc/300?img=${randomId}`;
    setAvatarUrl(url);
  };

  return (
    <div>
      <h1>Minotar Avatar Generator</h1>
      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Avatar" />
          <DownloadButton url={avatarUrl} />
        </div>
      )}
      <button onClick={generateAvatar}>Random</button>
    </div>
  );
}
