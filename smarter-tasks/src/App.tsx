import './App.css'
// import TaskApp from './TaskApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signin from './pages/Signin';
import TaskListPage from './pages/TaskListPage';
import Layout from './Layout';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './pages/Notfound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />
  },

  {
    path: '/signin',
    element: <Signin />
  },

  {
  
    element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute> 
    ),

    children: [
    {
      path: '/home',
      element: <HomePage/>
    },

    {
      path: '/tasks',
      element: <TaskListPage/>
    },

    {
      path: '/tasks/:id',
      element: <TaskDetailsPage/>
    }
    ]
  },

  {
    path: '*',
    element: <Navigate to="/notfound" replace />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }

]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
