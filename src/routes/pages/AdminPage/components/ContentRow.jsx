import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCellComponent from './TableCellComponent.jsx';
import EditableCell from './EditableCell.jsx';
import {
  deleteContentRequest,
  editContentRequest,
} from '../../../../redux/admin/actions/contentActions';

const ContentRow = ({ valueTab, contentValues, contentKeys, obj, url }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValues, setEditValues] = useState({});

  const dispatch = useDispatch();

  const editRow = (objectEdit) => {
    setEditValues(objectEdit);
    setIsEdit(true);
  };

  useEffect(() => {
    setIsEdit(false);
  }, [valueTab]);

  const confirmEditRow = (row) => {
    dispatch(editContentRequest(row.id, url, editValues));
    setIsEdit(false);
  };

  const deleteRow = (id, urlValue) => {
    dispatch(deleteContentRequest(id, urlValue));
  };

  return (
    <TableRow sx={{ m: 0, p: 0 }}>
      {contentValues.map((cellValue, index) => {
        const isName = contentKeys[index] === 'name';
        const isQuality = contentKeys[index] === 'quality';
        const isType = contentKeys[index] === 'type';
        const isImage = contentKeys[index] === 'image';
        const isWeapons = contentKeys[index] === 'weapons';
        const isCharacters = contentKeys[index] === 'characters';
        const isMainCharacterId = contentKeys[index] === 'mainCharacterId';

        return isEdit ? (
          <EditableCell
            key={cellValue + contentKeys[index]}
            isName={isName}
            isQuality={isQuality}
            isType={isType}
            isImage={isImage}
            isWeapons={isWeapons}
            isCharacters={isCharacters}
            isMainCharacterId={isMainCharacterId}
            cellValue={cellValue}
            editValues={editValues}
            setEditValues={setEditValues}
          />
        ) : (
          <TableCellComponent
            key={cellValue + contentKeys[index]}
            isImage={isImage}
            isWeapons={isWeapons}
            isCharacters={isCharacters}
            value={cellValue}
          />
        );
      })}
      <TableCell align="center">
        {isEdit ? (
          <CheckIcon
            onClick={() => confirmEditRow(obj)}
            sx={{ cursor: 'pointer' }}
          />
        ) : (
          <EditIcon onClick={() => editRow(obj)} sx={{ cursor: 'pointer' }} />
        )}
      </TableCell>
      <TableCell align="center">
        <DeleteIcon
          onClick={() => deleteRow(obj.id, url)}
          sx={{ cursor: 'pointer' }}
        />
      </TableCell>
    </TableRow>
  );
};

export default ContentRow;
