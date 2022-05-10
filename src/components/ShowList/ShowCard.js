import React from 'react';
import Card from '../UI/Card';
import Overlay from '../UI/Overlay';
import { Link } from 'react-router-dom';

const ShowCard = ({ data }) => {
  return (
    <Card className="card">
      <img
        src={data.image.original}
        className="img"
        alt={data.name}
        title={data.title}
      />
      <Overlay>
        <h2>
          <span className="rating">{data.rating.average}</span>&nbsp;/&nbsp;10
        </h2>
        <Link to={`/details/${data.id}`} className="overlay-link">
          details
        </Link>
        <Link to={`/seasons/${data.id}`} className="overlay-link">
          seasons
        </Link>
      </Overlay>
    </Card>
  );
};

export default ShowCard;
