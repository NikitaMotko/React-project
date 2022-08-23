import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Grid, Pagination, Stack, Tab, Tabs, Box } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { TABLE_LIMIT } from '../../../constants.js';

import { selectIsLoading } from '../../../redux/loader/selectors';
import {
  selectTotalCountPages,
  getContentPage,
  getIsRowDeleted,
} from '../../../redux/admin/selectors';
import Loader from '../../../components/Loader';
import AdminHeader from './components/AdminHeader.jsx';
import AddRewardModal from './components/AddRewardModal.jsx';
import ContentsList from './components/ContentsList.jsx';
import { getAllContentRequest } from '../../../redux/admin/actions/contentActions';
import AddBannerModal from './components/AddBannerModal.jsx';

const AdminPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [page, setPage] = useState(+location.search.split('=')[1] || 1);
  const [valueTab, setValueTab] = useState('1');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const isRowDeleted = useSelector(getIsRowDeleted);

  const totalCountPages = useSelector(selectTotalCountPages);
  const content = useSelector((state) => getContentPage(state, page));

  const handleChangeTab = (event, value) => {
    setValueTab(value);
    setPage(1);
  };

  useEffect(() => {
    if (!isRowDeleted) {
      dispatch(
        getAllContentRequest(valueTab === '1' ? '/rewards' : '/banners'),
      );
    }
  }, [valueTab]);

  useEffect(() => {
    if (isRowDeleted && !content?.length) {
      setPage(page - 1);
      dispatch(
        getAllContentRequest(valueTab === '1' ? '/rewards' : '/banners'),
      );
    }
  }, [isRowDeleted]);

  return (
    <>
      {isLoading && <Loader loading />}
      <AdminHeader />
      <Grid
        container
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Grid item sx={{ width: '100%', mt: 1, ml: 3 }}>
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              top: '70px',
              right: '50px',
              zIndex: 100,
            }}
          >
            <AddBoxIcon
              color="primary"
              onClick={() => {
                setIsOpenModal(!isOpenModal);
              }}
            />
          </Box>
          {valueTab === '1' ? (
            <AddRewardModal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              totalCountPages={totalCountPages}
              url={valueTab === '1' ? '/rewards' : '/banners'}
            />
          ) : (
            <AddBannerModal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              totalCountPages={totalCountPages}
              url={valueTab === '1' ? '/rewards' : '/banners'}
            />
          )}
          <TabContext value={valueTab}>
            <Tabs value={valueTab} onChange={handleChangeTab}>
              <Tab label="Rewards" value="1" />
              <Tab label="Banners" value="2" />
            </Tabs>
            <TabPanel value={valueTab}>
              {content?.length && (
                <ContentsList
                  valueTab={valueTab}
                  content={content}
                  url={valueTab === '1' ? '/rewards' : '/banners'}
                />
              )}
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'end',
            pb: 3,
          }}
        >
          <Stack>
            <Pagination
              count={Math.ceil(totalCountPages / TABLE_LIMIT)}
              page={page}
              onChange={(_, numberPage) => setPage(+numberPage)}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminPage;
