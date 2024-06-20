import React, { useEffect } from 'react'
import Useintersectionobserver from '../custom hooks/useintersectionobserver'
import { useRef , useState } from 'react'
export default function Header() {

  const [mainmenu,mainmenuinview] = Useintersectionobserver()
const [signupmenu,signupmenuinview] = Useintersectionobserver()
const [logo ,islogoinview] = Useintersectionobserver()

const [linormalsize,setlinormalsize] = useState(false)

useEffect(()=> {
setTimeout(() => {
  setlinormalsize(true)
}, 800);
},[mainmenuinview])
  return (
    <div className='header'>
      <div className={`logo ${islogoinview ? 'logoinview' : ''}`} ref={logo}>LOGO</div>

      <ul className={`mainmenu ${mainmenuinview ? 'mainmenuinview' : ''}` } ref={mainmenu}>
        <li className={`li1 ${mainmenuinview ? 'li1inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Explore</li>
        <li className={`li2 ${mainmenuinview ? 'li2inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Features</li>
        <li className={`li3 ${mainmenuinview ? 'li3inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Solutions</li>
        <li className={`li4 ${mainmenuinview ? 'li4inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Client Stories</li>
        <li className={`li5 ${mainmenuinview ? 'li5inview' : ''} ${linormalsize ? 'licolor' : ''}`}>FAQ</li>
      </ul>

      <ul ref={signupmenu} className={`signupmenu ${signupmenuinview ? 'signupmenuinview' : ''}`}>
        <li className={`li1 ${mainmenuinview ? 'li1inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Sign up</li>
        <li className={`li2 ${mainmenuinview ? 'li2inview' : ''} ${linormalsize ? 'licolor' : ''}`}>Log in</li>
      </ul>
    </div>
  )
}
