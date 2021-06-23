import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import {
  getToken,
  handleMultipleRequests,
  handleRequest,
} from '../api/requests';

const Discover = () => {
  const { discover, token } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { newReleases, playlists, categories } = discover;

  useEffect(() => {
    if (!token) {
      getToken();
    } else {
      let requests = [
        handleRequest('new-releases'),
        handleRequest('featured-playlists'),
        handleRequest('categories'),
      ];
      handleMultipleRequests(requests).then((res) => {
        dispatch({
          type: 'SET_NEW_RELEASES',
          payload: res[0].data.albums.items,
        });
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: res[1].data.playlists.items,
        });
        dispatch({
          type: 'SET_CATEGORIES',
          payload: res[2].data.categories.items,
        });
      });
    }

    return () => {};
  }, [dispatch, token]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};
export default Discover;
