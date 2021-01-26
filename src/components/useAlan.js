import React, { useCallback, useEffect, useState } from 'react' ;
import alanBtn from '@alan-ai/alan-sdk-web';
const COMMAND={
    OPEN_REG:'open-register-page'
}
export default function useAlan() {
    const [alanInstance,setAlanInstance]=useState()

    const openReg=useCallback(()=>{
        alanInstance.playText("Opening Register Page")
    },[alanInstance])
      useEffect(()=>{
          window.addEventListener(COMMAND.OPEN_REG,openReg)
          return()=>{
            window.addEventListener(COMMAND.OPEN_REG,openReg)
          }
      },[alanInstance,openReg])

    useEffect(()=>{
        alanBtn({
            key: 'ffa3e7ac4870eee051cdea63a6fe96452e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand:({command})=>{
                window.dispatchEvent(new CustomEvent(command))
                
            }
        })
    },[])
  return null
}
