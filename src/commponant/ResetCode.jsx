
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
    let navigate = useNavigate();
    const [apiError, setApiError] = useState('');
    const [isLoding, setisLoding] = useState(false);

async function handleRecet(FormValues) {
    try {
        setisLoding(true);
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, FormValues);
            setisLoding(false);
            setApiError('')
            navigate('/newpassword')
        // }

    } catch (error) {
        setisLoding(false);
        setApiError(error?.response?.data?.message);
    }
}

let formik = useFormik({
    initialValues: {
        resetCode: '',
    },
    onSubmit: handleRecet,
});

return (
    <>
    <div className="py-6 max-w-xl mx-auto">
        {apiError ? (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {apiError}
    </div>
        ) : null}

<form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
    <h2 className="py-5">Reset Code  </h2>

    <div className="relative z-0 w-full mb-4 group">
        <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.resetCode}
            type="text"
            id="resetCode"
            name="resetCode"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
        />
        <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >   
            Enter Your resetCode:
        </label>
    </div>


        <button type="submit" className="but">
            {isLoding ? <i className="fas fa-spinner fa-spin"></i> : 'submit'}
        </button>
        </form>
    </div>
    </>
);
}

