import { Avatar, Button, Divider, MenuItem, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
    const [userData,setUserData] = useState({})
    const [profilePic,setProfilePic]= useState("")
    const token = localStorage.getItem("token")
    const initialValues={
        first_name:userData.first_name?userData.first_name:"",
        last_name:userData.last_name?userData.last_name:"",
        email:userData.email?userData.email:"",
        gender:userData.gender?userData.gender:"",
        date_of_birth:userData.date_of_birth?userData.date_of_birth:"",
        mobile_no:userData.mobile_no?userData.mobile_no:"",
        gst_no:userData.gst_no?userData.gst_no:"",
        bank_account_number:userData.bank_account_number?userData.bank_account_number:"",
        ifsc_code:userData.ifsc_code?userData.ifsc_code:"",
    }
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:()=>{
            const formData = new FormData()
          
            formData.append("first_name",formik.values.first_name);
            formData.append("last_name",formik.values.last_name);
            formData.append("email",formik.values.email);
            formData.append("gender",formik.values.gender);
                formData.append("date_of_birth",moment(formik.values.date_of_birth).format("YYYY-MM-DD"));
                formData.append("mobile_no",formik.values.mobile_no);
                formData.append("gst_no",formik.values.gst_no);
                formData.append("bank_account_number",formik.values.bank_account_number);
                formData.append("ifsc_code",formik.values.ifsc_code);
                formData.append("profile_picture",profilePic);
          
            handleUserDataUpdate(formData)
        },
    })
useEffect(()=>{
    formik.setValues(userData)
    setProfilePic(userData.profile_picture)
},[userData])
    console.log(formik.values,"fdhgdf")
    const handleUserDataUpdate=async (formData)=>{
        try {
            
            const response = await axios.post("https://storebh.bhaaraterp.com/api/update-profile/",formData,{headers:{token:localStorage.getItem("token"),Authorization:localStorage.getItem("token")}})
            console.log(response)
            if(response.data.response_code===200) {
                toast.success(response.data.msg?response.data.msg:response.data.message)
            } else{
                toast.success(response.data.msg)
            }
        } catch (error) {
            console.log(error);
            toast.error("Api Failing Update")
        }
    }

    const getData =  ()=>{
        axios.get("https://storebh.bhaaraterp.com/api/my-profile/",{headers:{
            token:token,
        }}).then(res=>{
            if(res.status===200){
                // console.log(res.data.data.profile_data[0])
                setUserData(res.data.data.profile_data[0])
                setProfilePic(res.data.data.profile_data[0].profile_picture?res.data.data.profile_data[0].profile_picture:"")
            } else {
                toast("Something went wrong")
            }
        }).catch(err=>{
            alert("API  failing profile!!")
        })
    }
    useEffect(()=>{token && getData()},[])
    console.log(userData)
  return (
    <div   className='p-20 '>
        <h2  className='font-bold'>Personal Information</h2>
        <Divider />
      <form className='flex flex-col !h-full' onSubmit={formik.handleSubmit}>
        <div className='w-full group flex justify-end items-center'>
            <Avatar alt="user" src={profilePic?profilePic:"/broken-image.jpg"} sx={{width:80,height:80,cursor:"pointer"}}><input className='opacity-5' type='file'/></Avatar>
        </div>
        <div  className='grid grid-cols-2 gap-4'>

      <TextField variant='standard' placeholder='First name*' size='small' value={formik.values.first_name} name='first_name' id='first_name' onChange={formik.handleChange}/>
      <TextField variant='standard' placeholder='Last name' size='small' value={formik.values.last_name} name='last_name' id=  'last_name' onChange={formik.handleChange}/>
      <TextField variant='standard' type="email" placeholder='email' size='small' value={formik.values.email} name='email' id= 'email' onChange={formik.handleChange}/>
      <TextField select variant='standard' placeholder="gender" size='small' value={formik.values.gender} name='gender' id=  'gender' onChange={formik.handleChange}>
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </TextField>
      <TextField variant='standard' placeholder='dob' type='date' size='small' value={formik.values.date_of_birth} name='date_of_birth' id=   'date_of_birth' onChange={formik.handleChange}/>
      <TextField variant='standard' type='number' placeholder='mobile number' size='small' value={formik.values.mobile_no} name='mobile_no' id=     'mobile_no' onChange={formik.handleChange}/>
      <TextField variant='standard' type='number' placeholder='gst' size='small' value={formik.values.gst_no} name='gst_no' id=     'gst_no' onChange={formik.handleChange}/>
      <TextField variant='standard' type='number' placeholder='Bank Account number' size='small' value={formik.values.bank_account_number} name='bank_account_number' id=     'bank_account_number' onChange={formik.handleChange}/>
      <TextField variant='standard'  placeholder='IFSC' size='small' value={formik.values.ifsc_code} name='ifsc_code' id=     'ifsc_code' onChange={formik.handleChange}/>
        </div>
                                       <Button sx={{alignSelf:"flex-end",width:"fit"}} type='submit' color="warning" variant='contained'>Saves Changes</Button>
      </form>
    </div>
  )
}

export default Profile
