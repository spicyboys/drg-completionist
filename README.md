# DRG Completionist

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/spicyboys/drg-completionist?color=darkgreen)](https://github.com/spicyboys/drg-completionist/releases)
[![GitHub stars](https://img.shields.io/github/stars/spicyboys/drg-completionist)](https://github.com/spicyboys/drg-completionist/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/spicyboys/drg-completionist)](https://github.com/spicyboys/drg-completionist/issues)
[![GitHub license](https://img.shields.io/github/license/spicyboys/drg-completionist?color=darkred)](https://github.com/spicyboys/drg-completionist/blob/main/LICENSE)

_[DRG Completionist](https://drg-completionist.com/)_ is a free, open-source online progress tracker for [Deep Rock Galactic](https://www.deeprockgalactic.com/). It's designed to help keep track of all the different overclocks and cosmetics available for hard-working employees like yourselves, as well as to serve as an handy reference for overclock data.

_DRG Completionist_ is a fully-fledged [Progressive Web App (PWA)](https://en.wikipedia.org/wiki/Progressive_web_application), which means it will automatically continue to function without an Internet connection and can be installed as a stand-alone app on supported browsers _(e.g., Google Chrome, Microsoft Edge, Safari on iOS)_. The app is also responsively designed for both desktop and mobile use, and it supports using both mouse and touchscreen on nearly any screen size. We recommend installing this app via your browser for the best experience.

While progress can be input by clicking and tapping the old-fashioned way, _DRG Completionist_ also utilizes a custom snazzy [WASM](https://en.wikipedia.org/wiki/WebAssembly)-based [save file parsing tool](https://github.com/rob0rt/drg-save-parser/) that locally analyzes your PC's Deep Rock Galactic save file. Simply upload your save file and the Save Parser will automatically input your current progress into each page so you don't have to!

_The Steam save file is located here by default on Windows, but may vary based on your install location:_

`C:\Program Files (x86)\Steam\steamapps\common\Deep Rock Galactic\FSD\Saved\SaveGames\{steam_ID}_Player.sav`

## Upcoming Features

- None are planned right now. Please [open an issue](https://github.com/spicyboys/drg-completionist/issues) with any suggestions.

## Privacy

_DRG Completionist_ respects your privacy. The app is entirely serverless and uses the browser's local storage to keep track of your progress. No personally identifying information is ever collected or stored.

If you choose to upload your save file, neither the file nor its contents ever leaves your computer. The save file parser is compiled from [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) into [WASM](https://en.wikipedia.org/wiki/WebAssembly) specifically so it can run completely within your browser. We encourage you to [inspect the source code](https://github.com/rob0rt/drg-save-parser) if you want to see what it's doing.

## Special Thanks

- The folks who maintain the [Deep Rock Galactic Wiki](https://deeprockgalactic.gamepedia.com/Deep_Rock_Galactic_Wiki), which provided all the pictures and data that make this app run
- [@iAmAsval](https://github.com/iAmAsval) for their work on [FModel](https://github.com/iAmAsval/FModel) that let us move forward with identifying the cosmetic GUIDs in the save file
- The helpful folks on the _DRG Community Tools_ Discord server, who always helped us out with our questions

## Disclaimer

Neither this app nor its developers are associated with Deep Rock Galactic or Ghost Ship Games in any way. _(But we really admire what they do.)_

---

###### README Last Updated: June 15, 2023
