import './App.css'
// import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import Signin from './pages/signin';
// import TaskListPage from './pages/TaskListPage';
// import Layout from './Layout';
// import TaskDetailsPage from './pages/TaskDetailsPage';
// import Header from './components/Header';
// import Form from './Form';
// import ReactPlayground from './ReactPlayground';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './pages/Notfound';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />
  },

  {
    path: '/signup',
    element: <Signup />
  },

  {
    path: '/signin',
    element: <Signin />
  },

  {
    path: '/dashboard',
    element: 
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
  },

  {
    path: '/notfound',
    element: <NotFound />
  },

  {
    path: '*',
    element: <NotFound />
  }

]);

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
