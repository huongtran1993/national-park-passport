import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ParkList = (props) => {
  return (
    <div>
      <div className='container flexbox'>
        <h1 style={{ fontSize: '3em' }}> Explore Wildlife & Scenic Trails </h1>
        <ImageList sx={{ width: '90%'}} variant='woven' cols={3} gap={15}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=3 3x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

//Yosemite:
//parkCode: 'yose'
//Grand Canyon
//parkCode": 'grca'
//YellowStone
//parkCode": 'yell'
//Glacier
//parkCode": 'glac'
//Zion
//parkCode": 'zion'

const itemData = [
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C84C6CF-1DD8-B71B-0B1C7CB883AA8FB1.jpg',
    title: 'Yosemite National Park',
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg',
    title: 'Grand Canyon National Park',
  },
  {
    img: 'https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2019/01/Yellowstone_CastleGeyser_PengZhuang-Dreamstime-e1618497899718.jpg?resize=1024%2C768&ssl=1',
    title: 'Yellowstone National Park',
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/C18842EE-B742-0CDF-A45734EFC4BC627F.jpg',
    title: 'Glacier National Park',
  },
  {
    img: 'https://www.nps.gov/common/uploads/structured_data/3C7F04EA-1DD8-B71B-0BF8CE99D6958A0E.jpg',
    title: 'Zion National Park - UT',
  },
  {
    img: 'https://www.myutahparks.com/wp-content/uploads/2021/02/Arches-DelicateArch-LaSalMountains_DP_1600.jpg',
    title: 'Arches National Park - UT',
  }
];

export default ParkList;