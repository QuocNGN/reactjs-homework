import { Container } from '@mui/material';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <Container
      sx={{
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Đảm bảo chiều cao tối thiểu là toàn màn hình
      }}
      maxWidth='xs'
    >
      <RegisterForm />
    </Container>
  );
}

export default App;
