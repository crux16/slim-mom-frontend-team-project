import React from 'react';
import css from './CalculatorPage.module.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

const CalculatorPage = () => {
  return (
    <section className={css.container}>
      <div className={css.bgGrayVector}></div>
      <div className={css.bgBanana}></div>
      <div className={css.bgStrawBerry}></div>
      <div className={css.bgLeaves}></div>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      <form>
        <div className={css.formFields}>
          <TextField
            id="height"
            label="Height"
            variant="standard"
            placeholder="Height"
            className={css.input}
            type="number"
            color="warning"
            required
          />
          <TextField
            id="age"
            label="Age"
            variant="standard"
            placeholder="Age"
            className={css.input}
            type="number"
            color="warning"
            required
          />
          <TextField
            id="currentWeight"
            label="Current Weight"
            variant="standard"
            placeholder="Current Weight"
            className={css.input}
            type="number"
            color="warning"
            required
          />
          <TextField
            id="desiredWeight"
            label="Desired Weight"
            variant="standard"
            placeholder="Desired Weight"
            className={css.input}
            type="number"
            color="warning"
            required
          />
          <FormControl className={css.bloodType}>
            <FormLabel required id="blood-type">
              Blood Type
            </FormLabel>
            <RadioGroup
              className={css.radioGroup}
              row
              aria-label="blood-type"
              name="blood-type"
              defaultValue="1"
            >
              <FormControlLabel
                value="1"
                control={<Radio color="warning" />}
                label="1"
                labelPlacement="end"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="warning" />}
                label="2"
                labelPlacement="end"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="warning" />}
                label="3"
                labelPlacement="end"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="warning" />}
                label="4"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={css.button}>
          <Button
            variant="contained"
            color="warning"
            type="submit"
            size="large"
            sx={{
              borderRadius: '30px',
              textTransform: 'capitalize',
              padding: '10px 30px',
              letterSpacing: '1.5px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Start Losing Weight
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CalculatorPage;
