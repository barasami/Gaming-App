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
                <div className='whatsapp'>
                    <WhatsAppIcon color='#5a5858' className='icon'/>
                </div>
                <div className='instagram'>
                    <InstagramIcon color='#5a5858' className='icon'/>
                </div>
                <div className='twitter'>
                    <TwitterIcon color='#5a5858' className='icon'/>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer