
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Home from "./Home";
// // import Tech from "./Tech";
// // import PoliticsBlog from "./PoliticsBlog";
// // import Linkto from "./Linkto";
// // import BuildBlog from "./BuildBlog";
// // import Register from "./Register";
// // import Login from "./Login";
// // import RouterTechBlog from "./RouterTechBlog";
// // import RouterPoliticsBlog   from "./RouterPoliticsBlog";
// // import Blogs from "./Blogs" ;
// // import { MyContext } from "./MyContext"; // Make sure to import the context
// // import { useState } from "react";
// // import {useEffect} from "react";
// // import axios from "axios";

// // function RouterPath() {
// //   const [SelectBlog, setSelectBlog] = useState("");
// //   const [receiveDataBlog, setReceiveDataBlog] = useState("");
// //   const [Blog,setBlog]=useState([]);
// //          const [FindData, setFindData] =useState([]);
// //          const [RegisterData,setRegisterData] = useState("");
// //          const [Registered,setRegistered] = useState(false);
// //          const [ReceiveBlogObject,setReceiveBlogObject] =useState();
// //          const [Index,setIndex] =useState(null);
// //          const [countviews, setCountviews]  = useState(0);
// //           const [BlogType , setBlogType]  = useState("");
// //           const [ user , setUser] = useState("");
// //           const [currentPage, setCurrentPage] = useState(0); 
// //           const [loading, setLoading] = useState(true);
// //            const [ObjectId ,  setObjectId]  =  useState();


// //           const [RemainingUserBlog  ,   setRemainingUserBlog  ]  =  useState();
        



// //           const [userBlogs , setuserBlogs]  = useState("");
// //          console.log(ReceiveBlogObject);


// //               const [LoginState,setLoginState] =useState(false);

// //               useEffect(()=>{
// //                 axios.get("http://localhost:5000/api/BuildBlog")
// //                 .then(response=>{
// //                         console.log(response.data.data);
// //                    setFindData(response.data.data)
         
// //                   }).catch(error=>{
// //                              console.log("Internal error to found the data",error);
// //                   })
// //                 },[]);

// //   return (
// //     <>
// //       {/* Move MyContext.Provider to wrap the entire Router */}
  
// //       <MyContext.Provider value={{ SelectBlog, receiveDataBlog, setSelectBlog, setReceiveDataBlog ,Blog, setBlog , FindData,setFindData
// //               ,RegisterData,setRegisterData  , Registered , setRegistered  , LoginState,setLoginState , ReceiveBlogObject, setReceiveBlogObject ,
// //                Index,setIndex  ,   countviews , setCountviews  ,     BlogType  , setBlogType  ,  user , setUser  ,currentPage, setCurrentPage
// //                   ,    userBlogs  ,        setuserBlogs    ,     loading          ,        setLoading        ,     ObjectId  ,  setObjectId
      
// //         }}>
// //         <BrowserRouter>
// //           <Linkto />
// //           <Routes>
// //             <Route path="/" element={<Home   />} />
// //             <Route path="/Tech" element={<Tech />} />
// //             <Route path="/PoliticsBlog" element={<PoliticsBlog />} />
// //             <Route path="/BuildBlog" element={<BuildBlog />} />
// //             <Route path="/Register"   element={<Register/>}/>
// //             <Route path="/Login"      element={<Login/>}/>
// //             <Route path="/RouterTechBlog"    element={<RouterTechBlog/>} />
// //             <Route path= "/RouterPoliticsBlog/:ObjectId"       element={<RouterPoliticsBlog/> }/>
// //             <Route    path="/Blogs"   element={<Blogs/>}   />
                        
// //           </Routes>
// //         </BrowserRouter>
// //       </MyContext.Provider>
// //     </>
// //   );
// // }

// // export default RouterPath;







// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Tech from "./Tech";
// import PoliticsBlog from "./PoliticsBlog";
// import Linkto from "./Linkto";
// import BuildBlog from "./BuildBlog";
// import Register from "./Register";
// import Login from "./Login";
// import RouterTechBlog from "./RouterTechBlog";
// import RouterPoliticsBlog from "./RouterPoliticsBlog";
// import Blogs from "./Blogs";
// import  PopularBlog from "./PopularBlog";
// import { MyContext } from "./MyContext"; // Make sure to import the context
// import { useState, useEffect } from "react";
// import axios from "axios";
// import SideMenu from "./SideMenu";

