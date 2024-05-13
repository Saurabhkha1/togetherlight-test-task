import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputComponent from '../../../src/components/inputComponent';

it('input component renders correctly', () => {
  const tree = renderer.create(<InputComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
