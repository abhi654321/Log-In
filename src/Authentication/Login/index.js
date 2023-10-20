import { Button, CircularProgress, TextField } from '@mui/material'
import shopinggirl from "../../shoping girl.jpg"
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [isOtpSent,setIsOtpSent] = useState(false)
    const [mobileNumber,setMobileNumber] = useState("")
    const [otp,setOtp] = useState("")
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)

    const handleMobileVerificationApi = async ()=>{
      setIsLoading(true)
        try {
            const response = await axios.post("https://storebh.bhaaraterp.com/api/login/",{mobile_number:mobileNumber},{headers :{
                "Content-Type": "application/json"}})
            console.log(response)
            if(response.data.response_code===200){
              toast.success(response.data.message)
                setIsOtpSent(true)
                setIsLoading(false)
            } else {
                toast.error(response.data.message)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
            console.log("mohit")
            toast("Something went wrong!!!")
            // setIsLoading(false)
          }
    }
    const handleOtpVerificationApi = async ()=>{
        try {
            const response = await axios.post("https://storebh.bhaaraterp.com/api/verify-login-otp/",{mobile_number:mobileNumber,registration_token:"",type:"web",mobile_otp:otp})
            console.log(response)
            if(response.data.response_code==200){
                localStorage.setItem("token",response.data.token)
                toast.success(response.data.message)
                navigate("/profile")
            }
        } catch (error) {
            console.log(error)
            toast("Something went wrong!!!")
        }
    }

  return (
    <div className='w-screen flex px-40 pt-8 justify-center items-center'>
      <div className='w-1/2'>
        <img src={shopinggirl} width={400}  alt="" />
      </div>
      <div className='flex flex-col gap-6 h-[400] w-1/2 justify-between'>
      <span className=" flex flex-col text-center">
              <span className="font-bold  text-xl text-orange-600">BHAARAT STORE </span>
              <p className="text-xs text-blue-400">Your new shopping destination</p>
            </span>
    
        
        <p className='text-center font-bold'>Email Verification</p>
        {isOtpSent?
        <p>{`We have send a code to your mobile number ${mobileNumber}`}</p>
    :<p>Enter Your Mobile number to start shopping</p>}
    {isOtpSent?<TextField value={otp} onChange={(e)=>setOtp(e.target.value)} type="number" placeholder='Enter Otp Here...' />:<TextField value={mobileNumber} type='number' onChange={(e)=>setMobileNumber(e.target.value)} placeholder='Enter your Mobile Number...' />}
      
      <Button onClick={()=>{
        if(isOtpSent){
            handleOtpVerificationApi();
        } else {
            handleMobileVerificationApi();
        }
      }} variant='contained' color='secondary'>{isLoading?<CircularProgress className='!text-white' size={"small"} />:isOtpSent?"Verify Otp":"Send Otp"}</Button>
      {isOtpSent && <Button variant='contained' onClick={()=>{
        setIsOtpSent(false)
        setMobileNumber("")
        setOtp("")
      }}>Enter Again Mobile Number</Button>}</div>
    </div>
  )
}

export default Login
