import { ReactComponent as Globe } from '../../assets/globe.svg';
import { ReactComponent as Key } from '../../assets/key.svg';
import { ReactComponent as MapPin } from '../../assets/map-pin.svg';
import { ReactComponent as Realtor } from '../../assets/realtor.svg';
import { ReactComponent as SecuredCard } from '../../assets/secure-payment.svg';
import { ReactComponent as Trophy } from '../../assets/trophy.svg';
import './Features.scss';

export const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <Globe className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">Worlds&apos;s best luxury homes</h4>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <Trophy className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">Only the best properties</h4>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut
          quia.
        </p>
      </div>
      <div className="feature">
        <MapPin className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">All top locations</h4>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
        </p>
      </div>
      <div className="feature">
        <Key className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">New home in 1 week</h4>
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div className="feature">
        <Realtor className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">Top 1% realtors</h4>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus
          pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <SecuredCard className="feature__icon" />
        <h4 className="heading-4 heading-4__dark">Secure payments on nexter</h4>
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
        </p>
      </div>
    </section>
  );
};
