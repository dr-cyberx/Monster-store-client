import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';
import Login from './pages/Auth/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/login' element={<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
