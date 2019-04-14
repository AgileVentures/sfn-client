import React from 'react';
import ArtistImage from './ArtistImage';

import { shallow } from 'enzyme';

describe('ArtistImage', () => {
  let artistImageWrapper;
  beforeEach(() => {
    artistImageWrapper = shallow(<ArtistImage />);
  });

  it('has an image of the artist', () => {
    expect(artistImageWrapper.find('img').length).toEqual(1);
  });
});
