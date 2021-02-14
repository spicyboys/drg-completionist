const frames = <M extends { [k: string]: Promise<typeof import("*.png")> }>(
  things: M
) => things;

export default frames({
  clean: import("./clean.png"),
  balanced: import("./balanced.png"),
  unstable: import("./unstable.png"),
});
