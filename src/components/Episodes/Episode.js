import React, { useContext, useState, useEffect } from 'react';
import { EpisodeContext } from './../../context/EpisodeContext';
import { useParams } from 'react-router-dom';
import './Episode.css';
import { ThemeContext } from './../../context/ThemeContext';
import CenteredContainer from '../UI/CenteredContainer';
import Spinner from '../UI/Spinner';
import Error from '../UI/Error';
import { renderHtml } from './../../utils/index';
import Back from '../UI/Back';

const Episode = () => {
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const { episodes, addEpisodes } = useContext(EpisodeContext);
  const { theme } = useContext(ThemeContext);

  const { id } = useParams();

  const next = () => {
    setEpisodeIndex((prev) => {
      if (prev === episodes.episodes.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const previous = () => {
    setEpisodeIndex((prev) => {
      if (prev === 0) {
        return episodes.episodes.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    if (id !== null) {
      addEpisodes(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (episodes.isLoading) {
    return (
      <CenteredContainer>
        <Spinner />
      </CenteredContainer>
    );
  } else if (episodes.error) {
    return (
      <CenteredContainer>
        <Error>{episodes.error}</Error>
      </CenteredContainer>
    );
  } else if (episodes.episodes.length > 0) {
    const btnStyle = { backgroundColor: theme.element, color: theme.text };

    return (
      <div className="episode" style={{ backgroundColor: theme.bg }}>
        <Back />
        <div className="episode-img-container">
          <img
            src={episodes.episodes[episodeIndex].image?.original}
            alt={episodes.episodes[episodeIndex].name}
            title={episodes.episodes[episodeIndex].name}
          />
          <button onClick={next} style={btnStyle} className="btn btn-next">
            {`>`}
          </button>
          <button
            onClick={previous}
            style={btnStyle}
            className="btn btn-previous"
          >
            {`<`}
          </button>
        </div>
        <div style={{ borderBottomColor: theme.text }} className="extra-info">
          <div>
            <h4 style={{ color: theme.text }}>Title</h4>
            <p style={{ color: theme.text }}>
              {episodes.episodes[episodeIndex].name}
            </p>
          </div>
          <div>
            <h4 style={{ color: theme.text }}>Rating</h4>
            <p style={{ color: theme.text }}>
              {episodes.episodes[episodeIndex].rating.average}
              &nbsp;/&nbsp;10
            </p>
          </div>
          <div>
            <h4 style={{ color: theme.text }}>Number</h4>
            <p style={{ color: theme.text }}>
              {episodes.episodes[episodeIndex].number}&nbsp;/&nbsp;
              {episodes.episodes.length}
            </p>
          </div>
        </div>
        {renderHtml(
          episodes.episodes[episodeIndex].summary,
          'episode-summary',
          theme.text
        )}
      </div>
    );
  } else {
    return (
      <CenteredContainer>
        <Error>No Data Found</Error>
      </CenteredContainer>
    );
  }
};

export default Episode;
