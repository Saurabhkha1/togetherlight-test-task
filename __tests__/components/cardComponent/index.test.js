import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CardComponent} from '../../../src/components';

it('input component renders correctly', () => {
  const tree = renderer.create(<CardComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
