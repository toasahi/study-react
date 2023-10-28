import { ChangeEvent, useCallback, useState } from "react";

export const useInputArray = () => {
    const [text,setText] = useState('')
    const [array,setArray] = useState<Array<string>>([]);
  
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      if(text.length > 5 ){
        alert("5文字以下にしてください")
        return;
      }
        setText(e.target.value)
    }
  
    const handleAdd = useCallback(()=>{
      setArray((prevArray)=>{
        if(prevArray.includes(text)){
          alert('すでに存在します')
          return prevArray
        }
        return [...prevArray,text]
      })
    },[text])
  
    return {text,array,handleAdd,handleChange}
  }