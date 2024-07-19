
import './App.css';
import Header from './components/header';
import Useintersectionobserver from './custom hooks/useintersectionobserver';
import { useRef , useEffect , useState } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { FaArrowRight } from "react-icons/fa";
function App() {
  const [maintext,maintextinview] = Useintersectionobserver()

  const [stage2,setstage2] = useState(false)

  useEffect(()=> {

setTimeout(() => {
  setstage2(true)
}, 1000);

  },[maintextinview])
  const [lasttext,islasttextseen] = Useintersectionobserver()
  
const[exploreservice,isexploreserviceseen] = Useintersectionobserver()

  return (
    <div className='maincontainer'>
      <div className='container'>
<Header />
<div className='maintextcontainer'>
<div className={`maintext ${maintextinview ? 'maintextinview' : ''} ${stage2 ? 'maintextstage2' : ''}`} ref={maintext}>
  Remote Team <span className={`${stage2 ? 'purple' : ''}`}>Building</span> <br /> 
  and <span className={`${stage2 ? 'purple' : ''}`}> Collaboration</span>
</div>
</div>

<Page1 stage2={stage2}/>
<Page2 />

<div className={`exploreourservicecontainer ${isexploreserviceseen ? 'explorecontainerseen' : ''}`} ref={exploreservice}>
  <div className={`exploreourservice ${isexploreserviceseen ? 'explorecomponentseen' : ''}`}>
    <div className={`smallarrowincircle ${isexploreserviceseen ? 'arrowcontainerseen' : ''}`}>
      <div className='arrowitselfincircle'><FaArrowRight /></div>
    </div>
    Explore our service 
  </div>
</div>

<div className={`lasttextcontaier ${islasttextseen ? 'lasttextseen' : ''}`} ref={lasttext}>
  <div>UnitySphere 2024</div>
  <div>Welcome, Everyone</div>
</div>
</div>
    </div>
  );
}

export default App;
