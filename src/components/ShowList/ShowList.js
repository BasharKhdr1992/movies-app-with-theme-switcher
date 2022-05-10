import React, { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';
import List from '../UI/List';
import ShowCard from './ShowCard';
import './ShowList.css';

const ShowList = () => {
  const { shows } = useContext(ShowContext);

  return (
    <List>
      {shows.shows.map((show) => {
        return <ShowCard key={show.id} data={show} />;
      })}
    </List>
  );
};

export default ShowList;
