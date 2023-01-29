import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';

// CSS/Font Awesome Icons
import './App.css';
import './components/FontAwesome/index.js';

// Common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import Home from './components/pages/Home';

const Root = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="*" element={<Root />}>
        <Route index path="*" element={<Home />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
