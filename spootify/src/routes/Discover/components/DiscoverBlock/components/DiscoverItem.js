import React from 'react';
import '../styles/_discover-item.scss';

export default function DiscoverItem({ images = [{ url: '' }], name }) {
  return (
    <div
      data-test="discover-item"
      className="discover-item animate__animated animate__fadeIn"
    >
      <div
        data-test="discover-item-img"
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p data-test="discover-item-name" className="discover-item__title">
        {name}
      </p>
    </div>
  );
}
