import { createSelector } from '@reduxjs/toolkit';
import { TABLE_LIMIT } from '../../constants';

export const selectAdmin = (state) => state.admin;

export const selectTotalCountPages = createSelector(
  [selectAdmin],
  (admin) => admin.content.totalCountPages,
);

export const getIsRowDeleted = createSelector(
  [selectAdmin],
  (admin) => admin.content.isRowDeleted,
);

export const getAllRewards = createSelector(
  [selectAdmin],
  (admin) => admin.content.rewards,
);

export const getContentPage = createSelector(
  [selectAdmin, (state, page) => page],
  (admin, page) => {
    const adminContentList = JSON.parse(
      JSON.stringify(admin.content.contentList),
    );
    const result = [];

    for (; adminContentList.length; ) {
      result.push(adminContentList.splice(0, TABLE_LIMIT));
    }

    return result[page - 1];
  },
);
