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
                    <a href=''><WhatsAppIcon color='success' className='icon'/></a> 
                </div>
                <div className='instagram'>
                    <a href=''><InstagramIcon color='success' className='icon'/></a>
                </div>
                <div className='twitter'>
                    <a href=''><TwitterIcon color='success' className='icon'/></a> 
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer