import { createRoot } from 'react-dom/client';
import MyApp from './app';
import 'assets/styles/base.css';

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
