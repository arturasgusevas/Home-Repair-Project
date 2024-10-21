import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/categories': 'http://localhost:5000',
      '/businesses': 'http://localhost:5000',
      '/bookings': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/auth': 'http://localhost:5000'
    }
  }
});
