import Head from 'next/head';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import React, { useState } from 'react';
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
} from '@mui/material';

const labelStyle = {
  backgroundColor: '#f0f0f0', // Grey background color
  padding: '10px', // Adjust padding as needed
  width: '150px', // Adjust label width as needed
  textAlign: 'right', // Align label text to the right
};

const inputStyle = {
  width: '100%', // Set input fields to 100% width
  marginLeft: '10px', // Space between label and input field
  marginBottom: '10px', // Adjust spacing as needed
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to submit the member data here
    console.log('Form Data:', formData);
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
  };
    return (
      <>
      <Head>
        <title>
          Companies | Devias Kit
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
                    variant="outlined"
                    fullWidth
                    name =  "fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
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
                    variant="outlined"
                    fullWidth
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
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
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
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
                      label="Email"
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
                    label="Residency"
                    variant="outlined"
                    fullWidth
                    name="residency"
                    value={formData.residency}
                    onChange={handleInputChange}
                    required
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
                    label="Groups"
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
                       
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      required
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Member
        </Button>
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