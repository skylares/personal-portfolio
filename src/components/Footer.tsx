import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function Footer() {
  return(
    <footer className="footer">
      <div className='footer--text-container'>
        <p className='footer--creator'>Designed and developed by Skylar Kesselring</p>
        <p>Illustration from <a className='footer--link' href="http://www.streamlinehq.com">streamlinehq</a></p>
      </div>
      <a 
        href='https://github.com/skylares' 
        className='footer--shortcut'
        target='_blank'
        ><img src={github} className='footer--shortcut-img'/>
      </a>
      <a 
        href='https://www.linkedin.com/in/skylar-kesselring-178315b2/' 
        className='footer--shortcut' 
        target='_blank'
        ><img src={linkedin} className='footer--shortcut-img'/>
      </a>
    </footer>
  );
}