import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupLogin from './Components/Assets/Signup-Login/SignupLogin';
import Counter from './Components/Assets/Signup-Login/Counter';
import NotFound from './../src/notfound.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignupLogin />
    },
    {
      path: '/counter',
      element: <Counter />
    },
    { 
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
