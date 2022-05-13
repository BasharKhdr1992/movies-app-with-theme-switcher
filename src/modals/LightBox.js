import React, { useContext, useEffect } from 'react';
import LightBoxComponent from './LightBoxComponent';
import Close from '../svgs/Close';
import './LightBox.css';
import { ShowContext } from './../context/ShowContext';
import CenteredContainer from '../components/UI/CenteredContainer';
import Spinner from '../components/UI/Spinner';
import Error from '../components/UI/Error';

const LightBox = () => {
  const { addImages, images, closeImagesModal, currentShow } =
    useContext(ShowContext);

  useEffect(() => {
    if (currentShow !== null) {
      addImages(currentShow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentShow]);

  const RenderModalContent = () => {
    if (images.isLoading) {
      return (
        <CenteredContainer>
          <Spinner />
        </CenteredContainer>
      );
    } else if (images.error) {
      return (
        <CenteredContainer>
          <Error>{images.error}</Error>
        </CenteredContainer>
      );
    } else {
      return (
        <>
          <div className="icon-close-container" onClick={closeImagesModal}>
            <Close />
          </div>
          <LightBoxComponent isInsideModal={true} images={images.images} />
        </>
      );
    }
  };

  return (
    <div className="lightbox-modal">
      <RenderModalContent />
    </div>
  );
};

export default LightBox;
