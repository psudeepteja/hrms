import React, { useState } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';

const PersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  });

  const [identityInfo, setIdentityInfo] = useState({
    aadharChecked: false,
    panChecked: false,
    voterIdChecked: false,
    drivingLicenseChecked: false,
  });

  const [qualificationInfo, setQualificationInfo] = useState({
    pgChecked: false,
    ugChecked: false,
    twelethChecked: false,
    tenthChecked: false,
    diplamoChecked: false,
    certificatesChecked: false,
  });

  const [workInfo, setWorkInfo] = useState({
    prevOfferChecked: false,
    relievingChecked: false,
    recommendationChecked: false,
    salarySlipChecked: false,
    bankStatementChecked: false,
  });

  const handleSave = () => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    localStorage.setItem('identityInfo', JSON.stringify(identityInfo));
    localStorage.setItem('identityInfo', JSON.stringify(qualificationInfo));
    localStorage.setItem('identityInfo', JSON.stringify(workInfo));
    alert("Details saved in local storage")
  };

  const handleChange = (field, value) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setIdentityInfo((prevInfo) => ({ ...prevInfo, [field]: !prevInfo[field] }));
    setQualificationInfo((prevInfo) => ({ ...prevInfo, [field]: !prevInfo[field] }));
    setWorkInfo((prevInfo) => ({ ...prevInfo, [field]: !prevInfo[field] }));
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "80px" }}>
      <Typography variant='h5'>Welcome, HR</Typography>
      <Grid item xs={12}>
        <h2>Personal Information</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          value={personalInfo.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          value={personalInfo.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          value={personalInfo.mobile}
          onChange={(e) => handleChange('mobile', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={personalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </Grid>

      <Grid item lg={4} xs={12} sx={{ marginTop: "20px" }}>
        <Typography variant='h3'>Identity</Typography>
        <div>
          <FormControlLabel
            control={<Checkbox checked={identityInfo.aadharChecked} onChange={() => handleCheckboxChange('aadharChecked')} />}
            label="Aadhar"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox checked={identityInfo.panChecked} onChange={() => handleCheckboxChange('panChecked')} />}
            label="PAN"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox checked={identityInfo.voterIdChecked} onChange={() => handleCheckboxChange('voterIdChecked')} />}
            label="Voter ID"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox checked={identityInfo.drivingLicenseChecked} onChange={() => handleCheckboxChange('drivingLicenseChecked')} />
            }
            label="Driving License"
          />
        </div>
      </Grid>
      <Grid item lg={4} xs={12} sx={{ marginTop: "20px" }}>
        <Typography variant='h3'>Qualification</Typography>
        <div>
          <FormControlLabel
            control={<Checkbox checked={qualificationInfo.pgChecked} onChange={() => handleCheckboxChange('pgChecked')} />}
            label="PG"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox checked={qualificationInfo.ugChecked} onChange={() => handleCheckboxChange('ugChecked')} />}
            label="UG"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox checked={qualificationInfo.twelethChecked} onChange={() => handleCheckboxChange('twelethChecked')} />}
            label="12th"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox checked={qualificationInfo.tenthChecked} onChange={() => handleCheckboxChange('tenthChecked')} />
            }
            label="10th"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox checked={identityInfo.diplamoChecked} onChange={() => handleCheckboxChange('diplamoChecked')} />
            }
            label="Diplamo"
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox checked={identityInfo.certificatesChecked} onChange={() => handleCheckboxChange('certificatesChecked')} />
            }
            label="Cerificates"
          />
        </div>
      </Grid>

      <Grid item lg={4} xs={12} sx={{ marginTop: "20px" }}>
        <Typography variant='h3'>Work Related</Typography>
        <FormControlLabel
          control={<Checkbox checked={workInfo.prevOfferChecked} onChange={() => handleCheckboxChange('prevOfferChecked')} />}
          label="Previous Componay Offer"
        />
        <FormControlLabel
          control={<Checkbox checked={workInfo.relievingChecked} onChange={() => handleCheckboxChange('relievingChecked')} />}
          label="Relieving letter"
        />
        <FormControlLabel
          control={<Checkbox checked={workInfo.recommendationChecked} onChange={() => handleCheckboxChange('recommendationChecked')} />}
          label="Letter of Recommendation"
        />
        <FormControlLabel
          control={
            <Checkbox checked={workInfo.salarySlipChecked} onChange={() => handleCheckboxChange('salarySlipChecked')} />
          }
          label="3 months Salary Slips"
        />
        <FormControlLabel
          control={
            <Checkbox checked={workInfo.bankStatementChecked} onChange={() => handleCheckboxChange('bankStatementChecked')} />
          }
          label="6 months bank statement"
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
