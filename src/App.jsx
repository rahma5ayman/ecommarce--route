
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './commponant/Layout'
import Home from './commponant/Home'
import Categores from './commponant/Categores'
import Brands from './commponant/Brands'
import Card from './commponant/Card'
import Broduct from './commponant/Broduct'
import Login from './commponant/Login'
import Regestar from './commponant/Regestar'
import Notfound from './commponant/Notfound'
import { CounterContextProvider } from './Context/CounterContext'
import { UserContextProvider } from './Context/UserContext'
import ProductRoute from './commponant/ProductRoute'
import ProductDeatils from './commponant/ProductDeatils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import Forget from './commponant/Forget'
import ResetCode from './commponant/ResetCode'
import NewPassword from './commponant/NewPassword'
import DetealisCheck from './commponant/DetealisCheck'
import Ordars from './commponant/ordars'

let query = new QueryClient()
export default function App() {

  let x= createBrowserRouter([
    {path :'/' ,element:<Layout></Layout> , children:[
      {index:true , element:<ProductRoute><Home/></ProductRoute>},
  
      {path : '/categores' , element:<ProductRoute><Categores/></ProductRoute>},
  
      {path : '/prands' , element:<ProductRoute><Brands/></ProductRoute>},
  
      {path : '/card' , element:<ProductRoute><Card/></ProductRoute>},
  
      {path : '/product' , element:<ProductRoute><Broduct/></ProductRoute>},
                
      {path : '/productdeatils/:id' , element:<ProductRoute><ProductDeatils/></ProductRoute>},
  
      {path : '/detealischeck' , element:<DetealisCheck></DetealisCheck>},
  
      {path : '/forgetpassword' , element:<Forget></Forget>},
  
      {path : '/resetCode' , element:<ResetCode></ResetCode>},

      {path : '/newpassword' , element:<NewPassword></NewPassword>},

      {path : '/allorders' , element:<Ordars></Ordars>},

      {path : '/login' , element:<Login></Login>},
  
      {path : '/regestar' , element:<Regestar></Regestar>},
  
      {path : '*' , element:<Notfound></Notfound>},
    ]}
  ])
  
  return(

<>
<QueryClientProvider client={query}>
<UserContextProvider>
<CounterContextProvider>
<RouterProvider router={x}></RouterProvider>
<ReactQueryDevtools/> 
<ToastContainer autoClose={500}/>
</CounterContextProvider>
</UserContextProvider>
</QueryClientProvider>
</>
  )
}