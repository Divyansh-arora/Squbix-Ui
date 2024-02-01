import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const CardForm = (props) => {
    const {selectToEdit, setCardData, setSelectToEdit, cardData} = props
    const {heading, desc} = selectToEdit
    const [description,setDesc]=useState(desc)
    const handleSubmit =()=>{
        const updatedCardList = cardData.map(card=>{
            if(heading === card.heading){
                return {heading, desc:description}
            }
            return card
        })
        setCardData(updatedCardList)
        setSelectToEdit(null)
        localStorage.setItem('cardData',JSON.stringify(updatedCardList))
    }
  return (
    <div className='bg-[linear-gradient(90deg,#0a0b13,#070920,#040828)] w-1/2 flex flex-col gap-6'>
        <label htmlFor="" className='font-bold'>{heading}</label>
        <label htmlFor="">description</label>
        <textarea type="text" className={`bg-[linear-gradient(90deg,#0a0b13,#070920,#040828)] ${desc!==description && "border border-gray-400"}`} value={description} onChange={(e)=>setDesc(e.target.value)}/>
        <button onClick={handleSubmit} disabled={desc===description} className={`${desc!==description && "hover:text-blue-500"} border border-gray-400 mb-4`}>Submit</button>

      
    </div>
  )
}



export const CardFormV2 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const cardData = JSON.parse(localStorage.getItem("cardData"))
    const [selectedRecode,setSelectedRecord] = useState(cardData.find(({heading})=>heading===id))
    const initialState = cardData.find(({heading})=>heading===id)

    const handleSubmit =()=>{
        const updatedCardList = cardData.map(card=>{
            if(id === card.heading){
                return selectedRecode
            }
            return card
        })
        localStorage.setItem('cardData',JSON.stringify(updatedCardList))
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
        <button onClick={handleSubmit} disabled={selectedRecode.desc === initialState.desc} className={`${selectedRecode.desc !== initialState.desc && "hover:text-blue-500"} border border-gray-400 mb-4`}>Submit</button>
        <button onClick={handleCancel} className={`${true && "hover:text-red-500"} border border-gray-400 mb-4`}>cancel</button>
    </div>
  )
}

