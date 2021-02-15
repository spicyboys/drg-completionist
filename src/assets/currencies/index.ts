const currencies = <M extends { [k: string]: Promise<typeof import("*.png")> }>(
  things: M
) => things;

export default currencies({
  credit: import("./Credit.png"),
  bismor: import("./Bismor.png"),
  croppa: import("./Croppa.png"),
  enorPearl: import("./EnorPearl.png"),
  jadiz: import("./Jadiz.png"),
  magnite: import("./Magnite.png"),
  umanite: import("./Umanite.png")
});
