# Fix Human Sleep: Funniest Patch Note

[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A single line of patch notes announcing that human sleep has been fixed,
written for the [make.fun "Fix Human Sleep: Funniest Patch Note" bounty](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) ($2 prize).

## About

The line, in full:

> Fixed: sleep no longer pauses at 2:47 a.m. to ask "Are you still watching?"

It reads like a real changelog entry — terse, confident, "Fixed:" up front —
and the joke is the one every streamer-era insomniac recognises: sleep
behaving like a video app that keeps checking whether you are still there.
One line, 75 characters, under the 160-character cap.

## How to run

Requires Node 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
```

It prints the patch-note line and writes it to `/output/entry.txt`.

## Files

- `main.ts` — the entry program; writes the line to `/output/entry.txt`
- `entry.txt` — the patch-note line itself
- `LICENSE` — MIT

## License

MIT — see [LICENSE](./LICENSE).