// function RouterPath({ isSidebarOpen }) {
//   const [SelectBlog, setSelectBlog] = useState("");
//   const [receiveDataBlog, setReceiveDataBlog] = useState("");
//   const [Blog, setBlog] = useState([]);
//   const [FindData, setFindData] = useState([]);
//   const [RegisterData, setRegisterData] = useState("");
//   const [Registered, setRegistered] = useState(false);
//   const [ReceiveBlogObject, setReceiveBlogObject] = useState();
//   const [Index, setIndex] = useState(null);
//   const [countviews, setCountviews] = useState(0);
//   const [BlogType, setBlogType] = useState("");
//   const [user, setUser] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [ObjectId, setObjectId] = useState();
//   const [RemainingUserBlog, setRemainingUserBlog] = useState("");
//   const [userBlogs, setuserBlogs] = useState("");
//   const [LoginState, setLoginState] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/BuildBlog")
//       .then((response) => {
//         console.log(response.data.data);
//         setFindData(response.data.data);
//       })
//       .catch((error) => {
//         console.log("Internal error to found the data", error);
//       });
//   }, []);

//   return (
//     <div className={`main-content ${isSidebarOpen ? '' : 'shifted'}`}>
//       <MyContext.Provider
//         value={{
//           SelectBlog,
//           receiveDataBlog,
//           setSelectBlog,
//           setReceiveDataBlog,
//           Blog,
//           setBlog,
//           FindData,
//           setFindData,
//           RegisterData,
//           setRegisterData,
//           Registered,
//           setRegistered,
//           LoginState,
//           setLoginState,
//           ReceiveBlogObject,
//           setReceiveBlogObject,
//           Index,
//           setIndex,
//           countviews,
//           setCountviews,
//           BlogType,
//           setBlogType,
//           user,
//           setUser,
//           currentPage,
//           setCurrentPage,
//           userBlogs,
//           setuserBlogs,
//           loading,
//           setLoading,
//           ObjectId,
//           setObjectId,
//         }}
//       >
//         <BrowserRouter>
        
//           <Linkto />

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Tech" element={<Tech />} />
//             <Route path="/PoliticsBlog" element={<PoliticsBlog />} />
//             <Route path="/BuildBlog" element={<BuildBlog />} />
//             <Route path="/Register" element={<Register />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/RouterTechBlog" element={<RouterTechBlog />} />
//             <Route path="/RouterPoliticsBlog/:ObjectId" element={<RouterPoliticsBlog />} />
//             <Route path="/UserBlogs" element={<Blogs />} />
//             <Route path="/PopularBlog" element={<PopularBlog/>}/>
//           </Routes>
//         </BrowserRouter>
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default RouterPath;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Tech from "./Tech";
// import PoliticsBlog from "./PoliticsBlog";
// import Linkto from "./Linkto";
// import BuildBlog from "./BuildBlog";
// import Register from "./Register";
// import Login from "./Login";
// import RouterTechBlog from "./RouterTechBlog";
// import RouterPoliticsBlog   from "./RouterPoliticsBlog";
// import Blogs from "./Blogs" ;
// import { MyContext } from "./MyContext"; // Make sure to import the context
// import { useState } from "react";
// import {useEffect} from "react";
// import axios from "axios";

// function RouterPath() {
//   const [SelectBlog, setSelectBlog] = useState("");
//   const [receiveDataBlog, setReceiveDataBlog] = useState("");
//   const [Blog,setBlog]=useState([]);
//          const [FindData, setFindData] =useState([]);
//          const [RegisterData,setRegisterData] = useState("");
//          const [Registered,setRegistered] = useState(false);
//          const [ReceiveBlogObject,setReceiveBlogObject] =useState();
//          const [Index,setIndex] =useState(null);
//          const [countviews, setCountviews]  = useState(0);
//           const [BlogType , setBlogType]  = useState("");
//           const [ user , setUser] = useState("");
//           const [currentPage, setCurrentPage] = useState(0); 
//           const [loading, setLoading] = useState(true);
//            const [ObjectId ,  setObjectId]  =  useState();


//           const [RemainingUserBlog  ,   setRemainingUserBlog  ]  =  useState();
        



//           const [userBlogs , setuserBlogs]  = useState("");
//          console.log(ReceiveBlogObject);


//               const [LoginState,setLoginState] =useState(false);

//               useEffect(()=>{
//                 axios.get("http://localhost:5000/api/BuildBlog")
//                 .then(response=>{
//                         console.log(response.data.data);
//                    setFindData(response.data.data)
         
//                   }).catch(error=>{
//                              console.log("Internal error to found the data",error);
//                   })
//                 },[]);

//   return (
//     <>
//       {/* Move MyContext.Provider to wrap the entire Router */}
  
//       <MyContext.Provider value={{ SelectBlog, receiveDataBlog, setSelectBlog, setReceiveDataBlog ,Blog, setBlog , FindData,setFindData
//               ,RegisterData,setRegisterData  , Registered , setRegistered  , LoginState,setLoginState , ReceiveBlogObject, setReceiveBlogObject ,
//                Index,setIndex  ,   countviews , setCountviews  ,     BlogType  , setBlogType  ,  user , setUser  ,currentPage, setCurrentPage
//                   ,    userBlogs  ,        setuserBlogs    ,     loading          ,        setLoading        ,     ObjectId  ,  setObjectId
      
