
import { useContext } from 'react';
import logo from'../assets/images/logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useCard from '../Hoks/useCard';
import { getCardApi } from '../Apis/Card';

export default function ANavbar() {
  let { data } = useCard('getCart', getCardApi)
let {userLogin ,setUserLogin} =useContext(userContext);
let navigat = useNavigate()
  function logout() {
    localStorage.removeItem('userToken')
    setUserLogin(null)
    navigat('/login')
  }
  return (

    <Navbar expand="lg" className=" bg-body-tertiary position-fixed top-0 right-0 bottom-0 left-0 nav z-50 py-10">
      <Container>
        <NavLink to={'/'}><img  src={logo} alt="logo" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="items-center m-auto bg-slate-50 p-4 sm:bg-slate-50 p-4 md:bg-slate-50 p-4 lg:bg-transparent">
    
          {userLogin !==null ? <>
                      <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-normal' to={''}>Home</NavLink>
                      <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-normal' to={'card'}>Card</NavLink>
                      <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-normal' to={'categores'}>Categores</NavLink>
                      <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-normal' to={'prands'}>Brands</NavLink>
                      <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-normal' to={'product'}>Broduct</NavLink>
            </>:null}
          </Nav>

          <Nav className="items-center py-3 lg:py-0 bg-slate-50 px-4 sm:bg-slate-50 px-4 md:bg-slate-50 px-4 lg:bg-transparent">
          {userLogin == null ? <>
              <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-bold' to='regestar'>Regestar</NavLink>
              <NavLink className='py-2 sm:py-2 md:py-2 lg:py-0 mx-2 text-lg text-slate-900 font-bold' to='login'>Login</NavLink>
          </>:<span onClick={logout}  className=' mx-2 text-lg text-slate-900 font-normal cursor-pointer' >LogOut</span>
          }
          <Link to={'/card'}>
                <div className="relative pt-2">
                <i className='fas fa-cart-shopping fs-5'></i>
                <span className='w-[20px] h-[20px] absolute bottom-3 left-3 bg-green-700 rounded-full flex justify-center items-center text-white'>{data?.numOfCartItems?data?.numOfCartItems:0}</span>
                </div>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}