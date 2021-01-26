
import React, { useCallback, useEffect, useState } from 'react' ;
import alanBtn from '@alan-ai/alan-sdk-web';

export default function useAlan() {
const[alanInstance,setAlanInstance]=useState()

    useEffect(()=>{
        if(alanInstance!=null)return

        setAlanInstance(
        alanBtn({
            key: 'ffa3e7ac4870eee051cdea63a6fe96452e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand:commandData=>{
            console.log(commandData)
                
            }
        })
        )
    },[])
  return null
}