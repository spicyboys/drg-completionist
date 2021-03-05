# DRG Completionist

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/BobertForever/drg-completionist?color=limegreen)](https://github.com/BobertForever/drg-completionist/releases)
[![GitHub stars](https://img.shields.io/github/stars/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist/issues)
[![GitHub license](https://img.shields.io/github/license/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist/blob/main/LICENSE)

_[DRG Completionist](https://drg-completionist.com/)_ is a free, open-source progress tracker for [Deep Rock Galactic](https://www.deeprockgalactic.com/). It's designed to help keep track of all the different overclocks and frameworks available for hard-working employees like yourselves to earn, as well as to serve as an handy reference for overclock data.

_DRG Completionist_ is a fully-fledged [Progressive Web App (PWA)](https://en.wikipedia.org/wiki/Progressive_web_application), which means it will automatically continue to function without an Internet connection and can be installed as a stand-alone app on supported browsers _(e.g., Google Chrome, Microsoft Edge, Safari on iOS)_. The app is also responsively designed for both desktop and mobile use, and it supports using both mouse and touchscreen on nearly any screen size.

While progress can be input by clicking and tapping the old-fashioned way, _DRG Completionist_ also includes a snazzy (and optional) [WASM](https://en.wikipedia.org/wiki/WebAssembly)-based save file parsing tool that locally analyzes your PC's Deep Rock Galactic save file and automatically inputs your current progress into the app so you don't have to.

_The Steam save file is located here by default on Windows, but may vary based on your install location:_

`C:\Program Files (x86)\Steam\steamapps\common\Deep Rock Galactic\FSD\Saved\SaveGames\{steam_ID}_Player.sav`

## Upcoming Features

- Add weapon paintjobs
- Add armor accessories
- Add armor paintjobs
- Add pickaxe parts and paintjobs

## Privacy

_DRG Completionist_ respects your privacy. The app is entirely serverless and uses the browser's local storage to keep track of your progress. No personally identifying information is ever collected or stored.

If you choose to upload your save file, neither the file nor its contents ever leaves your computer. The save file parser is compiled from [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) into [WASM](https://en.wikipedia.org/wiki/WebAssembly) specifically so it can run completely within your browser. We encourage you to [inspect the source code](https://github.com/BobertForever/drg-completionist/tree/main/save-parser) if you want to see what it's doing.

The only tracking this app has are a few fully anonymized Google Analytics tags that allow us to see how (or if) this app is used in the wild. These `gtags` are blocked by default if you use any of the privacy-oriented browser settings and extensions that are widely available today.

## Special Thanks

- The folks who maintain the [Deep Rock Galactic Wiki](https://deeprockgalactic.gamepedia.com/Deep_Rock_Galactic_Wiki), which provided all the pictures and data that make this app run
- [@robertnunn](https://github.com/robertnunn) for their work on [DRG-Save-Editor](https://github.com/robertnunn/DRG-Save-Editor) that helped us get us started on our save parser
- The helpful folks on the _DRG Community Tools_ Discord server, who always helped us out with our questions
- The couple Ghost Ship Games devs who got us pointed in the right direction with save file stuff early on

## Disclaimer

Neither this app nor its developers are associated with Deep Rock Galactic or Ghost Ship Games in any way whatsoever. _(But we really admire what they do.)_

---

###### README Last Updated: Mar. 3, 2021
