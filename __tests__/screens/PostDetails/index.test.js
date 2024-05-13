import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PostDetailsScreen} from '../../../src/screens';

describe('PostDetailsScreen Component', () => {
  it('renders correctly with route params', () => {
    const item = {
      userId: 1,
      title: 'Test Title',
      body: 'Test Body',
    };

    const route = {
      params: {
        item: item,
      },
    };

    const tree = renderer.create(<PostDetailsScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty route params', () => {
    const route = {
      params: {
        item: null,
      },
    };

    const tree = renderer.create(<PostDetailsScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();

    // Check if the rendered text elements are empty
    const textElements = tree.children[0].children;
    expect(textElements[0].children[0]).toBe('User Id: ');
    expect(textElements[1].children[0]).toBe('Title: ');
    expect(textElements[2].children[0]).toBe('Description: ');
  });
});
