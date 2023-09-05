import Head from 'next/head';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import CloudUploadIcon from '@heroicons/react/24/solid/CloudArrowUpIcon';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Container,
  TextField,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@heroicons/react/24/solid/PlusCircleIcon';
import ArrowBackIcon from '@heroicons/react/24/solid/ArrowUturnLeftIcon';
import PlusCircleIcon from '@heroicons/react/24/solid/PlusCircleIcon';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import Breadcrumbs from '@mui/material/Breadcrumbs';


const labelStyle = {
  backgroundColor: '#f8d591', 
  padding: '10px', 
  width: '150px', 
  textAlign: 'right' 
};

const inputStyle = {  
 
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  
};
const Page = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    gender: 'male', // Default to male, you can change this
    phone: '',
    email: '',
    residency: '',
    groups: '',
    photo: null,
  });
  const [loading, setLoading] = useState(false);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     // Simulate loading for a few seconds
     setLoading(true);
    // Implement your logic to submit the member data here
    console.log('Form Data:', formData);
    // Simulate a delay to show loading state (Remove this in production)
    setTimeout(() => {
      setLoading(false);
      // Reset the form fields if needed
    setFormData({
      fullname: '',
      dob: '',
      gender: 'male',
      phone: '',
      email: '',
      residency: '',
      groups: '',
      photo: null,
    });
  },2000);
};
    return (
      <>
    
    
    
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
    <Breadcrumbs sx={{marginBottom:'50px', marginLeft:'100px', width:'100%'}} aria-label="breadcrumb">
        <StyledBreadcrumb
        
          component="a"
          href="/"
          label="Home"
       
        />
        <StyledBreadcrumb component="a" href="/customers" label="Members" />
        <StyledBreadcrumb
          label="New Member"
         
        />
      </Breadcrumbs>
        <Container maxWidth="xl">
    
        <div>
     

      <form onSubmit={handleSubmit}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="fullname">Full Name:</label>
                </TableCell>
                <TableCell>
                  <TextField
                    style={inputStyle}
                    variant = 'filled'
                    fullWidth
                    name =  "fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="dob">Date of Birth:</label>
                </TableCell>
                <TableCell>
                  <TextField
                    style={inputStyle}
                    type="date"
                    variant="filled"
                    fullWidth
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="gender">Gender:</label>
                </TableCell>
                <TableCell>
                <RadioGroup
                 style={inputStyle}
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleRadioChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
          </RadioGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="phone">Phone Number:</label>
                </TableCell>
                <TableCell>
                <TextField
                 style={inputStyle}
                 
                  variant="filled"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                 
                />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="email">Email:</label>
                </TableCell>
                <TableCell>
                <TextField
                      style={inputStyle}
                    
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="residency">Residency:</label>
                </TableCell>
                <TableCell>
                <TextField
                    style={inputStyle}
                   
                    variant="outlined"
                    fullWidth
                    name="residency"
                    value={formData.residency}
                    onChange={handleInputChange}
                   
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="Groups">Groups:</label>
                </TableCell>
                <TableCell>
                <TextField
                    style={inputStyle}
                    
                    variant="outlined"
                    fullWidth
                    name="groups"
                    value={formData.groups}
                    onChange={handleInputChange}
                    
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={labelStyle}>
                  <label htmlFor="photo">Upload Image:</label>
                </TableCell>
                <TableCell>
                <input
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      
                     
                    />
                    {formData.photo && (
                      <img
                        src={URL.createObjectURL(formData.photo)}
                        alt="Member Preview"
                        width="100"
                      />
                    )}
                </TableCell>
              </TableRow>
           
            </TableBody>
          </Table>
        </TableContainer>
        <div style={buttonStyle}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />} // Add an icon to the button
            disabled={loading} // Disable the button during loading
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" /> // Show loading indicator
            ) : (
              'Add Member'
            )}
          </Button>
        </div>
      </form>
    </div>
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