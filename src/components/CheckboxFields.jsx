import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

const CheckboxFields = ({ name, control, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                {...addErrorIntoField(errors[name])}
                required
              />
            }
            label='I Agree to MyApp Terms and Privacy Policy'
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};

CheckboxFields.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

export default CheckboxFields;
