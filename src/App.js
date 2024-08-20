import logo from './logo.svg';

import Navbar from './componets/Navbar/Navbar';
// import sidebar from './componets/sidebar/sidebar';
import Styles from './App.module.css'
import Dashboard from './componets/Dashboard/Dashboard';

function App() {
  return (
    <>
    <div className={Styles.main}>

    <div className={Styles.Dashboard}>
    <Dashboard/>
    </div>
    <div className={Styles.Navbar}>
    <Navbar/>
    </div>
    </div>
    </>
   
  );
}

export default App;
