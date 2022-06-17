import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { selectors } from './reducer';
import * as actions from './actions';
import Loader from '../../components/Loader';
import s from './HomePage.module.scss';
import CarCard from './components/CarCard';
import { TypeFilter } from './types';
import { typeFilter } from './helpers';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const carsList = useSelector(selectors.carsList);
  const loading = useSelector(selectors.carsLoading);
  const [types, setTypes] = useState<TypeFilter>({
    sport: false,
    wheels2: false,
    electrical: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypes({
      ...types,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    if (!carsList) dispatch(actions.getAllCars.request());
  }, [dispatch, carsList]);

  return (
    <div>
      <h1 className={s.title}>Home Page</h1>
      <div className={s.contentWrapper}>
        <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={types.sport} onChange={handleChange} name="sport" />}
              label="Sport"
            />
            <FormControlLabel
              control={<Checkbox checked={types.wheels2} onChange={handleChange} name="wheels2" />}
              label="2 wheels"
            />
            <FormControlLabel
              control={
                <Checkbox checked={types.electrical} onChange={handleChange} name="electrical" />
              }
              label="Electrical"
            />
          </FormGroup>
        </div>
        <div className={s.carsWrapper}>
          {loading ? (
            <Loader className={s.loader} />
          ) : (
            typeFilter(carsList, types)?.map((car) => (
              <CarCard key={car.id} details={car}>
                {car.name}{' '}
              </CarCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
