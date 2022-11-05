import img1 from '../../assets/gal-1.jpeg';
import img10 from '../../assets/gal-10.jpeg';
import img11 from '../../assets/gal-11.jpeg';
import img12 from '../../assets/gal-12.jpeg';
import img13 from '../../assets/gal-13.jpeg';
import img14 from '../../assets/gal-14.jpeg';
import img2 from '../../assets/gal-2.jpeg';
import img3 from '../../assets/gal-3.jpeg';
import img4 from '../../assets/gal-4.jpeg';
import img5 from '../../assets/gal-5.jpeg';
import img6 from '../../assets/gal-6.jpeg';
import img7 from '../../assets/gal-7.jpeg';
import img8 from '../../assets/gal-8.jpeg';
import img9 from '../../assets/gal-9.jpeg';

import './Gallery.scss';

export const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item_1">
        <img src={img1} alt="Gallery image 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_2">
        <img src={img2} alt="Gallery image 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_3">
        <img src={img3} alt="Gallery image 3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_4">
        <img src={img4} alt="Gallery image 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_5">
        <img src={img5} alt="Gallery image 5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_6">
        <img src={img6} alt="Gallery image 6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_7">
        <img src={img7} alt="Gallery image 7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_8">
        <img src={img8} alt="Gallery image 8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_9">
        <img src={img9} alt="Gallery image 9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_10">
        <img src={img10} alt="Gallery image 10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_11">
        <img src={img11} alt="Gallery image 11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_12">
        <img src={img12} alt="Gallery image 12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_13">
        <img src={img13} alt="Gallery image 13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item_14">
        <img src={img14} alt="Gallery image 14" className="gallery__img" />
      </figure>
    </section>
  );
};
