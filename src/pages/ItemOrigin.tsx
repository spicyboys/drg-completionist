import { Tooltip } from 'antd';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import { Credit } from 'assets/currencies';
import {
  Armor,
  Assignment,
  CargoCrateMed,
  LostPack,
  MatrixCore,
  PerformancePass,
} from 'assets/other';
import Image from 'components/Image';
import { ItemSource, ObtainableItem } from 'types/itemSource';

export default function ItemOrigin(props: {
  item: ObtainableItem;
  filter?: string;
  acquired?: boolean;
}) {
  const title = useMemo(() => {
    const title = 'Obtained via ' + props.item.itemSource;
    if (props.item.requiredLevel !== undefined)
      return title + ' at Rank ' + props.item.requiredLevel;
    return title;
  }, [props.item.itemSource, props.item.requiredLevel]);

  const iconSrc = useMemo(() => {
    switch (props.item.itemSource) {
      case ItemSource.ArmorMastery:
        return Armor;
      case ItemSource.Assignment:
        return Assignment;
      case ItemSource.CargoCrate:
        return CargoCrateMed;
      case ItemSource.DLC:
        return Credit;
      case ItemSource.LostPack:
        return LostPack;
      case ItemSource.MatrixCore:
        return MatrixCore;
      case ItemSource.PerformancePass:
        return PerformancePass;
      default:
        return Assignment;
    }
  }, [props.item.itemSource]);

  const filter = useMemo(() => {
    const needs_inverting =
      props.acquired && (props.item.itemSource === ItemSource.LostPack);
    if (needs_inverting) {
      return 'grayscale(1) invert(1) brightness(100)';
    }
    return undefined;
  }, [props.item.itemSource, props.acquired]);

  return (
    <Tooltip
      title={title}
      trigger={isMobile ? 'click' : 'hover'}
      destroyTooltipOnHide
    >
      <Image
        alt={`${props.item.name} is acquired through ${props.item.itemSource}`}
        src={iconSrc}
        style={{
          float: 'right',
          height: isMobile ? 30 : 20,
          marginTop: isMobile ? -30 : -20,
          opacity: 1,
          width: 'auto',
          filter: filter,
        }}
      />
    </Tooltip>
  );
}
