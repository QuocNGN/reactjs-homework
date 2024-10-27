import PropTypes from 'prop-types';
import { FormControl, MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

const SelectFields = ({ label, control, name, errors }) => {
  const [listCountry, setListCountry] = useState([]);
  const countryNames = listCountry.map((item) => item.name.common).sort();
  //   console.log(countryNames);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setListCountry(data));
  }, []);

  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            {...addErrorIntoField(errors[name])}
            variant='filled'
            select
            required
            value={field.value || ''} // Đảm bảo giá trị mặc định là chuỗi rỗng
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {countryNames.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

SelectFields.propTypes = {
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};
export default SelectFields;
