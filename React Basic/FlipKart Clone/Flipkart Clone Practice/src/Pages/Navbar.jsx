import { Button, TextField } from '@mui/material';
import React from 'react';
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Navbar() {
  return (
    <div className="flex mt-1 top-0 z-50 fixed border-2 py-2 justify-center w-full">
      <div className="flex items-center gap-5">
        <img
          src="https://w7.pngwing.com/pngs/160/304/png-transparent-flipkart-logo-thumbnail.png"
          alt="Flipkart"
          className="h-[10vh]"
        />
        <TextField
          id="outlined-basic"
          label="Search Bar"
          placeholder='"Search for Products,Brands and More'
          variant="outlined"
          className="w-[720px] "
        />

        <Button variant="contained">Login</Button>

        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
        <CardGiftcardSharpIcon />
        <p>Become a Seller</p>
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default Navbar;
