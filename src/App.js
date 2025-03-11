
import './App.css';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/CourseNav/NavBarNew';
import AboutMe from './components/me/Me';
import Services from './components/treatments/Services';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';
import BackgroundGlass from './screens/ForthScreen';
import NumerologyScreen from './screens/SecondScreen';
import BenefitsScreen from './screens/ThirdScreen';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
<NumerologyScreen/>
<BenefitsScreen/>
<AboutMe/>
  <Services/>
  <BackgroundGlass/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
