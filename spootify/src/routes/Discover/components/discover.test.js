import React from 'react';
import { shallow } from 'enzyme';

import Discover from '..';
import discoverReducer from '../../../redux/reducers/discoverReducer';

describe('Discover Component', () => {
  describe('Discover Reducer - SET_NEW_RELEASES', () => {
    it('should return new state for new releases if receiving type "SET_NEW_RELEASES" ', () => {
      const releases = [
        {
          name: 'New Release',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273e1bcb03317aabee4e0ca1193',
              width: 640,
            },
          ],
        },
      ];
      const newState = discoverReducer(undefined, {
        type: 'SET_NEW_RELEASES',
        payload: releases,
      });
      expect(newState);
    });
  });

  describe('Discover Reducer - SET_PLAYLISTS', () => {
    it('should return new state for new releases if receiving type "SET_PLAYLISTS" ', () => {
      const playlists = [
        {
          name: 'Playlists',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273e1bcb03317aabee4e0ca1193',
              width: 640,
            },
          ],
        },
      ];
      const newState = discoverReducer(undefined, {
        type: 'SET_PLAYLISTS',
        payload: playlists,
      });
      expect(newState);
    });
  });

  describe('Discover Reducer - SET_CATEGORIES', () => {
    it('should return new state for new releases if receiving type "SET_CATEGORIES" ', () => {
      const categories = [
        {
          name: 'categories',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273e1bcb03317aabee4e0ca1193',
              width: 640,
            },
          ],
        },
      ];
      const newState = discoverReducer(undefined, {
        type: 'SET_CATEGORIES',
        payload: categories,
      });
      expect(newState);
    });
  });
});
