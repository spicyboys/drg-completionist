import { useCallback } from 'react';
import { Miner } from 'data/miner';
import {
  CommonWeaponPaintjobs,
  MatrixWeaponPaintjobs,
  UniqueWeaponPaintjobs,
} from 'data/weaponPaintjobs';
import { MinerWeapons } from 'data/weapons';
import { AppDatabase } from 'db/AppDatabase';
import MinerPageLayout from 'pages/MinerPageLayout';
import MinerUniqueWeaponPaintjobs from './MinerUniqueWeaponPaintjobs';
import MinerWeaponPaintjobs from './MinerWeaponPaintjobs';

export default function WeaponPaintjobPage() {
  const getProgress = useCallback(async (db: AppDatabase, miner: Miner) => {
    const weapons = MinerWeapons[miner as Miner];
    const acquiredMatrixPaintjobs = await db.matrixWeaponPaintjobs
      .where('miner')
      .anyOf(miner)
      .filter((paintjob) => paintjob.isForged)
      .count();
    const acquiredUniquePaintjobs = await db.uniqueWeaponPaintjobs
      .where('weapon')
      .anyOf(weapons)
      .count();
    const acquiredCommonPaintjobs = await db.commonWeaponPaintjobs
      .where('miner')
      .anyOf(miner)
      .count();
    const num_acquired =
      acquiredMatrixPaintjobs +
      acquiredUniquePaintjobs +
      acquiredCommonPaintjobs;
    const total_number =
      MatrixWeaponPaintjobs.length +
      UniqueWeaponPaintjobs.length *
        Object.values(MinerWeapons[miner as Miner]).length +
      CommonWeaponPaintjobs.length;
    return num_acquired / total_number;
  }, []);

  return (
    <MinerPageLayout category="Weapons" getProgress={getProgress}>
      {(miner) => (
        <>
          {UniqueWeaponPaintjobs.length > 0 && <MinerUniqueWeaponPaintjobs miner={miner as Miner} />}
          <MinerWeaponPaintjobs miner={miner as Miner} />
        </>
      )}
    </MinerPageLayout>
  );
}
