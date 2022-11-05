import firstImgPath from '../../assets/story-1.jpeg';
import secondImgPath from '../../assets/story-2.jpeg';

import './Story.scss';

export const Story = () => {
  return (
    <>
      <div className="story__pictures">
        <img src={firstImgPath} alt="Couple with new house" className="story__img-1" />
        <img src={secondImgPath} alt="New house" className="story__img-2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy customers</h3>
        <h2 className="heading-2 heading-2__dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text mb-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </>
  );
};
