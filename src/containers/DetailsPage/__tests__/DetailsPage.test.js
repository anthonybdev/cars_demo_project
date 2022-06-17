import React from 'react';
import { shallow, mount } from 'enzyme';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { useSelector as useSelectorMock } from 'react-redux';
import DetailsPage from '../DetailsPage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementationOnce((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('DetailsPage Test', () => {
  let mockedDispatch, data;

  beforeEach(() => {
    let useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    data = {
      id: 1,
      typeName: 'Electrical',
      type: 'electrical',
      image: 'https://wallpaperaccess.com/full/486595.jpg',
      name: 'Tesla Model S',
      details: {
        test: 'test',
      },
    };
  });
  it('should call dispatch', () => {
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(true);

    const wrapper = mount(
      <BrowserRouter>
        <DetailsPage />
      </BrowserRouter>,
    );

    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should render car', () => {
    useSelectorMock.mockReturnValueOnce(data);
    useSelectorMock.mockReturnValueOnce(false);

    const wrapper = mount(
      <BrowserRouter>
        <DetailsPage />
      </BrowserRouter>,
    );
    expect(wrapper).toBeDefined();
  });
});
