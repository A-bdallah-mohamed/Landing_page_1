import React from 'react'
import Useintersectionobserver from '../custom hooks/useintersectionobserver'
import { useEffect , useState } from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";
import { TbDeviceAirpods } from "react-icons/tb";
import { IoWifiSharp } from "react-icons/io5";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoIosBluetooth } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";

export default function Page1({stage2}) {
    const [img1,isimginview] = Useintersectionobserver()
const [stage3,setstage3] = useState(false)
const [stage4,setstage4] = useState(false)
const [stage5,setstage5] = useState(false)
useEffect(()=>{
setTimeout(() => {
  setstage3(true)
}, 1600);
},[stage2])
useEffect(()=>{
  setTimeout(() => {
    setstage4(true)
  }, 2000);
  },[stage2])
  useEffect(()=>{
    setTimeout(() => {
      setstage5(true)
    }, 3000);
    },[stage2])
  return (
    <div className='page1container'>
<div className='page1'>
    <div className='rightcontainer'>
    <img ref={img1} className={`kidwearingglasses ${isimginview ? 'kidinview' : ''} ${stage2 ? 'kidstage2' : ''}`} src='https://i.ibb.co/ysnM68p/img1.jpg' alt='kidwearingpurpleglasses'></img>
   <div className={`kidnadcellphoneiconcontainer ${stage2 ? 'kidcellphoneinview' : ''}`}>
 <div className='kidnadcellphoneicon'>
    <div className='cellphoneicon'><MdOutlinePhoneInTalk/></div>
    <img className='kidonbeach' src='https://i.ibb.co/SxVVD2T/shutterstock-716310718-d82c089ffef64d5aba3839781455860b.jpg'
    alt='KidOnTheBeach'
    ></img>
    </div>

    <div className='personboxcontainer'>
<div className='personbox'>
  <div className='nametime'>
    <div className='namepic'>
      <img src='https://i.ibb.co/x3TL3Y3/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg'></img>
      <div style={{backgroundColor:"transparent"}}>George</div>
      <div style={{backgroundColor:"transparent"}} className='time'>22:14</div>
    </div>
  </div>
  <div  className='myimage'>
  <img src='https://i.ibb.co/hMRMFsD/istockphoto-955158514-612x612.jpg'></img>
  </div>
  <div className='callicons'>
    <div className='icon'><MdOutlineAirplanemodeInactive /></div>
    <div className='icon'><TbDeviceAirpods /></div>
  </div>
</div>

    </div>
    <div className='createameetingcontainer'>
      <div className='createameeting'>Create a meeting</div>
      <div className={`triconscont ${stage2 ? 'triconscontinview' : ''}`}>
        <div className='icons1strow'>
        <IoWifiSharp className={`icontrspbckg ${stage2 ? 'iconinview' : ''}`}/>
        <GiEarthAsiaOceania className={`icontrspbckg ${stage2 ? 'iconinview' : ''}`} />
        </div>
        <div className='icons1strow'>
<HiOutlinePaintBrush className={`icontrspbckg ${stage2 ? 'iconinview' : ''}`} />
<IoChatbubblesOutline  className={`icontrspbckg ${stage2 ? 'iconinview' : ''}`} />
        </div>
      </div>
    </div>
    <div className='textnbuttons'> 
      <div className='bestp'><span>Best Platform</span> of 2024</div>
      <div className='buttonss'>
        <div className='button1'>Contact Us</div>
        <div className={`button2 ${stage3 ? 'button2inview' : ''}`}>
          <div className={`switchcircle ${stage3 ? 'switchcircleinview' : ''}`} />
          <div>Free Trial</div>
        </div>
      </div>
       </div>
   </div>

    </div>

    <div className='leftcontainer'>
   <div className={`leftfirsttext ${stage2 ? 'leftfirstinview': ''}`}>Correcting Minds <br />Empowering succsess <br /> - Unity Sphere</div>
   <div className='midleft'>

    <div className={`getanapp ${stage2 ? 'getanappinview' : ''}`}>
      <div className='getanappbox'>
        <div>Get an App</div>
        <div className='midmidtext'>Integrate your <br />schedule to your <br /> daily routine easily</div>
        <div className='applegooglelogos'>
          <FaApple /> <IoLogoGooglePlaystore />
        </div>
      </div>
      <div className='twoicons'>
      <IoIosRefresh className='icccon'/>
      <IoIosBluetooth className='icccon'/>
      </div>
    </div>
    <div className={`circlecontainercontainer ${stage2 ? 'contcontinview' : ''}`}>
    <div className={`circlecontainer ${stage4 ? 'continview' : ''} ${stage5 ? 'continview5th' : ''}`}>
      <div className={`secondwave ${stage4 ? 'secondinview' : ''} ${stage5 ? 'secondinview5th' : ''}`}>
    <div className={`livecircle ${stage3 ? 'livecinview' : ''}`}>Call</div></div></div></div>

   </div>
   <img src='https://i.ibb.co/xX3XCK3/BB1107-radkid-cord-cap-blue-6-d4d72b85-f70f-47d3-93f8-d53142f3858b-1024x1024.jpg'
   className={`kidwithcap ${stage2 ? 'kidwithcapinview' : ''}`}
   ></img>
    </div>
</div>
    </div>
  )
}
