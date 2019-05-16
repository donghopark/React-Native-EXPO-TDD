import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('renderring', () => {
  let app;
  beforeEach(() => {
    app = mount(<App/>);
  })
  it('should render View', () => {
    expect(app.find('View')).toHaveLength(1);
  });

  it('should render Text', () => {
    expect(app.find('Text')).toHaveLength(1);
  });

  it('should render welcome text', () => {
    expect(app.find('Text').text()).toEqual('Welcome to React Native!');
  })
})