/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About.jsx';
import Contack from './components/Contack.jsx/Contack.jsx';
import Home from './components/home/Home.jsx';
import Users from './components/users/Users.jsx';
import UserDeatails from './components/userdeatails/UserDeatails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetail from './components/postdetail/PostDetail.jsx';


const router = createBrowserRouter([
  {
  path:"/",
  element:<Home></Home>,
  children:[
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/contack",
      element:<Contack></Contack>
    },
    {
      path:"/users",
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:"/user/:userId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDeatails></UserDeatails>
    },
    {
      path:"/posts",
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>
    },
    {
      path:"/post/:postId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDetail></PostDetail>
    }
  
  ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
