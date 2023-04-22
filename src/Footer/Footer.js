import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className='content'>
            <div className='icones'>
                <div>
                    <WhatsAppIcon/>
                </div>
                <div>
                    <InstagramIcon/>
                </div>
                <div>
                    <TwitterIcon/>
                </div>
            </div>
            <div className='copy'>
                <p>&Copy;hello</p>
            </div>
        </div>
    </div>
  )
}

export default Footer