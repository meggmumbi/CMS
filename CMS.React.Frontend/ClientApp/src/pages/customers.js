import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../hooks/use-selection';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { CustomersTable } from '../sections/customer/customers-table';
import { CustomersSearch } from '../sections/customer/customers-search';
import { applyPagination } from '../utils/apply-pagination';
import {AddNewMember} from './members-addnew';
import Link from 'next/link';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',   
    name: 'Carson Darrin',    
    phone: '304-428-3097',
    email: 'carson.darrin@devias.io',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
    
    
    
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/assets/avatars/avatar-fran-perez.png',    
    email: 'fran.perez@devias.io',
    name: 'Fran Perez',
    phone: '712-351-5711',
    memborno:  '0102102',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',    
    email: 'jie.yan.song@devias.io',
    name: 'Jie Yan Song',
    phone: '770-635-2682',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/assets/avatars/avatar-anika-visser.png',    
    email: 'anika.visser@devias.io',
    name: 'Anika Visser',
    phone: '908-691-3242',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/assets/avatars/avatar-miron-vitold.png',    
    email: 'miron.vitold@devias.io',
    name: 'Miron Vitold',
    phone: '972-333-4106',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/assets/avatars/avatar-penjani-inyene.png',    
    email: 'penjani.inyene@devias.io',
    name: 'Penjani Inyene',
    phone: '858-602-3409',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/assets/avatars/avatar-omar-darboe.png',   
    email: 'omar.darobe@devias.io',
    name: 'Omar Darobe',
    phone: '415-907-2647',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',   
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',    
    email: 'siegbert.gottfried@devias.io',
    name: 'Siegbert Gottfried',
    phone: '702-661-1654',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e8877da9a65442b11551975',   
    avatar: '/assets/avatars/avatar-iulia-albu.png',    
    email: 'iulia.albu@devias.io',
    name: 'Iulia Albu',
    phone: '313-812-8947',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  },
  {
    id: '5e8680e60cba5019c5ca6fda',   
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',   
    email: 'nasimiyu.danai@devias.io',
    name: 'Nasimiyu Danai',
    phone: '801-301-7894',
    memborno:  '0102101',
    gender: 'M',
    residency: 'Naivasha Road',
    dob: '12/07/98'
   
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Members | Devias Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Members
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
              <Link href='/members-addnew'>
                <Button
                 
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  
                >
                  Add Member
                </Button>
                </Link>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
