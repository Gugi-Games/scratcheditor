"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

export default function Page() {
  const [dataCode, setDataCode] = useState("");
  useEffect(() => {
    console.log(dataCode);
  }, [dataCode]);

  return (
    <>
      <title>Game</title>
      <div className="w-screen h-screen flex flex-col items-center">
        <Button className="w-fit m-3" onClick={() => console.log("clicked")}>
          Scan
        </Button>
        <iframe
          src="https://scratch.mit.edu/projects/1142499853/embed"
          width="485"
          height="402"
          className="w-[90%] h-[90%] border-2 border-black bg-[rgb(255,0,0)]"
        ></iframe>
      </div>
    </>
  );
}
