export interface CarDetails {
  horsepower: number;
  weight?: string;
  charging_time?: string;
  gearbox?: string;
  doors?: number;
}

export interface CarType {
  id: number;
  type: string;
  typeName: string;
  image: string;
  name: string;
  details: CarDetails;
}

export interface InitStateType {
  carsList: {
    loading: boolean;
    error: null | string;
    data: CarType[] | null;
  };
}

export interface TypeFilter {
  sport: boolean;
  wheels2: boolean;
  electrical: boolean;
}
