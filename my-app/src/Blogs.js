// import {useEffect      , useContext     } from "react";
// import {MyContext}  from "./MyContext";
// import axios from "axios";
// function Blogs(){
//           const {userBlogs , setuserBlogs  ,    user  ,  setUser ,    loading   ,  setLoading      ,  LoginState   ,  setLoginState    }  = useContext(MyContext);

//                                       const  StoredUserBlog  =  localStorage.getItem("userBlogs")
//                                       const  localStorageUserBlogs = StoredUserBlog ?    JSON.parse(StoredUserBlog)  : [];


                                       
//                                          const  PresentUserBlog     =   userBlogs.length > 0 ? userBlogs : localStorageUserBlogs;
//                                          useEffect( ()=>{ 
                           
//                                          if(!PresentUserBlog){
//                                             return ;
//                                          }
                        
//                                     setLoading(true);
//                    axios.post("http://localhost:5000/BuildBlog"   ,  {user} )
//                    .then((response)=>{
//                          console.log(response.status);
//                    }).catch(error=>{
//                           console.log("Internal  error  "  ,  error  );
//                    })


      
              
//         axios.get("http://localhost:5000/api/userBlogs"      , {
//             headers: { user: user } }        )
//         .then((response)=>{
//             console.log(response.status);
//                           setuserBlogs(response.data.blogs)  
//                           localStorage.setItem("userBlogs", JSON.stringify(response.data.blogs));
//                           console.log(user);
                
//                 setLoading(false);

//         }).catch((error)=>{
//             console.log(error.response.status);
           
//             if(!PresentUserBlog){
//                 setLoading(true);
//             localStorage.removeItem("userBlogs"   )
//             }
            
//         }) 
//     }, [setuserBlogs  ,    user  ] )

//     if (loading) {
//         return <div>Loading blogs...</div>;
//       }
      

          

//     return(<>
//              {         PresentUserBlog.length       > 0 ? (
//                   PresentUserBlog.map((blog, index)  => (
//           <div key={index}>
//           <p>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//           </div>
//         )) 
//       ) : (
//         <p>No blogs found.</p>
//       )}

//     </>)
// }
// export default Blogs;

// import { useEffect, useContext } from "react";
// import { MyContext } from "./MyContext";
// import axios from "axios";

// function Blogs() {
//   const { userBlogs, setuserBlogs, user, setUser, loading, setLoading  ,    LoginState  ,    setLoginState    } = useContext(MyContext);

//   // Retrieve stored blogs from localStorage
//   const storedUserBlogs = localStorage.getItem("userBlogs");
//   const localStorageUserBlogs = storedUserBlogs ? JSON.parse(storedUserBlogs) : [];

//   // Determine what blogs to display: either the fetched ones or from localStorage
//   const presentUserBlogs = userBlogs || localStorageUserBlogs;
//   console.log(userBlogs)

  
//     axios.post("http://localhost:5000/BuildBlog", { user })
//       .then((response) => {
//         console.log(response.status);
//       })
//       .catch((error) => {
//         console.log(LoginState)
//         console.log("Internal error", error);
//       });
  

//   useEffect(() => {
//     // if (!presentUserBlogs) {
//     //     setLoading(true);
//     //     return <div>Loading blogs...</div>;
         
//                if(userBlogs){
//                     localStorage.setItem("userBlogs" , JSON.stringify(userBlogs))
//                }

//     axios.get("http://localhost:5000/api/userBlogs", {
//       headers: { user: user }
//     })
//     .then((response) => {
//       console.log(response.status);
//       setuserBlogs(response.data.blogs); // Update state with fetched blogs
//       setLoading(false); // Set loading state to false after fetch
//     })
//     .catch((error) => {
//       console.log(error.response ? error.response.status : error.message);
//       setLoading(false); // Ensure loading is stopped even after an error
//     });
//   }, [setuserBlogs, user   ]);

//   // Display loading indicator

//   // Render blogs or no-blogs message
//   return (
//     <>
//       {presentUserBlogs.length > 0 ? (
//         presentUserBlogs.map((blog, index) => (
//           <div key={index}>
//             <p>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//           </div>
//         ))
//       ) : (
//         <p>No blogs found.</p>
//       )}
//     </>
//   );
// }

// export default Blogs;


// import { useEffect, useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import axios from "axios";

// function Blogs() {
//   const { userBlogs, setuserBlogs, user, setLoading, loading, LoginState } = useContext(MyContext);
//   const [login , setLogin] = useState(false);

//   // Initialize blogs state with localStorage data (to persist across reloads)
  
