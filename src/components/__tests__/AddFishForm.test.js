import React from 'react';
import { shallow } from 'enzyme';
import AddFishForm from '../AddFishForm';

it('match snapshot', () => {
  const wrapper = shallow(<AddFishForm addFish={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
  expect(1).toEqual(1);
});
