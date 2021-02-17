import { RcFile } from 'antd/lib/upload';

export default function parseSaveFile(
  file: RcFile,
  overclockGuids: { [s: string]: { weapon: string; name: string } },
): Promise<{ overclocks: { weapon: string; name: string }[] }> {
  const stringToHex = (str: string): string => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
  };

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      if (text === null || text === undefined) {
        reject();
        return;
      }

      const start = text.indexOf('ForgedSchematics');
      const overclockCount = parseInt(
        text[start + 63].charCodeAt(0).toString(16),
      );

      const offset = 141;
      const overclocks = [];
      for (let i = 0; i < overclockCount; i++) {
        const guid = stringToHex(
          text.slice(start + offset + i * 16, start + offset + i * 16 + 16),
        ).toUpperCase();
        const overclock = overclockGuids[guid];
        if (overclock !== undefined) {
          overclocks.push(overclock);
        } else {
          console.warn(`Failed to find overclock with guid ${guid}`);
        }
      }

      resolve({ overclocks });
    };
    reader.readAsBinaryString(file);
  });
}
