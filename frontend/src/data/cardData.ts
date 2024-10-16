import {
  MdOutlineCleaningServices,
  MdBuild,
  MdBrush,
  MdLocalShipping,
  MdPlumbing,
  MdOutlineElectricBolt
} from 'react-icons/md';

import {IconType} from 'react-icons';

interface CardData {
  id: number;
  icon: IconType;
  title: string;
}

const cardData: CardData[] = [
  {id: 1, icon: MdOutlineCleaningServices, title: 'Cleaning'},
  {id: 2, icon: MdBuild, title: 'Repair'},
  {id: 3, icon: MdBrush, title: 'Painting'},
  {id: 4, icon: MdLocalShipping, title: 'Shifting'},
  {id: 5, icon: MdPlumbing, title: 'Plumbing'},
  {id: 6, icon: MdOutlineElectricBolt, title: 'Electrical'}
];

export default cardData;
