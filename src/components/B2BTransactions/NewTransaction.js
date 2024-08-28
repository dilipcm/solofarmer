import { useState } from "react";

const newTransaction = ()=>{

    const [cropName,setCropName] = useState('')
    const [cropDescription,setCropDescription] = useState('')
    const [availQuantity,setavailQuantity] = useState('')
    const [dateOfPost, setdateOfPost] = useState(new Date())
    const [deleveryTime,setdeliveryTime] = useState(new Date())

 

    const handleCropName = (event)={
        event.preventDefault()
        value = event.target.value()
        setCropName(value)

    };
   <form>

    <label>Crop Name</label>
    <input onChange={handleCropName} />
   </form>

    const transaction = {}
    return <>
    <div>{transaction}</div>
    </>
}