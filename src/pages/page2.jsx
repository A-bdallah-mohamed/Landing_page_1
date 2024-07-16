import React from 'react'
import { useState , useEffect } from 'react'
import Useintersectionobserver from '../custom hooks/useintersectionobserver'
import { GoArrowRight } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";



export default function Page2() {

const [increasingnum,setincreasingnum] = useState(450)

useEffect(()=> {
if(increasingnum < 600){
  setTimeout(() => {
    setincreasingnum(i => i + 1)
  }, 25);
  console.log(increasingnum)
}

},[increasingnum])

  const [div1,isdiv1seen] = Useintersectionobserver()
  const [div2,isdiv2seen] = Useintersectionobserver()
  const [div3,isdiv3seen] = Useintersectionobserver()
  const [div4,isdiv4seen] = Useintersectionobserver()
  const[bigtext,isbigtextseen] = Useintersectionobserver()
  const [bigicon,isbigiconseen] = Useintersectionobserver()
  const [smalltext,issmalltextseen] = Useintersectionobserver()
  const [bigmaintext,isbigmaintextseen] = Useintersectionobserver()
  return (
    <div className='pag2container'>
      <div className='peopletextandbigtextcontainer'>
        <div className='bigtextanimation' ref={bigtext}>
          <span className={`bigtextunseen ${isbigtextseen ? 'b1bigseen' : ''}`}
          >We understand the challenges faced by organizations</span>
          <span className={`bigtextunseen ${isbigtextseen ? 'b2bigseen' : ''}`}>
            with remote teams - the geographical barriers and</span>
          <span className={`bigtextunseen ${isbigtextseen ? 'b3bigseen' : ''}`}>
            communication gaps. Our mission is to bridge these</span>
          <span className={`bigtextunseen ${isbigtextseen ? 'b4bigseen' : ''}`}>
            gaps and create a virtual environment where teams</span>
          <span className={`bigtextunseen ${isbigtextseen ? 'b5bigseen' : ''}`}>
            can connect, collaborate, and innovate effortlessly.</span>
        </div>
      <div className='peopletextanimation'>
        <div className='peopleandfirsttextpeoplecomponent'>
        <div className='howmanyusers'>
<div className={`increasingnumunseen ${isdiv1seen ?  'increasingnumseen' : ''}`}>{increasingnum}K +</div>
<div className={`userstextunseen ${isdiv1seen ?  'usertextseen' : ''}`}>Users</div>
        </div>
        <div className='peopledivcontainer'>
        <div  ref={div1}
        style={{backgroundImage:'url("https://images.immediate.co.uk/production/volatile/sites/3/2024/02/Millers-Girl-64b7b2f.png?quality=90&resize=980,654")'}}
        className={`personimg firstpersonimg ${isdiv1seen ? 'firstpersonimgseen' : ''}`}>
        </div>
        <div ref={div2} 
        style={{backgroundImage:'url("https://media.cnn.com/api/v1/images/stellar/prod/220713150351-ana-de-armas-file-2021.jpg?c=16x9&q=h_833,w_1480,c_fill")'}}
        className={`personimg secondperson ${isdiv2seen ? 'img1seen' : ''}`}>
        </div>
        <div ref={div3}
        style={{backgroundImage:'url("https://i.guim.co.uk/img/media/a4380f1eb23ed62a7fa287aaaac2216beed08b12/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none")'}}
        className={`personimg tbhirdperosn ${isdiv3seen ? 'img2seen' : ''}`}>
        </div>
        <div ref={div4}
        style={{backgroundImage:'url("https://www.billboard.com/wp-content/uploads/media/lana-del-rey-live-may-20-2017-billboard-1548.jpg")'}}
        className={`personimg fourthimgperson ${isdiv4seen ? 'img3seen' : ''}`}>
        </div>
        </div>
        </div>
        <div className='secondtextpeopledivanimation'>

        <span className={` wordunseen ${isdiv1seen ? 'firstwordseen' : ''}`}>Explore</span>
        <span className={` wordunseen ${isdiv1seen ? 'ssecondwordunseen' : ''}`}>Our</span> 
        <span className={` wordunseen ${isdiv1seen ? 'thirdwordunseen' : ''}`}>Users</span> 
        <span className={` wordunseen ${isdiv1seen ? 'fourthwordseen' : ''}`}>Stories</span> 
        <GoArrowRight  className={` wordunseen ${isdiv1seen ? 'arrowseen' : ''}`} />

        </div>
        </div>
        </div>
        
<div className='twoiconssmalltextcontainer'>

<div className={`smalltextunseen ${issmalltextseen ? 'smalltextseen' : ''} `} ref={smalltext}>
  Where unity meets <br />Productivity
</div>

<div className={`twoiconscontainer ${isbigiconseen ? 'twoiconcontainerseen' : ''}`}>
  <div className='iconcontainer'>
    <div className={`bigicon1 ${isbigiconseen ? 'bigicon1seen' : ''}`} ref={bigicon}>
      <IoIosCall />
      </div>
    </div>
  <div className='iconcontainer'>
    <div className={`bigicon2 ${isbigiconseen ? 'bigicon2seen' : ''}`}>
      <CiCalendar />
      </div>
    </div>
</div>
</div>


<div className={`bigmaintextcontainer ${isbigmaintextseen ? 'bigmaintextconatinerseen' : ''}`} ref={bigmaintext}>
  <p className={`text111 ${isbigiconseen ? 'text11seen' : ''}`}>Our <span>innovative</span></p>
  <p className={`text111 ${isbigiconseen ? 'text22seen' : ''}`}>Platform is designed</p>
  <p className={`text111 ${isbigiconseen ? 'text33seen' : ''}`}>to bring together distributed</p>
  <p className={`text111 ${isbigiconseen ? 'text44seen' : ''}`}><span>teams, fostering</span> truly</p>
  <p className={`text111 ${isbigiconseen ? 'text55seen' : ''}`}><span>seamless</span> and fluid <span>flow</span></p>
  <p className={`text111 ${isbigiconseen ? 'text66seen' : ''}`}><span>of communication</span></p>
  <p className={`text111 ${isbigiconseen ? 'text77seen' : ''}`}>and driving productivity</p>
  <p className={`text111 ${isbigiconseen ? 'text88seen' : ''}`}>to <span>new heights</span></p>


  <div className='twofloatingboxescontainer'>

<div className={`firstfloatingbox ${isbigiconseen ? 'firstfloatingboxseen' : ''}`}></div>
<div className={`secondfloatingbox ${isbigiconseen ? 'secondfloatingboxseen' : ''}`}>
  <div className='smallboxbehind'></div>
  <div className='bigboxfront'>
    <div className={`peopleinfrontboxCONTAINER ${isbigiconseen ? 'firstpeoplefloatcontainer' :''}`}>
      <div className={`personinrow ${isbigiconseen ? 'personnn1' : ''} `}
      style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNiCJdH9PKlagCQm1sEdGlRv9TWx3HTs67DaDzOU3ETexrqJAZ9mnSOaEuBg5oDOVjss&usqp=CAU)'}}>
      </div>
      <div className={`personinrow ${isbigiconseen ? 'personnn2' : ''} `}
      style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgtBySd15szMFXD8c3iKwM6w-UUUcANGcB-rXUW_SAyrleWTW1aIK76s9EyiXGvEXtZM&usqp=CAU)'}}>
      </div>
    </div>
    <div className={`peopleinfrontboxCONTAINER ${isbigiconseen ? 'secondpeoplefloatcontainer' : ''}`}>
    <div className={`personinrow ${isbigiconseen ? 'personnn3' : ''} `}
    style={{backgroundImage: 'url(https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg)'}}>
    </div>
    <div className={`personinrow ${isbigiconseen ? 'personnn4' : ''} `} 
    style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS-FdA9fgfgylCTTXVUFu_x2xPUvOglGJ0ePPAIdMU3eUxFYQt79NZ0ilxeQmQclbdU4&usqp=CAU)'}}>

    </div>
    </div>
  </div>
</div>
  </div>

<div className='phonecontainer'>

<div className='phone'>

<div className='face' id='front'></div>
<div className='face' id='back'></div>
<div className='face' id='right'></div>
<div className='face' id='left'></div>
<div className='face' id='up'></div>
<div className='face' id='down'></div>

</div>


</div>




</div>
    </div>
  )
}
