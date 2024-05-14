"use client";

import { useEffect, useState } from "react";

import { DownloadButton } from "@/components/DownloadButton";

export default function Minotar() {
  const [user, setUser] = useState("steve"); // username or uuid
  const [uuid, setUuid] = useState(""); // username or uuid
  const [avatarUrl, setAvatarUrl] = useState("https://minotar.net/avatar/steve");
  // const [downloadUrl, setDownloadUrl] = useState("");

  const fetchData = async (userInfo: string) => {
    try {
      const response = await fetch(`https://minotar.net/avatar/${userInfo}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setAvatarUrl(response.url);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };
  useEffect(() => {
    fetchData(user);
  }, []); // 空の依存配列を渡すことで、マウント時にのみ実行されるようにする

  const handleGenerateAvatar = () => {
    // ユーザー名の入力を元にアバターを生成する
    fetchData(user);
  };

  const getRandomUUID = async () => {
    try {
      const response = await fetch("https://www.uuidtools.com/api/generate/v4/count/1");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text(); // uuid toolsは直接文字列のテキストを返却する
      const json = await JSON.parse(data);
      const uuid = await json[0];
      setUuid(uuid);
      fetchData(uuid);
    } catch (error) {
      console.error("Error fetching UUID:", error);
    }
  };

  const handleGenerateAvatarByUuid = () => {
    getRandomUUID();
    if (uuid) {
      fetchData(uuid);
    }
  };

  return (
    <div>
      <h1>Minotar Avatar Generator</h1>
      <input type="text" placeholder="Enter Minecraft user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleGenerateAvatar}>Generate Avatar</button>
      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Avatar" />
          <DownloadButton url={avatarUrl} />
        </div>
      )}
      <button onClick={handleGenerateAvatarByUuid}>Random UUID</button>
    </div>
  );
}
