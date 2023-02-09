import { useEffect } from 'react';
import './index.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/home';
import Contact from './pages/contact';
import Portafolio from './pages/portafolio';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import About from './pages/about';
import DetailProduct from './pages/detailproduct';


const Layout = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portafolio/allProductions',
        element: <Portafolio />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portafolio/detail',
        element: <DetailProduct />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
