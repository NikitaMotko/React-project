import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Typography,
  Button,
} from '@mui/material';
import LoginPageTextField from '../../../../components/LoginPageTextField';
import { addContentRequest } from '../../../../redux/admin/actions/contentActions';

const AddRewardModal = ({
  isOpenModal,
  setIsOpenModal,
  totalCountPages,
  url,
}) => {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: '',
    quality: '',
    type: '',
  });

  const dispatch = useDispatch();

  const quality = ['common', 'rare', 'immortal'];
  const type = ['weapon', 'character'];

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
          Add new Reward
        </Typography>
        <LoginPageTextField
          onChange={handleChangeValues}
          label="Name"
          name="name"
          autoFocus
        />
        <FormControl sx={{ mt: 1 }} required fullWidth>
          <InputLabel>Quality</InputLabel>
          <Select
            value={formValues.quality}
            name="quality"
            label="quality"
            onChange={handleChangeValues}
          >
            {quality.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2 }} required fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formValues.type}
            name="type"
            label="type"
            onChange={handleChangeValues}
          >
            {type.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
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

export default AddRewardModal;
