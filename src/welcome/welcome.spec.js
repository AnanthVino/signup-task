import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Welcome from '.';
    
describe('Welcome', () => {
  it('should render correctly', () => {
    
    const wrapper = shallow(<Welcome />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})