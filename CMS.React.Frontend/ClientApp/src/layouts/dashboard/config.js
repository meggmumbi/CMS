import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import GroupIcon from '@heroicons/react/24/solid/UserGroupIcon';
import LogoutIcon from '@heroicons/react/24/solid/ArrowRightOnRectangleIcon';
import Calendar from '@heroicons/react/24/solid/CalendarDaysIcon';
import Reports from '@heroicons/react/24/solid/NewspaperIcon';
import EventsIcon from '@heroicons/react/24/solid/FolderOpenIcon';
import Contributions from '@heroicons/react/24/solid/BanknotesIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Members',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Groups',
    path: '/groups',
    icon: (
      <SvgIcon fontSize="small">
        <GroupIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Events',
    path: '/events',
    icon: (
      <SvgIcon fontSize="small">
        <EventsIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Calendar',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <Calendar />
      </SvgIcon>
    )
  },
  {
    title: 'Reports',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <Reports />
      </SvgIcon>
    )
  },
  {
    title: 'Contributions',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <Contributions />
      </SvgIcon>
    )
  },
  {
    title: 'Users & Roles',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Logout',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <LogoutIcon />
      </SvgIcon>
    )
  }
];
