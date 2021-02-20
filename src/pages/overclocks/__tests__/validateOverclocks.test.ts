import { overclocks } from 'pages/overclocks/OverclockData';
import saveParserOverclocks from '../../../../save-parser/src/guids.json';

test('Matches all overclocks from the save parser', () => {
  // Convert JS-defined overclocks to Weapon -> Overclock Name array
  const allOverclocks: { [s: string]: string[] } = {};
  Object.values(overclocks).forEach((o) => {
    Object.entries(o).forEach(([weapon, overclocks]) => {
      allOverclocks[weapon] = overclocks.map((overclock) => overclock.name);
    });
  });

  // Convery json-defined overclocks to the same format
  const allSaveParserOverclocks: { [s: string]: string[] } = {};
  Object.values(saveParserOverclocks).forEach(({ weapon, name }) => {
    if (weapon in allSaveParserOverclocks) {
      allSaveParserOverclocks[weapon].push(name);
    } else {
      allSaveParserOverclocks[weapon] = [name];
    }
  });

  Object.entries(allSaveParserOverclocks).forEach(
    ([weapon, weaponOverclocks]) => {
      expect(allOverclocks).toHaveProperty(weapon);
      for (const weaponOverclock of weaponOverclocks) {
        expect(allOverclocks[weapon]).toContain(weaponOverclock);
      }
    }
  );
});