//     const storedUserBlogs = localStorage.getItem("userBlogs"  );
//           const localStorageUserBlogs   =   storedUserBlogs ? JSON.parse(storedUserBlogs) : [];
                 
//           const   PresentStorageUserBlogs  =   userBlogs  ?     userBlogs    :    localStorageUserBlogs   ;      
     

                     
//             const StoredLogin = localStorage.getItem("LoginState"    ||    login);
//            const localStorageLoginState=  StoredLogin ? JSON.parse(StoredLogin) :  []  ;
//                  setLogin(localStorageLoginState);
//                   const  PresentLoginState =   LoginState ?       LoginState      :     localStorageLoginState   ; 
                             
//                         useEffect(()=>{
//                             if(LoginState){
//                                 localStorage.setItem("LoginState", JSON.stringify(LoginState));
//                               }
            
//                               if(userBlogs){
//                                    localStorage.setItem("userBlogs"   ,    JSON.stringify(userBlogs) );
//                               }
//                         }    ,  [LoginState ,  userBlogs]  );
               

        
//   // Determine what blogs to display: either the fetched ones or from localStorage
      
         
            
// //   const presentUserBlogs = userBlogs.length > 0 ? userBlogs : storedBlogs;
//   // POST request (optional, based on your logic)
//   useEffect(() => {
//     if (user) {
//       axios.post("http://localhost:5000/BuildBlog", { user })
//         .then((response) => {
//           console.log(response.status);
//         })
//         .catch((error) => {
//           console.log(LoginState);
//           console.log("Internal error", error);
//         });
//     }
//   }, [user, LoginState]);



//   // Fetch user blogs from the backend
//   useEffect(() => {    
//     if (PresentLoginState) {
//       setLoading(true); // Set loading state to true before fetching

//       axios.get("http://localhost:5000/api/userBlogs", {
//         headers: { user: user }
//       })
//       .then((response) => {
//         console.log(response.status);
//         setuserBlogs(response.data.blogs); // Update state with fetched blogs // Update local state with blogs
//         localStorage.setItem("userBlogs", JSON.stringify(response.data.blogs)); // Store blogs in localStorage
//         setLoading(false); // Set loading state to false after fetch
//       })
//       .catch((error) => {
//         console.log(error.response ? error.response.status : error.message);
//         setLoading(false); // Ensure loading is stopped even after an error
//       });
//     }
//   }, [user, setuserBlogs, setLoading]);

//       console.log(LoginState);
//       console.log(user);

//   // Show "Loading blogs..." only if there are no blogs and we're waiting for data
     
//   if (   loading   ) {
//     return <div>Loading blogs...</div>;
//   }

//   // Render blogs or no-blogs message
//   return (
//     <>
//       {       PresentStorageUserBlogs  ?
//           PresentStorageUserBlogs.map((blog, index) => (
//           <div key={index}>
//             <p>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//           </div>
//         ))
//        : <p></p>
//     } 
//     </>
//   )
// }

// export default Blogs;


// import { useEffect, useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import axios from "axios";

// function Blogs() {
//   const { userBlogs, setuserBlogs, user, setLoading, loading, LoginState } = useContext(MyContext);
  
//   // State to handle local storage retrieval
//   const [storedBlogs, setStoredBlogs] = useState(() => {
//     const storedUserBlogs = localStorage.getItem("userBlogs");
//     return storedUserBlogs ? JSON.parse(storedUserBlogs) : [];
//   });
  
//   // Fetch login state from localStorage on mount
//   const [login, setLogin] = useState(() => {
//     const storedLoginState = localStorage.getItem("LoginState");
//     return storedLoginState ? JSON.parse(storedLoginState) : false;
//   });

//   // Determine which blogs to display: fetched ones or localStorage
//   const presentUserBlogs = userBlogs.length > 0 ? userBlogs : storedBlogs;

//   // Save login state and user blogs to localStorage when they change
//   useEffect(() => {
//     if (LoginState) {
//       localStorage.setItem("LoginState", JSON.stringify(LoginState));
//     }
    
//     if (userBlogs.length > 0) {
//       localStorage.setItem("userBlogs", JSON.stringify(userBlogs));
//     }
//   }, [LoginState, userBlogs]);

//   // POST request (optional, based on your logic)
//   useEffect(() => {
//     if (user) {
//       axios.post("http://localhost:5000/BuildBlog", { user })
//         .then((response) => {
//           console.log(response.status);
//         })
//         .catch((error) => {
//           console.log(LoginState);
//           console.log("Internal error", error);
//         });
//     }
//   }, [user, LoginState]);

