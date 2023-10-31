import { NavigateNext } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'

function MuiBreadcrumbs() {
  return (
    <Box m={2}>
      {/* Breadcrumbs props */}
      <Breadcrumbs aria-label='breadcrumb'>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catalog</Link>
        <Link href='#' underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>

      {/* using seperator props */}
      <Breadcrumbs aria-label='breadcrumb' separator='-'>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catalog</Link>
        <Link href='#' underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>

      {/* using images as seperator */}
      <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNext fontSize='small'/>}>
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catalog</Link>
        <Link href='#' underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>

      {/* using maxItems props */}
      <Breadcrumbs 
        aria-label='breadcrumb' 
        maxItems={2} 
        itemsBeforeCollapse={2}
        separator={<NavigateNext fontSize='small'/>}
      >
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catalog</Link>
        <Link href='#' underline='hover'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs;