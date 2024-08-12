import { TextField } from '@mui/material';
import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="flex">
        <img
          src="https://w7.pngwing.com/pngs/160/304/png-transparent-flipkart-logo-thumbnail.png"
          alt="Flipkart"
          className="h-[10vh]"
        />
      </div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

export default Navbar;
