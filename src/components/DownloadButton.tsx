import React from "react";

//
// import { saveAs } from "file-saver";

// const DownloadButton = async ({ url }: { url: string }) => {
export const DownloadButton = ({ url }: { url: string }) => {
  const handleDownloadAvatar = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "avatar.png";
    downloadLink.click();
  };

  return <button onClick={handleDownloadAvatar}><img src="/icon/download.svg" alt="Download" /></button>;
};
