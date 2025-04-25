import localFont from "next/font/local"

export const mfont = localFont({src: 
  [
    { 
      path: '../public/pfont/InstrumentSerif-Italic.ttf',
      
      style:'italic',
      
    },
    { 
      path: '../public/pfont/InstrumentSerif-Regular.ttf',
      
    }
],  variable: '--font-iserif'}

)


export const sfont = localFont({src: 
  [
    { 
      path: '../public/sfont/fonnts.com-Roc_Grotesk_Regular.otf',
      style:'normal',
      
    },
    
    
],  variable: '--font-rgrotesk'}

)

export const dfont = localFont({src: 
  [
    { 
      path: '../public/dfont/MADEOkineSansPERSONALUSE-Regular.otf',
      style:'normal',
      
    },
    
    
],  variable: '--font-madesans'}

)
