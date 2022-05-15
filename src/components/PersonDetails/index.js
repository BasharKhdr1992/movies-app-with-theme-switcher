import React, { useReducer, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useParams } from 'react-router-dom';
import Back from './../UI/Back';
import { PersonReducer } from './../../reducers/PersonReducer';
import * as Api from '../../api/api';
import * as Types from '../../reducers/ActionTypes';
import CenteredContainer from './../UI/CenteredContainer';
import Spinner from './../UI/Spinner';
import Error from './../UI/Error';
import './index.css';

const Row = ({ title, text, color }) => {
  return (
    <div className="person-details-row">
      <h3 style={{ color }}>{title}</h3>
      <p style={{ color }}>{text}</p>
    </div>
  );
};

const Index = () => {
  const { id } = useParams();

  const [state, dispatch] = useReducer(PersonReducer, {
    isLoading: false,
    error: null,
    person: null,
  });

  const { theme } = useContext(ThemeContext);

  const addPerson = (personId) => {
    dispatch({
      type: Types.PERSON_LOADING,
    });

    setTimeout(() => Api.addPerson(personId, dispatch), 2500);
  };

  useEffect(() => {
    if (id !== null) {
      addPerson(id);
    }
  }, [id]);

  if (state.isLoading) {
    return (
      <CenteredContainer>
        <Spinner />
      </CenteredContainer>
    );
  } else if (state.person !== null) {
    return (
      <div className="person-details-wrapper">
        <Back />
        <div className="person-details">
          <div className="person-img-container">
            <img src={state.person.image?.original} alt={state.person.name} />
          </div>
          <div className="person">
            <Row title={'name'} text={state.person.name} color={theme.text} />
            <Row
              title={'country'}
              text={state.person.country.name}
              color={theme.text}
            />
            <Row
              title={'birthday'}
              text={state.person.birthday}
              color={theme.text}
            />
            <Row
              title={'deathday'}
              text={state.person.deathday}
              color={theme.text}
            />
            <Row
              title={'gender'}
              text={state.person.gender}
              color={theme.text}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <CenteredContainer>
      <Error>{state.error}</Error>
    </CenteredContainer>
  );
};

export default Index;
