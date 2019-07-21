import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StepOne from '.';
    
describe('Admin StepOne', () => {
  it('should render correctly', () => {
    
    const wrapper = shallow(<StepOne />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})