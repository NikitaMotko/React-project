import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Stack, Pagination, PaginationItem } from '@mui/material';
import { getAll } from '../../../../services/httpService.js';
import BannerCard from './components/BannerCard.jsx';
import { BANNERS_PAGE_LIMIT } from '../../../constants.js';

const BannersPage = () => {
  const location = useLocation();

  const [banners, setBanners] = useState([]);
  const [page, setPage] = useState(+location.search.split('=')[1] || 1);
  const [totalCountPages, setTotalCountPages] = useState(0);

  const navigate = useNavigate();

  const getAllBanners = async () => {
    const response = await getAll('/banners', {
      _page: page,
      _limit: BANNERS_PAGE_LIMIT,
    });

    setBanners(response.data);
    setTotalCountPages(+response.headers['x-total-count']);
  };

  const goToBanner = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    getAllBanners();
  }, [page]);

  return (
    <>
      {banners.map((banner) => {
        return (
          <BannerCard
            goToBanner={goToBanner}
            banner={banner}
            key={banner.id + JSON.stringify(banner)}
          />
        );
      })}

      <Stack
        sx={{ my: 3, display: 'flex', width: '100%', alignItems: 'center' }}
      >
        <Pagination
          count={Math.ceil(totalCountPages / BANNERS_PAGE_LIMIT)}
          page={page}
          onChange={(_, numberPage) => setPage(+numberPage)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default BannersPage;