//   // Fetch user blogs from the backend when user is logged in
//   useEffect(() => {
//     if (login && user) {
//       setLoading(true); // Set loading state to true before fetching

//       axios.get("http://localhost:5000/api/userBlogs", {
//         headers: { user: user }
//       })
//       .then((response) => {
//         console.log(response.status);
//         setuserBlogs(response.data.blogs); // Update state with fetched blogs
//         setStoredBlogs(response.data.blogs); // Update local state with blogs
//         setLoading(false); // Set loading state to false after fetch
//       })
//       .catch((error) => {
//         console.log(error.response ? error.response.status : error.message);
//         setLoading(false); // Ensure loading is stopped even after an error
//       });
//     }
//   }, [login, user, setuserBlogs, setLoading]);

//   // Show "Loading blogs..." only if loading state is true
//   if (loading) {
//     return <div>Loading blogs...</div>;
//   }

//   // Render blogs or no-blogs message
//   return (
//     <>
//       {presentUserBlogs.length > 0 ? (
//         presentUserBlogs.map((blog, index) => (
//           <div key={index}>
//             <p>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//           </div>
//         ))
//       ) : (
//         <p>No blogs found.</p>
//       )}
//     </>
//   );
// }

// export default Blogs;



// import { useEffect, useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import axios from "axios";

// function Blogs() {
//   const { userBlogs, setuserBlogs, setLoading, loading, setLoginState   ,    user   } = useContext(MyContext);
  
//   // State to handle local storage retrieval
//   const [storedBlogs, setStoredBlogs] = useState(() => {
//     const storedUserBlogs = localStorage.getItem("userBlogs");
//     return storedUserBlogs ? JSON.parse(storedUserBlogs) : [];
//   });
  
//   // Fetch login state from localStorage on mount
//   const [login, setLogin] = useState(() => {
//     const storedLoginState = localStorage.getItem("LoginState");
//     return storedLoginState ? JSON.parse(storedLoginState) : false;
//   });

//   // Determine which blogs to display: fetched ones or localStorage
//   const presentUserBlogs = userBlogs.length  ? userBlogs : storedBlogs;

//   // Save login state and user blogs to localStorage when they change
//   useEffect(() => {
//     if (login) {
//       localStorage.setItem("LoginState", JSON.stringify(login));
//     }
    
//     if (userBlogs.length > 0) {
//       localStorage.setItem("userBlogs", JSON.stringify(userBlogs));
//     }
//   }, [login, userBlogs]);

//   // Validate session with the backend on mount
//   useEffect(() => {
//     setLoading(true); // Set loading to true during validation

//     axios.get("http://localhost:5000/validateSession", { withCredentials: true }) // Check session with backend
//       .then((response) => {
//         if (response.data.validSession) {
//           setLogin(true); // Set login state to true if session is valid
//           setLoginState(true); // Set context LoginState
//         } else {
//           setLogin(false); // Invalidate session if not valid
//           setLoginState(false);
//           setuserBlogs([]); // Clear blogs if session is invalid
//           localStorage.removeItem("userBlogs"); // Clear stored blogs
//         }
//         setLoading(false); // Stop loading after validation
//       })
//       .catch((error) => {
//         console.log("Session validation error:", error);
//         setLogin(false); // If there’s an error, assume session is invalid
//         setLoginState(false);
//         setuserBlogs([]);
//         localStorage.removeItem("userBlogs");
//         setLoading(false);
//       });
//   }, [setLoginState, setuserBlogs, setLoading]);

//   // Fetch user blogs from the backend when user is logged in
//   useEffect(() => {
//     if (login) {
//       setLoading(true); // Set loading state to true before fetching

//       axios.get("http://localhost:5000/api/userBlogs", {
//         withCredentials: true ,
//                    headers: { user: user }
//       })
//       .then((response) => {
//         console.log(response.status);
//         setuserBlogs(response.data.blogs); // Update state with fetched blogs
//         setStoredBlogs(response.data.blogs); // Update local state with blogs
//         setLoading(false); // Set loading state to false after fetch
//       })
//       .catch((error) => {
//         console.log(error.response ? error.response.status : error.message);
//         setLoading(false); // Ensure loading is stopped even after an error
//       });
//     }
//   }, [login, setuserBlogs, setLoading]);

//   // Show "Loading blogs..." only if loading state is true
//   if (loading) {
//     return <div>Loading blogs...</div>;
//   }

//   // Render blogs or no-blogs message
//   return (
//     <>
//       {presentUserBlogs.length > 0 ? (
//         presentUserBlogs.map((blog, index) => (
//           <div key={index}>
//             <p>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//           </div>
//         ))
//       ) : (
//         <p>{}</p>
//       )}
//     </>
//   );
// }

