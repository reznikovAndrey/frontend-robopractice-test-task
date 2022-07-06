import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
