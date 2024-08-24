import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import useMutationCart from '../Hoks/useMutationCart';
import Payment from '../Apis/Payment';
import { useLocation } from 'react-router-dom';


export default function DetealisCheck() {

    let {mutate,data} = useMutationCart(Payment)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cartId = queryParams.get('cartId');

    console.log(cartId);

    function handleSubmit(shippingAddress) {
        mutate({cartId, shippingAddress})
    }
    
    if (data?.data?.status == 'success') {
        window.location.href = data?.data?.session.url
    }


    let formik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:'',
        },
        onSubmit : handleSubmit
    })

    return (
<>
    
<form className='my-10' onSubmit={formik.handleSubmit}>
    <FloatingLabel  label="Details" className="mb-3">
        <Form.Control
    type="text"
    placeholder="Details"
    value={formik.values.details}
    onChange={formik.handleChange}
    id='details'
        />

    </FloatingLabel>

    <FloatingLabel  label="Phone" className="mb-3">
        <Form.Control
            type="tell"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            id='phone'
        />

    </FloatingLabel>

    <FloatingLabel  label="City" className="mb-3">
        <Form.Control
            type="text"
            placeholder="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            id='city'
        />

    </FloatingLabel>

    <div className="text-center">
        <button variant="outline-success" type='submit' className='but w-full'>Pay Now</button>
    </div>
</form>

</>
    )
}

