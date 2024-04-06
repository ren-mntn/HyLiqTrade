import React, { ReactNode, useEffect, useState } from "react";

interface RenderHighlightWrapperProps {
  children: ReactNode;
}

const RenderHighlightWrapper = ({ children }: RenderHighlightWrapperProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // 開発環境でのみエフェクトをトリガー
    if (process.env.NODE_ENV === "development") {
      setIsHighlighted(true);
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, 500); // エフェクトを短時間（例：500ミリ秒）表示

      return () => clearTimeout(timer);
    }
  }, [children]); // childrenが変更されるたびにエフェクトをトリガー

  return (
    <div
      className={`transition duration-500 ease-in-out ${
        isHighlighted ? "bg-yellow-100" : "bg-white"
      } p-4`}
    >
      {children}
    </div>
  );
};

export default RenderHighlightWrapper;
