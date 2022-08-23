import React from 'react';
import { useParams } from 'react-router-dom';

const BannerPage = () => {
  const { id } = useParams();

  return <h1>{`Banner #${id}`}</h1>;
};

export default BannerPage;
