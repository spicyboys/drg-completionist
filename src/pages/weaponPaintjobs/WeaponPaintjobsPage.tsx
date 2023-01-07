import { useCallback } from 'react';
import { Miner } from 'data/miner';
import { WeaponPaintjobs } from 'data/weaponPaintjobs';
import { MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import MinerWeaponPaintjobs from './MinerWeaponPaintjobs';

export default function WeaponPaintjobPage() {
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
      {(miner) => <MinerWeaponPaintjobs miner={miner as Miner} />}
    </MinerPageLayout>
  );
}
