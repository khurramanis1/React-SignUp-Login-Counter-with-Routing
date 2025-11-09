import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupLogin from './Components/Assets/Signup-Login/SignupLogin';
import Counter from './Components/Assets/Signup-Login/Counter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignupLogin />
    },
    {
      path: '/counter',
      element: <Counter />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
