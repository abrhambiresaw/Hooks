import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserList from './StateWithApi';
import ObjStateEx from './ObjectState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserList />
    <ObjStateEx />
  </StrictMode>,
)
