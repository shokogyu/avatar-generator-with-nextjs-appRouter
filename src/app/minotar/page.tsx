"use client";

// pages/index.js
import { useState } from "react";

import { DownloadButton } from "@/components/DownloadButton";

console.log("aaaa");

export default function Minotar() {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleGenerateAvatar = async () => {
    try {
      const response = await fetch(`https://minotar.net/avatar/${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setAvatarUrl(response.url);
    } catch (error) {
      console.error("Error fetching avatar:", error);
    }
  };

  return (
    <div>
      <h1>Minotar Avatar Generator</h1>
      <input
        type="text"
        placeholder="Enter Minecraft username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleGenerateAvatar}>Generate Avatar</button>
      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Avatar" />
          {/* <button onClick={handleDownloadAvatar}>Download Avatar</button> */}
          <DownloadButton url={avatarUrl} />
        </div>
      )}
    </div>
  );
}

// import { ChangeEventHandler, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";

// import { v4 as uuidv4 } from "uuid";

// export default function Minotar() {
//   const [uuid, setUuid] = useState(uuidv4());
//   const [url, setUrl] = useState(`https://minotar.net/avatar/${uuid}`);
//   console.log(uuid);

//   return (
//     <div>
//       <h1>Minotar Avatar Generator</h1>
//       <img src={url} alt="" id="avatarImg" />
//       <img src="https://minotar.net/avatar/user/100.png" alt="" id="avatarImg" />
//     </div>
//   );
// }
