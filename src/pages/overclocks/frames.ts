const frames = <M extends { [k: string]: Promise<typeof import("*.png")> }>(
  things: M
) => things;

export default frames({
  clean: import("assets/overclocks/frames/clean.png"),
  balanced: import("assets/overclocks/frames/balanced.png"),
  unstable: import("assets/overclocks/frames/unstable.png"),
});
