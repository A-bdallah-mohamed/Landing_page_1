
import './App.css';
import Header from './components/header';
import Useintersectionobserver from './custom hooks/useintersectionobserver';
import { useRef , useEffect , useState } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
function App() {
  const [maintext,maintextinview] = Useintersectionobserver()

  const [stage2,setstage2] = useState(false)

  useEffect(()=> {

setTimeout(() => {
  setstage2(true)
}, 1000);

  },[maintextinview])
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
</div>
    </div>
  );
}

export default App;
