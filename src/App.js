import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const list = [{
    name: "Profile Information",
    href: "#",
    active: true
  }, {
    name: "Change Password",
    href: "#"
  }, {
    name: "Become PRO",
    href: "#"
  }, {
    name: "Help",
    href: "#"
  }, {
    name: "Log Out",
    href: "#"
  }];


  return ( 
    <Dropdown list={list} />
  );
}

export default App;
