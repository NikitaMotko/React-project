import React from 'react';
import { Card, CardMedia, CardActionArea } from '@mui/material';

const BannerCard = ({ goToBanner, banner }) => {
  return (
    <Card
      onClick={() => goToBanner(banner.id)}
      sx={{
        boxShadow: 5,
        maxHeight: 290,
        maxWidth: 600,
        ml: 3,
        mt: 3,
        mr: 3,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="100%" image={banner.image} />
      </CardActionArea>
    </Card>
  );
};

export default BannerCard;
