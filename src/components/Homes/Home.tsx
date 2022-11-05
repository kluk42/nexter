import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as HousePlan } from '../../assets/house-plan.svg';
import { ReactComponent as Key } from '../../assets/key.svg';
import { ReactComponent as MapPin } from '../../assets/map-pin.svg';
import { ReactComponent as Person } from '../../assets/person.svg';
import { Button } from '../Button/Button';

import './Homes.scss';

export type HomeProps = {
  cardName: string;
  imgPath: string;
  locationName: string;
  roomsNumber: number;
  area: number;
  price: string;
};

export const Home = ({ cardName, imgPath, locationName, roomsNumber, area, price }: HomeProps) => {
  return (
    <div className="home">
      <img src={imgPath} alt="House 1" className="home__img" />
      <Heart className="home__like" />
      <h5 className="home__name">{cardName}</h5>
      <div className="home__property home__location">
        <MapPin className="home__property-icon" />
        <p className="home__property-description">{locationName}</p>
      </div>
      <div className="home__property home__rooms">
        <Person className="home__property-icon" />
        <p className="home__property-description">{roomsNumber}</p>
      </div>
      <div className="home__property">
        <HousePlan className="home__property-icon" />
        <p className="home__property-description">
          {area} 2 m<sup>2</sup>
        </p>
      </div>
      <div className="home__property">
        <Key className="home__property-icon" />
        <p className="home__property-description">{price}</p>
      </div>
      <Button className="home__btn" title="Contact realtor" />
    </div>
  );
};
