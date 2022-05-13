import React, { useState, useContext } from 'react';
import './LightBoxComponent.css';
import { ShowContext } from '../context/ShowContext';
import Previous from './../svgs/Previous';
import Next from './../svgs/Next';
import { useWindowSize } from '../custom-hooks/useWindowSize';

const LightBoxComponent = ({ isInsideModal, images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const { isImagesModal } = useContext(ShowContext);
  const [width] = useWindowSize();

  const updateImage = (index) => {
    setImgIndex(index);
  };

  const next = () => {
    setImgIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const previous = () => {
    setImgIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="show-img-container">
      <div className="main-img-container">
        <img
          src={images[imgIndex]?.resolutions.original.url}
          className="show-img"
          alt={`show img ${imgIndex + 1}`}
        />
        {((isImagesModal && isInsideModal) || width < 720) && (
          <>
            <button className="next" onClick={next}>
              <Next />
            </button>
            <button className="previous" onClick={previous}>
              <Previous />
            </button>
          </>
        )}
      </div>
      <div className="thumbnails">
        {images.map((thumbnail, index) => {
          return (
            <div
              className="thumbnail-container"
              key={index}
              onClick={() => updateImage(index)}
            >
              {imgIndex === index && (
                <div
                  className={`thumbnail-overlay ${
                    imgIndex === index ? 'thumbnail-active-overlay' : undefined
                  } `}
                />
              )}
              <img
                src={thumbnail.resolutions.original.url}
                className={`thumbnail`}
                alt={`show thumbnail ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightBoxComponent;
