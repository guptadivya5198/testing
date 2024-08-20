import { Avatar, Icon, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Cards = ({ likedItem, setLikedItem, item }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-[25vw] bg-blue-200 flex flex-col items-center p-2">
      <div className="w-full flex justify-between">
        <div className="flex gap-3">
          <Avatar className="!bg-red-400">
            {item?.brand?.substring(0, 1)}
          </Avatar>
          <p className="flex flex-col">
            <span className="font-bold ">{item?.title}</span>
            <span className="text-sm text-gray-500">September 14, 2016</span>
          </p>
        </div>
        <p>
          <IconButton
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </p>
      </div>

      <div className="pt-2 w-[100%]">
        <img src={item?.thumbnail} className="w-[100%]" />
      </div>
      <p className="!pt-2 leading-5">{item?.description}</p>
      <div className="flex justify-between pt-2 w-full">
        <p>
          <IconButton
            onClick={() => {
              if (likedItem?.includes(item.id)) {
                setLikedItem(likedItem?.filter((j) => j !== item.id));
                toast.success('Liked item remove successfully');
              } else {
                setLikedItem([...likedItem, item.id]);
                toast.success('Liked item  successfully');
              }
            }}
          >
            {likedItem?.includes(item.id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
            {/* */}
          </IconButton>
          <IconButton
            onClick={() => {
              toast.success('Item has been shared.');
            }}
          >
            <ShareIcon />
          </IconButton>
        </p>
        <p>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </p>
      </div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Purchase
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Share
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Like
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Cards;
