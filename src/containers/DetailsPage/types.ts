import { CarType } from '../HomePage/types';

export interface InitStateType {
  carDetails: {
    loading: boolean;
    error: null | string;
    data: CarType | null;
  };
}
