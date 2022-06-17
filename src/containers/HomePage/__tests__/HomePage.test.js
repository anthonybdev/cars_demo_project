import React from 'react';
import { shallow, mount } from 'enzyme';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { useSelector as useSelectorMock } from 'react-redux';
import HomePage from '../HomePage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementationOnce((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('HomePageTest', () => {
  let mockedDispatch, data;

  beforeEach(() => {
    let useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    data = [
      {
        id: 1,
        typeName: 'Electrical',
        type: 'electrical',
        image: 'https://wallpaperaccess.com/full/486595.jpg',
        name: 'Tesla Model S',
        details: {
          test: 'test',
        },
      },
      {
        id: 2,
        typeName: 'Sport',
        type: 'sport',
        image: 'https://wallpaperaccess.com/full/3184770.jpg',
        name: 'BMW M5',
        details: {
          test: 'test',
        },
      },
    ];
  });

  it('should call dispatch', () => {
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(true);

    const wrapper = mount(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should render cards', () => {
    useSelectorMock.mockReturnValueOnce(data);
    useSelectorMock.mockReturnValueOnce(false);

    const wrapper = mount(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const checkbox = wrapper.find(Checkbox);
    expect(checkbox).toHaveLength(3);
    // console.log(checkbox.at(0).props());
    // checkbox.at(0).simulate('change', { target: { checked: true } });

    expect(wrapper.find(Checkbox).at(0).props().checked).toBe(false);
  });
});
