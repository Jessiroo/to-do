import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import ListProvider from "./context/ListProvider";
import ColorProvider from "./context/ColorProvider";

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
      <ColorProvider>
        <RouterProvider router={router} />
      </ColorProvider>
    </ListProvider>
  );
}

export default App;