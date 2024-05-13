import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {LoginScreen} from '../../../src/screens';

describe('Login Screen', () => {
  it('Login Screen renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
