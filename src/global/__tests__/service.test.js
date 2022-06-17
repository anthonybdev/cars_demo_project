import axios from 'axios';

import ApiService from '../service';

jest.mock('axios');

describe('getAllCars', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: 'test',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(ApiService.getAllCars()).resolves.toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(ApiService.getAllCars()).rejects.toThrow(errorMessage);
  });
});

describe('getCarById', () => {
  it('successfully gets data from an API', async () => {
    const data = {
      data: 'test',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(ApiService.getCarById(1)).resolves.toEqual(data.data);
  });

  it('throw error from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(ApiService.getCarById(1)).rejects.toThrow(errorMessage);
  });
});
