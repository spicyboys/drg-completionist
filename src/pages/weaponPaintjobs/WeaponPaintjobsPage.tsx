import { useCallback } from 'react';
import { Miner } from 'data/miner';
import { WeaponPaintjobs } from 'data/weaponPaintjobs';
import { MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import MinerFrameworks from './MinerWeaponPaintjobs';

export default function FrameworksPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const weapons = MinerWeapons[miner as Miner];
    const acquiredPaintjobs = await db.weaponPaintjobs
      .where('weapon')
      .anyOf(weapons)
      .count();
    return acquiredPaintjobs / (WeaponPaintjobs.length * weapons.length);
  }, []);
  return (
    <MinerPageLayout category="WeaponPaintjobs" getProgress={getProgress}>
      {(miner) => <MinerFrameworks miner={miner as Miner} />}
    </MinerPageLayout>
  );
}
