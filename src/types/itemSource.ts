export enum ItemSource {
  ArmorMastery = 'Armor Mastery',
  Assignment = 'Assignment',
  CargoCrate = 'Cargo Crate',
  DLC = 'DLC',
  LostPack = 'Lost Pack',
  MatrixCore = 'Matrix Core',
  PerformancePass = 'Performance Pass',
}

export interface ObtainableItem {
  name: string;
  itemSource: ItemSource;
  requiredLevel?: number;
}
