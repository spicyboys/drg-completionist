# DRG Completionist

[![GitHub stars](https://img.shields.io/github/stars/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist/issues)
[![GitHub license](https://img.shields.io/github/license/BobertForever/drg-completionist)](https://github.com/BobertForever/drg-completionist)

This project is an open-source completion tracker web app for [Deep Rock Galactic](https://www.deeprockgalactic.com/) that's currently in development. It allows you both to keep track your forged weapon overclocks and to quickly look up weapon overclock information to help you decide which ones to go for next. The web app is fully responsive and works well on deskops, mobile touch-screen devices, and everything in between.

While progress can be input by clicking the old-fashioned way, _DRG Completionist_ also includes an optional [WASM](https://en.wikipedia.org/wiki/WebAssembly)-based save parsing tool that locally analyzes your PC's Deep Rock Galactic save file (_sorry console users_) and automatically inputs your currently progress so you don't have to. Although the parser only tracks your **forged** weapon overclocks right now, we intend to expand this tool to cover the remaining unlockables if there's demand for it.

The Steam save file is located here by default on Windows, but may vary based on your install location:

`C:\Program Files (x86)\Steam\steamapps\common\Deep Rock Galactic\FSD\Saved\SaveGames\{steam_ID}_Player.sav`

## Potential Upcoming Features

- Add weapon paintjobs
- Add armor accessories
- Add armor paintjobs
- Add pickaxe parts and paintjobs
- Distinguish between forged, acquired-but-unforged, and unacquired overclocks

## Privacy

_DRG Completionist_ respects your privacy. The app is entirely serverless and uses the browser's local storage to keep track of your progress. No personally identifying information is ever collected or stored.

If you choose to upload your save file, neither the file nor its contents ever leaves your computer. The save file parser is compiled from [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) into [WASM](https://en.wikipedia.org/wiki/WebAssembly) specifically so it can run completely within your browser. As always, you are welcome to [inspect the source code](https://github.com/BobertForever/drg-completionist/tree/main/save-parser) to see what it's doing.

The only tracking we do are a few fully anonymous Google Analytics tags that allow us to see how (or even if) this app is used. These tags are blocked by default if you use nearly any of the privacy-oriented browser settings and extensions that are widely available today.

## Special Thanks

- The folks who maintain the [Deep Rock Galactic Wiki](https://deeprockgalactic.gamepedia.com/Deep_Rock_Galactic_Wiki), which provided all the pictures and data that make this app run.
- [@robertnunn](https://github.com/robertnunn) for their work on [DRG-Save-Editor](https://github.com/robertnunn/DRG-Save-Editor) that helped us get us started on our save parser
- The couple Ghost Ship Games devs on Discord who got us pointed in the right direction with save file stuff early on

## Disclaimer

Neither this app nor its developers are associated with Deep Rock Galactic or Ghost Ship Games in any way whatsoever. _(But we really admire what they do.)_

---

###### README Last Updated: Feb 24. 2021
