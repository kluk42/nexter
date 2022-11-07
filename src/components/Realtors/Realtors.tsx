import realtorOneImg from '../../assets/realtor-1.jpeg';
import realtorTwoImg from '../../assets/realtor-2.jpeg';
import realtorThreeImg from '../../assets/realtor-3.jpeg';

import './Realtors.scss';

export const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <ul className="realtors__list">
        <li className="realtors__list-item">
          <img src={realtorOneImg} alt="Realtor 1" className="realtors__img" />
          <h4 className="heading-4 heading-4__light">Eric Feinman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </li>
        <li className="realtors__list-item">
          <img src={realtorTwoImg} alt="Realtor 2" className="realtors__img" />
          <h4 className="heading-4 heading-4__light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </li>
        <li className="realtors__list-item">
          <img src={realtorThreeImg} alt="Realtor 3" className="realtors__img" />
          <h4 className="heading-4 heading-4__light">Toby Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </li>
      </ul>
    </div>
  );
};
