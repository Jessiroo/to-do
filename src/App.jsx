import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./context/AuthProvider";
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomePage />, },
      { path: '/home', element: <HomePage />, },
    ],
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;