import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import components 
import { Header, Footer, Navbar, Sidebar, ThemeSetting, Dropdown } from './components';

// import pages
import { About, Calendar, ColorPicker, Customers, Editor, Employees, Home, Kanban, Orders, Products, Suppliers, Line, Area, Bar, Finicial, Pie, Pyramid, Stacked, ColorMapping } from './pages';

// import context via custom hook
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* Setting icon */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Setting" postiton="Top">
              <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray hover:text-sky-600' style={{ background: "white", borderRadius: "50%" }}>
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {/* Setting icon */}


          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* Sidebar */}

          {/* Navbar */}
          <div className={`dark:bg-main-bg  bg-main-bg min-h-screen w-full  ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
            <div className="navbar dark:bg-main-dark-bg bg-main-bg fixed md:static w-full">
              <Navbar />
            </div>

          </div>
          {/* Navbar */}

          {/* Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />

              {/* Pages */}
              <Route path='/products' element={<Products />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/supplier' element={<Suppliers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/finicial' element={<Finicial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />


            </Routes>
          </div>
          {/* Routes */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;