import React, { useContext, useEffect, useState } from 'react';
import List from '../UI/List';
import Card from '../UI/Card';
import Error from '../UI/Error';
import { renderHtml } from '../../utils';
import { SeasonContext } from '../../context/SeasonContext';
import { useParams, Link } from 'react-router-dom';
import './index.css';
import CenteredContainer from '../UI/CenteredContainer';
import Spinner from '../UI/Spinner';
import Overlay from '../UI/Overlay';
import { ThemeContext } from './../../context/ThemeContext';

const Index = () => {
  const { id } = useParams();
  const { seasons, addSeasons } = useContext(SeasonContext);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const { theme } = useContext(ThemeContext);

  const setSeason = (id) => {
    setSelectedSeason(id);
  };

  useEffect(() => {
    if (id) {
      addSeasons(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (seasons.isLoading) {
    return (
      <CenteredContainer>
        <Spinner />
      </CenteredContainer>
    );
  } else if (seasons.error) {
    <CenteredContainer>
      <Error>{seasons.error}</Error>
    </CenteredContainer>;
  } else if (seasons.seasons.length > 0) {
    return (
      <List>
        {seasons.seasons.map((season) => {
          const renderSummary = selectedSeason === season.id;
          return (
            <>
              <Card key={season.id}>
                <img
                  src={season.image.original}
                  className="img"
                  alt={season.name}
                  title={season.title}
                />
                <Overlay className="centered">
                  <button
                    onClick={() => setSeason(season.id)}
                    className="overlay-link"
                  >
                    summary
                  </button>
                  <Link
                    to={`/seasons/${season.id}/episodes`}
                    className="overlay-link"
                  >
                    episodes
                  </Link>
                </Overlay>
              </Card>
              {renderSummary &&
                (season.summary ? (
                  renderHtml(season.summary, 'season-summary', theme.text)
                ) : (
                  <p className="season-summary">No Summary Found</p>
                ))}
            </>
          );
        })}
      </List>
    );
  } else {
    return <CenteredContainer>Not Data Found</CenteredContainer>;
  }
};

export default Index;