// export default Blogs;




// import { useEffect, useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import axios from "axios";
// import Login from "./Login";
// import PopularBlog from "./PopularBlog";

// function Blogs() {
//   const { userBlogs, setuserBlogs, setLoading, loading, setLoginState, user   ,setRemainingUserBlog , setTotalBlogsViews , TotalBlogsViews ,
//             TotalBlogsFollower, setTotalBlogsFollower , LoginState
//    } = useContext(MyContext);
  
//   // State to handle local storage retrieval
// //   const [storedBlogs, setStoredBlogs] = useState();
//     const storedUserBlogs = localStorage.getItem("userBlogs");
           
//         const localStorageUserBlog =   storedUserBlogs ? JSON.parse(storedUserBlogs) : userBlogs;
    
//   console.log(userBlogs)
//   console.log(localStorageUserBlog);
//     console.log(LoginState);
//     console.log("Login",Login);

//   // Fetch login state from localStorage on mount
//   const [login, setLogin] = useState(() => {
//     const storedLoginState = localStorage.getItem("LoginState");
//     return storedLoginState ? JSON.parse(storedLoginState) : false;
//   });

//   // Determine which blogs to display: fetched ones or localStorage
//   const presentUserBlogs = userBlogs.length ? userBlogs : localStorageUserBlog;
//   console.log(presentUserBlogs )
//   console.log(userBlogs);
     

//   // Save login state and user blogs to localStorage when they change
//   useEffect(() => {
//     if (login) {
//       localStorage.setItem("LoginState", JSON.stringify(login));
//     }

//     if (userBlogs.length > 0) {
//       localStorage.setItem("userBlogs", JSON.stringify(userBlogs));
//     }
//   }, [login, userBlogs]);

//   // Validate session with the backend on mount
//   useEffect(() => {
//     setLoading(true); // Set loading to true during validation

//     axios.get("http://localhost:5000/protected", { withCredentials: true }) 
//     // Check session with backend
//       .then((response) => {
//         if (response.data.validSession) {
//           setLogin(true); // Set login state to true if session is valid
//           setLoginState(true); // Set context LoginState
//         } else {
//           setLogin(false); // Invalidate session if not valid
//           setLoginState(false);
//           setuserBlogs([]); // Clear blogs if session is invalid
//           localStorage.removeItem("userBlogs"); // Clear stored blogs
//         }
//         setLoading(false); // Stop loading after validation
//       })
//       .catch((error) => {
//         console.log("Session validation error:", error);
//         setLogin(false); // If there’s an error, assume session is invalid
//         setLoginState(false);
//         setuserBlogs([]);
//         localStorage.removeItem("userBlogs");
//         setLoading(false);
//       });
//   }, [setLoginState, setuserBlogs, setLoading]);

//   // Fetch user blogs from the backend when user is logged in
//   useEffect(() => {
//     console.log(login)
//     if (login) {
//       setLoading(true); // Set loading state to true before fetching

//       axios.get("http://localhost:5000/api/userBlogs", {
//         withCredentials: true, // Ensure cookies are sent
//         headers: { user: user }
//       })
//       .then((response) => {
//         setuserBlogs(response.data.blogs); 
//         console.log(response.data);
//         const blogData = response.data.blogs;
//         // setStoredBlogs(response.data.blogs); // Update local state with blogs
//         setLoading(false); // Set loading state to false after fetch
//        console.log(response.data.totalViews );
//         setTotalBlogsViews(response.data.totalViews);
//         setTotalBlogsFollower(response.data.totalfollowers);
//         console.log(TotalBlogsViews);
//         console.log(TotalBlogsFollower);
      
//       })
//       .catch((error) => {
//         console.log(error.response ? error.response.status : error.message);
//         setLoading(false); // Ensure loading is stopped even after an error
//       });
//     }
//   }, [login, user, setuserBlogs, setLoading]);
                  
            
//                 function DeleteBlog(objectId){
//                     console.log(objectId);
//                      axios.delete(`http://localhost:5000/DeleteUserBlog/${objectId}`  ,   { headers: { user: user }  }  )
//                      .then((response)=>{
//                              console.log(response.data.RemainingBlogs)
//                              console.log(response.data.Deletedstatus);
//                              setRemainingUserBlog(response.data.RemainingBlogs);
//                      }).catch((error)=>{
//                                 console.log(error.response);
//                      })
//                 }


//   // Show "Loading blogs..." only if loading state is true
//   if (loading) {
//     return <div>Loading blogs...</div>;
//   }

