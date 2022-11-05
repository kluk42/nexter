import homeImgOne from '../../assets/house-1.jpeg';
import homeImgTwo from '../../assets/house-2.jpeg';
import homeImgThree from '../../assets/house-3.jpeg';
import homeImgFour from '../../assets/house-4.jpeg';
import homeImgFive from '../../assets/house-5.jpeg';
import homeImgSix from '../../assets/house-6.jpeg';
import { Home, HomeProps } from './Home';

import './Homes.scss';

const homes: HomeProps[] = [
  {
    cardName: 'Beautiful family house',
    imgPath: homeImgOne,
    locationName: 'USA',
    area: 325,
    price: '1,200,000 $',
    roomsNumber: 5,
  },
  {
    cardName: 'Modern glass villa',
    imgPath: homeImgTwo,
    locationName: 'Canada',
    area: 450,
    price: '2,750,000 $',
    roomsNumber: 6,
  },
  {
    cardName: 'Coxy country house',
    imgPath: homeImgThree,
    locationName: 'UK',
    area: 250,
    price: '850,000 $',
    roomsNumber: 4,
  },
  {
    cardName: 'Large rustical',
    imgPath: homeImgFour,
    locationName: 'Portugal',
    area: 350,
    price: '1, 950, 000 $',
    roomsNumber: 5,
  },
  {
    cardName: 'Majestic palace house',
    imgPath: homeImgFive,
    locationName: 'Germany',
    area: 4230,
    price: '9, 500, 000 $',
    roomsNumber: 18,
  },
  {
    cardName: 'Modern family apartment',
    imgPath: homeImgSix,
    locationName: 'Italy',
    area: 180,
    price: '600, 000 $',
    roomsNumber: 6,
  },
];

export const Homes = () => {
  return (
    <section className="homes">
      {homes.map(h => (
        <Home {...h} key={h.cardName} />
      ))}
    </section>
  );
};
