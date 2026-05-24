import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserList from './StateWithApi';
import ObjStateEx from './ObjectState.jsx';
import UsingUseEffect from './useEffect.jsx';
import Component1 from './useContext/component1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserList />
    <ObjStateEx />
    <UsingUseEffect />
    
    <Component1 />
  </StrictMode>,
)
