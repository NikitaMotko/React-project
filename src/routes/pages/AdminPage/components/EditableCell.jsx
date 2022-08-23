import React from 'react';
import {
  TableCell,
  Select,
  MenuItem,
  Box,
  Chip,
  TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllRewards } from '../../../../redux/admin/selectors';
import {
  QUALITY_BANNER,
  TYPE_BANNER,
  RARE,
  IMMORTAL,
  WEAPON,
  CHARACTER,
} from '../../../../constants.js';

const EditableCell = ({
  isName,
  isQuality,
  isType,
  isImage,
  isWeapons,
  isCharacters,
  isMainCharacterId,
  cellValue,
  editValues,
  setEditValues,
}) => {
  const rewards = useSelector(getAllRewards);

  const handleChangeValues = (event) => {
    const { name, value } = event.target;

    setEditValues({ ...editValues, [name]: value });
  };

  return (
    <TableCell align="center">
      {isImage ? (
        <TextField
          onChange={handleChangeValues}
          name="image"
          value={editValues.image}
          margin="none"
          size="small"
        />
      ) : isName ? (
        <TextField
          onChange={handleChangeValues}
          name="name"
          value={editValues.name}
          margin="none"
          size="small"
        />
      ) : isMainCharacterId ? (
        <Select
          value={editValues.mainCharacterId}
          name="mainCharacterId"
          onChange={handleChangeValues}
          size="small"
        >
          {rewards.map((obj) => {
            return (
              obj.type === CHARACTER &&
              obj.quality === IMMORTAL && (
                <MenuItem key={obj.id} value={obj.id}>
                  {obj.name}
                </MenuItem>
              )
            );
          })}
        </Select>
      ) : isWeapons ? (
        <Select
          value={editValues.weapons}
          name="weapons"
          onChange={handleChangeValues}
          size="small"
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {rewards.map((obj) => {
            return (
              obj.type === WEAPON && (
                <MenuItem key={obj.id} value={obj.id}>
                  {obj.name}
                </MenuItem>
              )
            );
          })}
        </Select>
      ) : isCharacters ? (
        <Select
          value={editValues.characters}
          name="characters"
          onChange={handleChangeValues}
          size="small"
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {rewards.map((obj) => {
            return (
              obj.type === CHARACTER &&
              obj.quality === RARE && (
                <MenuItem key={obj.id} value={obj.id}>
                  {obj.name}
                </MenuItem>
              )
            );
          })}
        </Select>
      ) : isQuality ? (
        <Select
          value={editValues.quality}
          name="quality"
          onChange={handleChangeValues}
          size="small"
        >
          {QUALITY_BANNER.map((obj) => {
            return (
              <MenuItem key={obj} value={obj}>
                {obj}
              </MenuItem>
            );
          })}
        </Select>
      ) : isType ? (
        <Select
          value={editValues.type}
          name="type"
          onChange={handleChangeValues}
          size="small"
        >
          {TYPE_BANNER.map((obj) => {
            return (
              <MenuItem key={obj} value={obj}>
                {obj}
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        cellValue
      )}
    </TableCell>
  );
};

export default EditableCell;
