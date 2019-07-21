import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StepTwo from '.';
    
describe('Landlord StepTwo', () => {
  it('should render correctly', () => {
    
    const wrapper = shallow(<StepTwo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})