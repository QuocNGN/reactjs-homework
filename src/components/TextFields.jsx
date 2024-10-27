import PropTypes from 'prop-types';
import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

const TextFields = ({ label, inputProps, control, name, errors }) => {
  // console.log(">>> Check data type prop(Control): ", typeof(control));
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...addErrorIntoField(errors[name])}
            label={label}
            required
            variant='filled'
            InputProps={inputProps}
          />
        )}
      ></Controller>

      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

TextFields.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};
export default TextFields;
