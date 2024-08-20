import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <div className="fixed top-0 z-50  flex justify-center w-full bg-green-200 py-2">
      <div className="flex items-center gap-5">
        <img
          src="https://w7.pngwing.com/pngs/160/304/png-transparent-flipkart-logo-thumbnail.png"
          className="h-[10vh]"
        />
        <TextField
          id="standard-textarea"
          label="Search here"
          placeholder="Placeholder"
          variant="standard"
        />
        <Button variant="contained">Login</Button>
        <p>Become a seller</p>
        <Select
          className="!w-[10vw] !h-[5vh]"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          //   label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
