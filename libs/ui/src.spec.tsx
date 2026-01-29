import React from 'react';
import { render } from '@testing-library/react-native';
import Src from './src';

describe('Src', () => {
  it('should render successfully', () => {
    const { root } = render(< Src />);
    expect(root).toBeTruthy();
  });
});