//   // Render blogs or no-blogs message
//   return (
//     <>
//         {PopularBlog.length!==0?<h2>Total Blogs: {presentUserBlogs.length}</h2>:<p></p>}
//       {presentUserBlogs.length > 0 ? (
//         presentUserBlogs.map((blog, index) => (
//           <div
//             key={index} // Key should be here
//             style={{
//               height: 140,
//               width: 250,
//               backgroundColor: "pink",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             <p><strong>BlogTopic:</strong>{blog.blogType}</p>
//             <p>{blog.inputBlog}</p>
//             <p>Views: {blog.views}</p>
//             <p>Totalfollowers:{blog.follower}</p>
//             <p>Total comments:{blog.comments.length}</p>
//             <button onClick={() => DeleteBlog(blog._id)}>Delete</button>
//           </div>
//         ))
//       ) : (
//         <p>No blogs found.</p>
//       )}
//     </>
//   );
  
// }

// export default Blogs;




import { useEffect, useContext, useState } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";

function Blogs() {
  const {
    userBlogs,
    setuserBlogs,
    setLoading,
    loading,
    setLoginState,
    user,
    setRemainingUserBlog,
    setTotalBlogsViews,
    TotalBlogsViews,
    TotalBlogsFollower,
    setTotalBlogsFollower,
    LoginState,
  } = useContext(MyContext);

  const storedUserBlogs = localStorage.getItem("userBlogs");
  const localStorageUserBlog = storedUserBlogs ? JSON.parse(storedUserBlogs) : userBlogs;

  const [login, setLogin] = useState(() => {
    const storedLoginState = localStorage.getItem("LoginState");
    return storedLoginState ? JSON.parse(storedLoginState) : false;
  });

  const presentUserBlogs = userBlogs.length ? userBlogs : localStorageUserBlog;

  useEffect(() => {
    if (login) {
      localStorage.setItem("LoginState", JSON.stringify(login));
    }
    if (userBlogs.length > 0) {
      localStorage.setItem("userBlogs", JSON.stringify(userBlogs));
    }
  }, [login, userBlogs]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5002/protected", { withCredentials: true })
      .then((response) => {
        if (response.data.validSession) {
          setLogin(true);
          setLoginState(true);
        } else {
          setLogin(false);
          setLoginState(false);
          setuserBlogs([]);
          localStorage.removeItem("userBlogs");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Session validation error:", error);
        setLogin(false);
        setLoginState(false);
        setuserBlogs([]);
        localStorage.removeItem("userBlogs");
        setLoading(false);
      });
  }, [setLoginState, setuserBlogs, setLoading]);

  useEffect(() => {
    if (login) {
      setLoading(true);
      axios
        .get("http://localhost:5002/api/userBlogs", {
          withCredentials: true,
          headers: { user: user },
        })
        .then((response) => {
          setuserBlogs(response.data.blogs);
          setTotalBlogsViews(response.data.totalViews);
          setTotalBlogsFollower(response.data.totalfollowers);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response ? error.response.status : error.message);
          setLoading(false);
        });
    }
  }, [login, user, setuserBlogs, setLoading]);

  function DeleteBlog(objectId) {
    axios
      .delete(`http://localhost:5002/DeleteUserBlog/${objectId}`, { headers: { user: user } })
      .then((response) => {
        setRemainingUserBlog(response.data.RemainingBlogs);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  return (
    <div className="grid-container" style={{ marginTop: "20px" }}>
      <h2>UserTotal Blogs: {presentUserBlogs.length}</h2>
      {presentUserBlogs.length > 0 ? (
        <div className="grid-x grid-margin-x">
          {presentUserBlogs.map((blog, index) => (
            <div key={index} className="cell small-12 medium-6 large-4">
              <div className="card" style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
                <div className="card-divider">
                  <strong>Blog Topic:</strong> {blog.blogType}
                </div>
                <div className="card-section">
                <img
                  src={`http://localhost:5002/${blog.BlogImage}`}
                  alt="Blog"
                  className="thumbnail"
                  style={{ width: "100px", height: "100px", margin: "10px" }}
                />
                  <p>{blog.inputBlog}</p>
                  <p>
                    <strong>Views:</strong> {blog.views}
                  </p>
                  <p>
                    <strong>Total Followers:</strong> {blog.follower}
                  </p>
                  <p>
                    <strong>Total Comments:</strong> {blog.comments.length}
                  </p>
                  <p><strong>AverageRating:</strong>{blog.averageRating}</p>
                  <button
                    className="button alert"
                    style={{ marginTop: "10px" }}
                    onClick={() => DeleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default Blogs;





