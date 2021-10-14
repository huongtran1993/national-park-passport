import React, { useState } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import HikingIcon from '@mui/icons-material/Hiking';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ParkInfo from './ParkInfo';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 'fit-content',
  'max-width': '80%',
  height: 'fit-content',
  'max-height': '80%',
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  overflow: 'hidden',
  'overflow-y': 'scroll'
};

const ParkList = (props) => {
  const [open, setOpen] = useState(false);
  const [parkCode, setParkCode] = useState('');

  const handleOpen = (e) => {
    setParkCode(e.target.getAttribute('data-code'));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <List dense={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '4em' }}>
        {props.parkCodeList.map(item => (
          <ListItem
            button={true}
            sx={{ width: 'fit-content' }}
            onClick={handleOpen}
          >
            <ListItemIcon>
              <HikingIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              primary={<div data-code={item.parkCode}>{item.fullName}</div>}
            />
          </ListItem>
        ))}
      </List>
      <div className='container flexbox'>
        <h1 style={{ fontSize: '3em' }}>Must Visit US National Parks</h1>
        <ImageList sx={{ width: '90%'}} variant='woven' cols={3} gap={15}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=3 3x`}
                alt={item.title}
                loading="lazy"
                onClick={handleOpen}
                data-code={item.parkCode}
                className='park-list-img'
              />
              <ImageListItemBar
                title={item.title}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <StyledModal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <ParkInfo parkCode={parkCode}/>
        </Box>
      </StyledModal>
    </div>
  );
};

const itemData = [
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C84C6CF-1DD8-B71B-0B1C7CB883AA8FB1.jpg',
    title: 'Yosemite National Park',
    parkCode: 'yose'
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg',
    title: 'Grand Canyon National Park',
    parkCode: 'grca'
  },
  {
    img: 'https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2019/01/Yellowstone_CastleGeyser_PengZhuang-Dreamstime-e1618497899718.jpg?resize=1024%2C768&ssl=1',
    title: 'Yellowstone National Park',
    parkCode: 'yell'
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/C18842EE-B742-0CDF-A45734EFC4BC627F.jpg',
    title: 'Glacier National Park',
    parkCode: 'glac'
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C7F04EA-1DD8-B71B-0BF8CE99D6958A0E.jpg',
    title: 'Zion National Park - UT',
    parkCode: 'zion'
  },
  {
    img: 'https://www.myutahparks.com/wp-content/uploads/2021/02/Arches-DelicateArch-LaSalMountains_DP_1600.jpg',
    title: 'Arches National Park - UT',
    parkCode: 'arch'
  }
];

export default ParkList;