import React from 'react';
// import Doughnutchart from './components/Journel/Doughnutchart';
import { Sidebar } from './contexts/Sidebarcontext';
// import Journelpage from './pages/Journelpage/Journelpage';
import Landingpage from './pages/Landingpage/Landingpage';

function App() {
  return (
    <Sidebar>
      <div className="m-0 p-0">
        <Landingpage />
        {/* <Journelpage/> */}
      </div>
    </Sidebar>
  );
}

export default App;
