import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/UserGroupIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../hooks/use-selection';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { GroupTable } from '../sections/groups/groups-table';
import { GroupSearch } from '../sections/groups/groups-search';
import { applyPagination } from '../utils/apply-pagination';

import Link from 'next/link';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 1',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',   
    name: 'Group 2',
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '10'
   
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 3',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e86809283e28b96d2d38537',
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 4',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 5',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '50'
   
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 6',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 7',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',   
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 8',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e8877da9a65442b11551975',   
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 9',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  },
  {
    id: '5e8680e60cba5019c5ca6fda',   
    id: '5e887ac47eed253091be10cb',   
    name: 'Group 10',    
    chairperson: 'jane doe',
    treasurer: 'john doe',
    secretary: 'carson darrin',
    members:  '100'
   
  }
];

const useGroups = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useGroupIds = (groups) => {
  return useMemo(
    () => {
      return groups.map((groups) => groups.id);
    },
    [groups]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const groups = useGroups(page, rowsPerPage);
  const groupsIds = useGroupIds(groups);
  const groupsSelection = useSelection(groupsIds);

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
          Groups | Devias Kit
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
                 Groups
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
              <Link href='/groups-addnew'>
                <Button
                 
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  
                >
                 Register New Group
                </Button>
                </Link>
              </div>
            </Stack>
            <GroupSearch />
            <GroupTable
              count={data.length}
              items={groups}
              onDeselectAll={groupsSelection.handleDeselectAll}
              onDeselectOne={groupsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={groupsSelection.handleSelectAll}
              onSelectOne={groupsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={groupsSelection.selected}
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
