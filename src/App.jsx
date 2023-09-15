import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import ListProvider from "./context/ListProvider";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomePage />, },
      { path: '/home', element: <HomePage />, },
      { path: '/settings', element: <SettingsPage />, },
    ],
  }
]);

function App() {
  return (
    <ListProvider>
      <RouterProvider router={router} />
    </ListProvider>
  );
}

export default App;