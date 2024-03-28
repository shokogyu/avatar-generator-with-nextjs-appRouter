import React from "react";

import { saveAs } from "file-saver";

// const DownloadButton = async ({ url }: { url: string }) => {
const DownloadButton = ({ url }: { url: string }) => {
  const handleDownload = async () => {
    console.log(url);
    const response = await fetch(url);
    const blob = await response.blob();
    console.log(blob);
    // return blob;
    saveAs(blob, "avatar.svg"); // Put your image URL here.
  };
  return <button onClick={handleDownload}>DownloadButton</button>;
};

export default DownloadButton;
