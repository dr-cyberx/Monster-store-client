import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} />
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
