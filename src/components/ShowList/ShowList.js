import React, { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';
import CenteredContainer from '../UI/CenteredContainer';
import List from '../UI/List';
import SearchInput from '../UI/SearchInput';
import Spinner from '../UI/Spinner';
import ShowCard from './ShowCard';
import Error from '../UI/Error';
import './ShowList.css';

const ShowList = () => {
  const { shows, searchShows } = useContext(ShowContext);

  const RenderContent = () => {
    if (shows.isLoading) {
      return (
        <CenteredContainer>
          <Spinner />
        </CenteredContainer>
      );
    } else if (shows.error) {
      return (
        <CenteredContainer>
          <Error>{shows.error}</Error>
        </CenteredContainer>
      );
    } else if (shows.shows.length === 0) {
      return (
        <CenteredContainer>
          <Error>No Data Found</Error>
        </CenteredContainer>
      );
    }

    return (
      <List className="centered">
        {shows.shows.map((show) => {
          return <ShowCard key={show.id} data={show} />;
        })}
      </List>
    );
  };
  return (
    <>
      <SearchInput searchShows={searchShows} />
      {<RenderContent />}
    </>
  );
};

export default ShowList;
