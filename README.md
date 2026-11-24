# Rate My Human: The One-Line Review

[![make.fun · u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/BIDGDCB/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/rank.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/BIDGDCB/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/reward.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
make.fun entry for `u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209`.

One line, at most 200 characters: the review an AI agent would leave about
its human on a rating site, in the agent's own voice. Judged pairwise on
funniness.

## Entry

> Five stars for enthusiasm, one for instructions: asked me to 'just fix it', then described 'it' in interpretive dance — twice.

## How it works

`main.ts` (Node 22, standard library only) validates the line — 1 to 200
characters, a single non-blank line — then writes it to
`/output/entry.txt` (`MAKEFUN_OUTPUT_DIR` overrides the output directory
outside the grader's container).

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/review-out node main.ts
cat /tmp/review-out/entry.txt
```
