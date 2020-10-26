
// Original source : https://github.com/konvajs/use-image/blob/master/index.js

import React from "react";


interface MyImage {
    image: HTMLImageElement | null;
    status: string;
}

var defaultState:MyImage = { image: null, status: 'loading' };



export default function useImage(url:string, crossOrigin?:string) {
  var res = React.useState<MyImage>(defaultState);
  var image = res[0].image;
  var status = res[0].status;

  var setState = res[1];

  React.useEffect(
    function () {
      if (!url) return;
      var img = document.createElement('img');

      function onload() {
        setState({ image: img, status: 'loaded' });
      }

      function onerror() {
        setState({ image: null, status: 'failed' });
      }

      img.addEventListener('load', onload);
      img.addEventListener('error', onerror);
      crossOrigin && (img.crossOrigin = crossOrigin);
      img.src = url;

      return function cleanup() {
        img.removeEventListener('load', onload);
        img.removeEventListener('error', onerror);
        setState(defaultState);
      };
    },
    [url, crossOrigin, setState]
  );

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status];
};
