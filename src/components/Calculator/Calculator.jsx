import React from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import css from './Calculator.Module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCalculator } from '../../redux/calculator/calculatorSelector';

const CalculatorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(selectCalculator);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(data);
    form.reset();
    navigate('/diary');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formFields}>
        <TextField
          id="height"
          name="height"
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
          name="age"
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
          name="currentWeight"
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
          name="desiredWeight"
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
            name="bloodType"
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
  );
};

export default CalculatorForm;
