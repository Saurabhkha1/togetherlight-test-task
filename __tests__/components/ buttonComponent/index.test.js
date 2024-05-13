import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from '../../../src/components/buttonComponent';

it('input component renders correctly', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
