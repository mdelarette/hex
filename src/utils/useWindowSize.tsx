// utils/useWindowSize.js

// Original source and explaination: https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/

// Enhancement suggestion with debounce : https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

import React from "react";
import { debounce } from "./debounce";


export default function useWindowSize() {
  const isSSR = typeof window === "undefined";
  const [windowSize, setWindowSize] = React.useState({
    windowInnerWidth: isSSR ? 1200 : window.innerWidth,
    windowInnerHeight: isSSR ? 800 : window.innerHeight,
  });

  React.useEffect(() => {

    const debouncedChangeWindowSize = debounce(function changeWindowSize() {

      setWindowSize({ windowInnerWidth: window.innerWidth, windowInnerHeight: window.innerHeight });

    }, 250);


    window.addEventListener("resize", debouncedChangeWindowSize);

    return () => {
      window.removeEventListener("resize", debouncedChangeWindowSize);
    };
  }, []);

  return windowSize;
}
