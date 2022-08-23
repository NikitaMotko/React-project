import React from 'react';
import { TableCell, Typography } from '@mui/material';

const TableCellComponent = ({ isImage, isWeapons, isCharacters, value }) => {
  return (
    <TableCell align="center">
      {isImage ? (
        <img alt="image_banner" src={value} style={{ height: '80px' }} />
      ) : isWeapons || isCharacters ? (
        <Typography>{value.join(', ')}</Typography>
      ) : (
        value
      )}
    </TableCell>
  );
};

export default TableCellComponent;
