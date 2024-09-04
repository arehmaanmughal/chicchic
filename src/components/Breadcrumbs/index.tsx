import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Home, HomeOutlined } from '@mui/icons-material';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='text-black text-xs'>
         <HomeOutlined/>
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          className='text-black text-xs'
        >
          Dashboard
        </Link>
        <h6 className='text-black text-sm font-bold'>BookingList</h6>
      </Breadcrumbs>
    </div>
  );
}
