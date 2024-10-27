import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorMessage = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        mt: '6px',
      }}
    >
      <ErrorIcon color='error' sx={{ width: '20px' }} />
      <Typography color='error.main' variant='span' fontSize='14px'>
        {message}
      </Typography>
    </Box>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
