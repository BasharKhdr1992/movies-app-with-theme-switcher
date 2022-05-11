import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { renderHtml } from '../../utils';
import { ThemeContext } from './../../context/ThemeContext';
import { ShowContext } from '../../context/ShowContext';
import CenteredContainer from './../UI/CenteredContainer';
import Divider from '../UI/Divider';
import Error from '../UI/Error';
import { useWindowSize } from './../../custom-hooks/useWindowSize';
import Spinner from '../UI/Spinner';

const Index = () => {
  const [show, setShow] = useState(null);
  const { theme } = useContext(ThemeContext);

  const { cast, addCast } = useContext(ShowContext);

  const [width] = useWindowSize();

  const { id } = useParams();
  useEffect(() => {
    if (localStorage.getItem('shows') !== null) {
      const shows = JSON.parse(localStorage.getItem('shows'));

      if (id !== null) {
        const foundShow = shows.find((show) => show.id === +id);
        if (foundShow !== undefined) {
          setShow(foundShow);
          addCast(id);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const renderRow = (title, value, color) => {
    return (
      <div className="more-details-row">
        <h3 style={{ color }}>{title}</h3>
        <p style={{ color }}>{value}</p>
      </div>
    );
  };

  const RenderCast = ({ textColor }) => {
    if (cast.isLoading) {
      return <Spinner />;
    } else if (cast.error) {
      return <Error>{cast.error}</Error>;
    }

    return cast.cast.map((item, index) => {
      return (
        <div className="cast-item" key={index}>
          <img
            src={item.person.image?.original}
            alt={item.person.name}
            title={item.person.name}
          />
          <p className="person-name" style={{ color: textColor }}>
            {item.person.name}
          </p>
          <em className="character-name" style={{ color: textColor }}>
            {item.character.name}
          </em>
        </div>
      );
    });
  };

  const textColor = theme.text;
  if (show !== null) {
    return (
      <div className="show-details" style={{ backgroundColor: theme.bg }}>
        <div className="show-img-container">
          <img src={show.image.original} alt={show.name} title={show.name} />
        </div>
        {renderHtml(show.summary, 'show-summary', textColor)}
        {width < 900 && <Divider />}
        <div className="more-details">
          {renderRow('Name', show.name, textColor)}
          {renderRow('Language', show.language, textColor)}
          {renderRow(
            'Average Runtime',
            `${show.averageRuntime} minutes`,
            textColor
          )}
          {renderRow('Premiered', show.premiered, textColor)}
          {renderRow('Ended', show.ended, textColor)}
          {renderRow('Genres', show.genres.join(', '), textColor)}
          <>
            <h2 style={{ color: textColor }}>Cast</h2>
            <div className="show-cast">
              {<RenderCast textColor={textColor} />}
            </div>
          </>
        </div>
      </div>
    );
  }
  return (
    <CenteredContainer>
      <Error>Show with id: {id} not found</Error>
    </CenteredContainer>
  );
};

export default Index;
