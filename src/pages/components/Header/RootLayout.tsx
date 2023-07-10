import React, { ReactElement } from 'react'
import BottomHeader from './BottomHeader'
import Header from './Header'
import Footer from '../Footer'
interface Props{
    children:ReactElement
}

const RootLayout = ({children}:Props) => {
  return (
    <>
    <Header/>
    <BottomHeader/>

    {children}

    <Footer/>
    
    </>
  )
}

export default RootLayout