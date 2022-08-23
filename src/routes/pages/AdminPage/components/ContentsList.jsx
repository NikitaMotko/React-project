import React from 'react';
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import ContentRow from './ContentRow.jsx';

const ContentsList = ({ valueTab, content, url }) => {
  return (
    <Grid item xs={12}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(content[0]).map((param) => (
                <TableCell key={param} align="center">
                  {param.toUpperCase()}
                </TableCell>
              ))}
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((obj) => {
              const contentValues = Object.values(obj);
              const contentKeys = Object.keys(obj);
              return (
                <ContentRow
                  key={obj.id}
                  valueTab={valueTab}
                  contentValues={contentValues}
                  contentKeys={contentKeys}
                  obj={obj}
                  url={url}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ContentsList;
