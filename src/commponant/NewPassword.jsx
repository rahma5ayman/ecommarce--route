
import axios from "axios";
import { useFormik } from "formik";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';


export default function NewPassword() {

    let naigate = useNavigate ();
    const [apiEror , setapiEror]= useState('');
    const [isLoding , setisLoding]= useState(false);

  function handelNewPassword(FormValues) {
    setisLoding(true);
    axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword` ,FormValues)
    .then( ({data}) =>{
            naigate('/Login')
        // }
        setisLoding(false);
    })

    .catch( (apiRespons) =>{
    setisLoding(false);
    setapiEror(apiRespons?.response?.data?.message);
    })
    console.log(FormValues);
    }

let validition = Yup.object().shape({
  email:Yup.string().email('eamil is requred').required('email is requred'),
  newPassword:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password starded uppercuses').required('password is requred'),
 })


  let formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
    },
    validationSchema:validition,
    onSubmit: handelNewPassword
  })

  return (
    <>
  <div className="py-6 max-w-xl mx-auto">

  {apiEror? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{apiEror}
</div>:null}

  <form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
        <h2 className="py-5 ">New Password</h2>

        <div className="relative z-0 w-full mb-4 group">
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email :</label>
        </div>

{
formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{formik.errors.email}
</div>:null
}
        <div className="relative z-0 w-full mb-4 group">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} type="password" id="newPassword" name="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Your newPassword :</label>
        </div>
{
formik.errors.newPassword && formik.touched.newPassword?
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{formik.errors.newPassword}
</div>:null
}


<button type="submit" className="but ">
        {isLoding? <i className="fas fa-spinner fa-spin "></i>:'Login'}
</button>


</form>
</div>
    </>
);
}
