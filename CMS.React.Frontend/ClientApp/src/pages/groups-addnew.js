import React, { useState } from 'react';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
} from '@mui/material';

const RegisterNewGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [chairperson, setChairperson] = useState('');
  const [treasurer, setTreasurer] = useState('');
  const [secretary, setSecretary] = useState('');
  const [membersCount, setMembersCount] = useState(0);

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleChairpersonChange = (event) => {
    setChairperson(event.target.value);
  };

  const handleTreasurerChange = (event) => {
    setTreasurer(event.target.value);
  };

  const handleSecretaryChange = (event) => {
    setSecretary(event.target.value);
  };

  const handleMembersCountChange = (event) => {
    setMembersCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data here
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
          padding: 5,
          backgroundColor: '#F5F5F5',
          borderRadius: 5,
        }}
      >
        <Typography variant="h5" align="center">
          REGISTER NEW GROUP
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="groupName"
            label="Group Name"
            variant="outlined"
            sx={{ width: '100%', marginTop: 2, marginBottom: 2 }}
            value={groupName}
            onChange={handleGroupNameChange}
          />

          <TextField
            id="chairperson"
            label="Chairperson"
            variant="outlined"
            sx={{ width: '100%', marginTop: 2, marginBottom: 2 }}
            value={chairperson}
            onChange={handleChairpersonChange}
          />

          <TextField
            id="treasurer"
            label="Treasurer"
            variant="outlined"
            sx={{ width: '100%', marginTop: 2, marginBottom: 2 }}
            value={treasurer}
            onChange={handleTreasurerChange}
          />

          <TextField
            id="secretary"
            label="Secretary"
            variant="outlined"
            sx={{ width: '100%', marginTop: 2, marginBottom: 2 }}
            value={secretary}
            onChange={handleSecretaryChange}
          />

          <TextField
            id="membersCount"
            label="Members Count"
            variant="outlined"
            sx={{ width: '100%', marginTop: 2, marginBottom: 2 }}
            type="number"
            value={membersCount}
            onChange={handleMembersCountChange}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ width: '100%', marginTop: 5 }}
          >
            REGISTER GROUP
          </Button>
        </form>
      </Box>
    </Container>
  );
};

 
RegisterNewGroup.getLayout = (RegisterNewGroup) => (
    <DashboardLayout>
      {RegisterNewGroup}
    </DashboardLayout>
  );
  

export default RegisterNewGroup;