//         }}>
//         <BrowserRouter>
//           <Linkto />
//           <Routes>
//             <Route path="/" element={<Home   />} />
//             <Route path="/Tech" element={<Tech />} />
//             <Route path="/PoliticsBlog" element={<PoliticsBlog />} />
//             <Route path="/BuildBlog" element={<BuildBlog />} />
//             <Route path="/Register"   element={<Register/>}/>
//             <Route path="/Login"      element={<Login/>}/>
//             <Route path="/RouterTechBlog"    element={<RouterTechBlog/>} />
//             <Route path= "/RouterPoliticsBlog/:ObjectId"       element={<RouterPoliticsBlog/> }/>
//             <Route    path="/Blogs"   element={<Blogs/>}   />
                        
//           </Routes>
//         </BrowserRouter>
//       </MyContext.Provider>
//     </>
//   );
// }

// export default RouterPath;







import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tech from "./Tech";
import PoliticsBlog from "./PoliticsBlog";
import Linkto from "./Linkto";
import BuildBlog from "./BuildBlog";
import Register from "./Register";
import Login from "./Login";
import RouterTechBlog from "./RouterTechBlog";
import RouterPoliticsBlog from "./RouterPoliticsBlog";
import Blogs from "./Blogs";
import  PopularBlog from "./PopularBlog";
import { MyContext } from "./MyContext"; // Make sure to import the context
import { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import ProfileData from "./ProfileData";

function RouterPath({ isSidebarOpen }) {
  const [SelectBlog, setSelectBlog] = useState("");
  const [receiveDataBlog, setReceiveDataBlog] = useState("");
  const [Blog, setBlog] = useState([]);
  const [FindData, setFindData] = useState([]);
  const [RegisterData, setRegisterData] = useState("");
  const [Registered, setRegistered] = useState(false);
  const [ReceiveBlogObject, setReceiveBlogObject] = useState();
  const [Index, setIndex] = useState(null);
  const [countviews, setCountviews] = useState(0);
  const [BlogType, setBlogType] = useState("");
  const [user, setUser] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ObjectId, setObjectId] = useState();
  const [RemainingUserBlog, setRemainingUserBlog] = useState("");
  const [userBlogs, setuserBlogs] = useState("");
  const [LoginState, setLoginState] = useState(false);
  const [TotalBlogsViews ,setTotalBlogsViews]  = useState(0); 
  const [followerCount, setFollowerCount] = useState(null);
  const [CurrentBlogFollower ,setCurrentBlogFollower] =useState();
  const [TotalBlogsFollower , setTotalBlogsFollower] =useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/BuildBlog")
      .then((response) => {
        console.log(response.data.data);
        setFindData(response.data.data);
      })
      .catch((error) => {
        console.log("Internal error to found the data", error);
      });
  }, []);

  return (
    <div className={`main-content ${isSidebarOpen ? '' : 'shifted'}`}>
      <MyContext.Provider
        value={{
          SelectBlog,
          receiveDataBlog,
          setSelectBlog,
          setReceiveDataBlog,
          Blog,
          setBlog,
          FindData,
          setFindData,
          RegisterData,
          setRegisterData,
          Registered,
          setRegistered,
          LoginState,
          setLoginState,
          ReceiveBlogObject,
          setReceiveBlogObject,
          Index,
          setIndex,
          countviews,
          setCountviews,
          BlogType,
          setBlogType,
          user,
          setUser,
          currentPage,
          setCurrentPage,
          userBlogs,
          setuserBlogs,
          loading,
          setLoading,
          ObjectId,
          setObjectId,
          TotalBlogsViews,
          setTotalBlogsViews,
          followerCount,
          setFollowerCount,
          CurrentBlogFollower ,setCurrentBlogFollower,
          TotalBlogsFollower , setTotalBlogsFollower ,
          averageRating, setAverageRating ,
        }}
      >
        <BrowserRouter>
        
        <div>
        <SideMenu isSidebarOpen={isSidebarOpen}/>
        </div>
        <div>
        <Linkto />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/PoliticsBlog" element={<PoliticsBlog />} />
          <Route path="/BuildBlog" element={<BuildBlog />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RouterTechBlog" element={<RouterTechBlog />} />
          <Route path="/RouterPoliticsBlog/:ObjectId" element={<RouterPoliticsBlog />} />
          <Route path="/UserBlogs" element={<Blogs />} />
          <Route path="/PopularBlog" element={<PopularBlog/>}/>
          <Route path="/ProfileData" element={<ProfileData/>}/>
        </Routes>
        <Footer/>
        </div>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default RouterPath;









