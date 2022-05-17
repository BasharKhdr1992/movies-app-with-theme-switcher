import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';
import { renderHtml } from '../../utils';
import { ThemeContext } from './../../context/ThemeContext';
import { ShowContext } from '../../context/ShowContext';
import CenteredContainer from './../UI/CenteredContainer';
import Divider from '../UI/Divider';
import Error from '../UI/Error';
import { useWindowSize } from '../../custom-hooks/useWindowSize';
import Spinner from '../UI/Spinner';
import Back from '../UI/Back';
import { SeasonContext } from './../../context/SeasonContext';

const Index = () => {
  const [show, setShow] = useState(null);
  const { theme } = useContext(ThemeContext);

  const { cast, addCast, setCurrentShow, openImagesModal } =
    useContext(ShowContext);

  const { seasons, addSeasons } = useContext(SeasonContext);

  const [width] = useWindowSize();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('shows') !== null) {
      const shows = JSON.parse(localStorage.getItem('shows'));

      if (id !== null) {
        const foundShow = shows.find((show) => show.id === +id);
        if (foundShow !== undefined) {
          setShow(foundShow);
          addCast(id);
          addSeasons(id);
          setCurrentShow(id);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const Row = ({ title, text, color }) => {
    return (
      <div className="more-details-row">
        <h3 style={{ color }}>{title}</h3>
        <p style={{ color }}>{text}</p>
      </div>
    );
  };

  const Cast = ({ color }) => {
    if (cast.isLoading) {
      return <Spinner />;
    } else if (cast.error) {
      return <Error>{cast.error}</Error>;
    }

    return cast.cast.map((item, index) => {
      return (
        <div className="cast-item" key={index}>
          <div
            className="cast-item-img-container"
            onClick={() => navigate(`/people/${item.person.id}`)}
          >
            <img
              src={item.person.image?.original}
              alt={item.person.name}
              title={item.person.name}
            />
            <div className="cast-item-overlay" />
          </div>
          <p className="person-name" style={{ color }}>
            {item.person.name}
          </p>
          <em className="character-name" style={{ color }}>
            {item.character.name}
          </em>
        </div>
      );
    });
  };

  const Seasons = ({ bg, color }) => {
    const seasonStyle = {
      backgroundColor: bg,
      color,
    };

    if (seasons.isLoading) {
      return <Spinner />;
    } else if (seasons.error) {
      return <Error>{seasons.error}</Error>;
    } else if (seasons.seasons.length > 0) {
      return (
        <div className="show-details-seasons" style={seasonStyle}>
          {seasons.seasons.map((season, index) => {
            return (
              <div className="show-details-season" key={season.id}>
                <div className="season-img-container">
                  <img
                    src={season.image?.original}
                    className="season-img"
                    alt={`season ${index + 1}`}
                  />
                </div>
                <div className="season-details">
                  <p>
                    {season.summary
                      ? renderHtml(season.summary, undefined, color)
                      : 'No summary found'}
                  </p>
                  <button
                    className="watch-now"
                    style={{ color }}
                    onClick={() => navigate(`/seasons/${season.id}/episodes`)}
                  >
                    {`watch now >>`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <Error>No Data Found</Error>;
    }
  };

  const textColor = theme.text;
  if (show !== null) {
    return (
      <div className="show-details-wrapper">
        <Back />
        <div className="show-details" style={{ backgroundColor: theme.bg }}>
          <div className="show-img-container">
            <img
              src={show.image.original}
              onClick={openImagesModal}
              alt={show.name}
              title={show.name}
            />
          </div>
          <div className="show-details-middle">
            {renderHtml(show.summary, 'show-summary', textColor)}
            <h2 style={{ color: textColor }}>seasons</h2>
            <Seasons
              color={textColor}
              bg={theme.element ? theme.element : theme.bg}
            />
          </div>
          {width < 900 && <Divider />}
          <div className="more-details">
            <Row title={'Name'} text={show.name} color={textColor} />
            <Row title={'Language'} text={show.language} color={textColor} />
            <Row
              title={'Average Runtime'}
              text={`${show.averageRuntime} minutes`}
              color={textColor}
            />
            <Row title={'Premiered'} text={show.premiered} color={textColor} />
            <Row title={'Ended'} text={show.ended} color={textColor} />
            <Row
              title={'Genres'}
              text={show.genres.join(', ')}
              color={textColor}
            />
            <>
              <h2 style={{ color: textColor }}>Cast</h2>
              <div className="show-cast">
                <Cast color={textColor} />
              </div>
            </>
          </div>
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
