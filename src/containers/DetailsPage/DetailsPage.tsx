import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { CarDetails } from '../HomePage/types';
import { selectors } from './reducer';
import * as actions from './actions';
import s from './DetailsPage.module.scss';
import Loader from '../../components/Loader';
import { convertSpecString } from './helpers';

const DetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsData = useSelector(selectors.detailsData);
  const loading = useSelector(selectors.detailsLoading);

  useEffect(() => {
    dispatch(actions.getCarById.request(id));
  }, [dispatch, id]);

  return (
    <div className={s.contentWrapper}>
      <h2 className={s.title}>Details Page</h2>
      <Link className={s.btnBack} to="/">
        Back
      </Link>
      {!loading && detailsData ? (
        <div className={s.detailsWrapper}>
          <img className={s.detailsImage} src={detailsData.image} alt={detailsData.typeName} />
          <span className={s.detailsProp}>{detailsData.name}</span>
          <span className={s.detailsProp}>{detailsData.typeName}</span>
          {Object.keys(detailsData.details).map((spec) => (
            <span key={spec} className={s.detailsProp}>
              {convertSpecString(spec)}: {detailsData.details[spec as keyof CarDetails]}{' '}
            </span>
          ))}
        </div>
      ) : (
        <Loader className={s.loader} />
      )}
    </div>
  );
};

export default DetailsPage;
