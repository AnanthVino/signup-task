import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandLord from '.';
    
describe('LandLord', () => {
  it('should render correctly', () => {
    
    const wrapper = shallow(<LandLord />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})