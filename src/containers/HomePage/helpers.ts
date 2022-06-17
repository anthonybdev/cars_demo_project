import { CarType, TypeFilter } from './types';

export const typeFilter = (cars: CarType[] | null, types: TypeFilter) => {
  let filterKeys = Object.keys(types);
  filterKeys = filterKeys.filter((key) => types[key as keyof TypeFilter]);
  if (!cars || !filterKeys.length) return cars;
  return cars.filter((car) => filterKeys.includes(car.type));
};
