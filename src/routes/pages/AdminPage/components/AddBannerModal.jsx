import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Modal,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import LoginPageTextField from '../../../../components/LoginPageTextField';
import {
  getAllRewardsRequest,
  addContentRequest,
} from '../../../../redux/admin/actions/contentActions';
import { getAllRewards } from '../../../../redux/admin/selectors';

const AddBannerModal = ({
  isOpenModal,
  setIsOpenModal,
  totalCountPages,
  url,
}) => {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: '',
    image: '',
    mainCharacterId: 0,
    weapons: [],
    characters: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRewardsRequest());
  }, []);

  const rewards = useSelector(getAllRewards);

  const handleChangeValues = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContentRequest({ ...formValues, id: totalCountPages }, url));
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Modal open={isOpenModal} onClose={() => setIsOpenModal(!isOpenModal)}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          width: '300px',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          position: 'absolute',
          top: '50%',
          left: '50%',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '30px',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add new Banner
        </Typography>
        <LoginPageTextField
          sx={{ mb: 0 }}
          onChange={handleChangeValues}
          label="Name"
          name="name"
          autoFocus
        />
        <LoginPageTextField
          onChange={handleChangeValues}
          label="Image"
          name="image"
        />
        <FormControl sx={{ mt: 1 }} required fullWidth>
          <InputLabel>Main character</InputLabel>
          <Select
            value={formValues.mainCharacterId}
            name="mainCharacterId"
            label="mainCharacterId"
            onChange={handleChangeValues}
          >
            {rewards.map((obj) => {
              return (
                obj.type === 'character' &&
                obj.quality === 'immortal' && (
                  <MenuItem key={obj.id} value={obj.id}>
                    {obj.name}
                  </MenuItem>
                )
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1 }} required fullWidth>
          <InputLabel>Weapons</InputLabel>
          <Select
            value={formValues.weapons}
            name="weapons"
            label="weapons"
            onChange={handleChangeValues}
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
                obj.type === 'weapon' && (
                  <MenuItem key={obj.id} value={obj.id}>
                    {obj.name}
                  </MenuItem>
                )
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 1 }} required fullWidth>
          <InputLabel>Characters</InputLabel>
          <Select
            value={formValues.characters}
            name="characters"
            label="characters"
            onChange={handleChangeValues}
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
                obj.type === 'character' &&
                obj.quality === 'rare' && (
                  <MenuItem key={obj.id} value={obj.id}>
                    {obj.name}
                  </MenuItem>
                )
              );
            })}
          </Select>
        </FormControl>
        <Button
          sx={{ mt: 2, mb: 2 }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBannerModal;
