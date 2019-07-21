import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Admin from '.';
    
describe('Admin', () => {
  it('should render correctly', () => {
    
    const wrapper = shallow(<Admin />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})