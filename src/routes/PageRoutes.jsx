import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App.js';
import {
  LoginPage,
  ProfilePage,
  AdminPage,
  BannersPage,
  BannerPage,
  HistoryPage,
  StatisticPage,
} from './pages';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<App />}>
        <Route index element={<BannersPage />} />
        <Route path=":id" element={<BannerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
