/// <reference types="react-scripts" />

type PNGSrc = {
  png: string;
  webp: string;
};

type JPGSrc = {
  jpg: string;
  webp: string;
};

declare type ImgSrc = PNGSrc | JPGSrc;
