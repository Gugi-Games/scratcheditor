"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(Math.min(window.innerHeight, window.innerWidth));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      <title>Game</title>
      <div className="w-screen h-screen flex justify-center">
        <iframe
          src="https://scratch.mit.edu/projects/1141174987/embed"
          width={size * 1.175}
          height={size - 60}
          className="max-w-full max-h-full"
        ></iframe>
      </div>
    </>
  );
}
