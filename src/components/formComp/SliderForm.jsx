import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export const SliderForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const sliderList = JSON.parse(localStorage.getItem("sliderList"))
    const [selectedRecode,setSelectedRecord] = useState(sliderList.find(({_id})=>_id==id))
    const isDirty =JSON.stringify(selectedRecode) !== JSON.stringify(sliderList.find(({_id})=>_id==id))

    const handleSubmit =()=>{
        const updatedCardList = sliderList.map(slider=>{
            if(id == slider._id){
                return selectedRecode
            }
            return slider
        })
        localStorage.setItem('sliderList',JSON.stringify(updatedCardList))
        navigate('/')
      }
      
      const handleCancel =()=>{
        navigate('/')
    }
  return (
    <div className='bg-[linear-gradient(90deg,#0a0b13,#070920,#040828)] m-6 w-1/2 flex flex-col gap-6'>
        <label htmlFor="" className='font-bold'>{selectedRecode.heading}</label>
        <label htmlFor="">description</label>
        <textarea name="" id="" cols="30" rows="10" className={`p-5 bg-[linear-gradient(90deg,#0a0b13,#070920,#040828)] ${true && "border border-gray-400"}`} value={selectedRecode.desc} onChange={(e)=>{setSelectedRecord({...selectedRecode, desc:e.target.value})}}></textarea>
        <img src={selectedRecode.image} className='h-[20%] w-[20%]' />
        <input type="text"  className={`p-5 bg-[linear-gradient(90deg,#0a0b13,#070920,#040828)] ${true && "border border-gray-400"}`} value={selectedRecode.image} onChange={(e)=>{setSelectedRecord({...selectedRecode, image:e.target.value})}}/>
        <button onClick={handleSubmit} disabled={!isDirty} className={`${isDirty && "hover:text-blue-500"} border border-gray-400 mb-4`}>Submit</button>
        <button onClick={handleCancel} className={`${true && "hover:text-red-500"} border border-gray-400 mb-4`}>cancel</button>
    </div>
  )
}
