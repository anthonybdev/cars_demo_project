import axios from 'axios';

class ApiService {
  getAllCars = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/anthonybdev/cars_jsonDb/cars',
    );
    return response?.data;
  };

  getCarById = async (id: number) => {
    const response = await axios.get(
      `https://my-json-server.typicode.com/anthonybdev/cars_jsonDb/cars/${id}`,
    );

    return response?.data;
  };
}

export default new ApiService();
