// import React, { useContext, useEffect , useState} from 'react';
// import { MyContext } from './MyContext'; // Import the context
// import axios from 'axios';

// function ProfileData() {
//   const {
//     TotalBlogsViews,
//     setTotalBlogsViews,
//     TotalBlogsFollower,
//     setTotalBlogsFollower,
//     user,
//     setUser, // Add setUser from context
//     LoginState , setLoginState ,
//     userBlogs , setuserBlogs,
//     ReceiveBlogObject,
//   } = useContext(MyContext);
//               console.log(LoginState);
                
//               const [totalComments, setTotalComments] = useState(0); // State to hold total comments count
//               const [error, setError] = useState(null);
//           const [    UserTotalAverageRating,setUserTotalAverageRating ] =useState(0);
//               const storedBlogObject = localStorage.getItem("ReceiveBlogObject");
//               const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
//               const currentBlog = ReceiveBlogObject || localStorageBlog;
//               useEffect(() => {
//                 if (currentBlog) {
//                   localStorage.setItem("ReceiveBlogObject", JSON.stringify(currentBlog));
//                 }
//               })
//   // Persist user in localStorage when it changes
//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     }
//   }, [user]);
//     console.log(LoginState);
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
  
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//       } catch (error) {
//         console.error("Error parsing user from localStorage:", error);
//         // Clear invalid user data from localStorage
//         localStorage.removeItem("user");
//       }
//     }
//   }, [setUser]);

//       const [login, setLogin] = useState(() => {
//     const storedLoginState = localStorage.getItem("LoginState");
//     return storedLoginState ? JSON.parse(storedLoginState) : false;
//   });
//   useEffect(() => {
//     if (login) {
//       localStorage.setItem("LoginState", JSON.stringify(login));
//     }
//   }, [login]);
//   useEffect(() => {
//     // Set loading to true during validation

//     axios.get("http://localhost:5000/protected", { withCredentials: true }) 
//       .then((response) => {
//         if (response.data.validSession) {
//           setLogin(true); 
//           setLoginState(true); 
//         } else {
//           setLogin(false); 
//           setLoginState(false);
//           setuserBlogs([]); // Clear blogs if session is invalid
//           localStorage.removeItem("userBlogs");
          
//         }
//       })
//       .catch((error) => {
//         console.log("Session validation error:", error);
//         setLogin(false); 
//         setLoginState(false);
//         setuserBlogs([]);
//         localStorage.removeItem("userBlogs");
//       });
//   }, [setLoginState]);

//   useEffect(() => {
//     if (user) {
//       axios
//         .get("http://localhost:5000/api/userBlogs", {
//           withCredentials: true, // Ensure cookies are sent
//           headers: { user: user },
//         })
//         .then((response) => {
//               console.log(response.data.blogs);
//             setuserBlogs(response.data.blogs); 
//           const fetchedTotalViews = response.data.totalViews;
//           const fetchedTotalFollowers = response.data.totalfollowers;
//           const fetchedTotalComments= response.data.totalcomments;
//            const TotalaverageRatings= response.data.blogs.averageRating;
//               setUserTotalAverageRating(TotalaverageRatings);
//                localStorage.setItem("TotalaverageRatings", JSON.stringify(TotalaverageRatings));

//           // Update state and localStorage
//           setTotalBlogsViews(fetchedTotalViews);
//           localStorage.setItem("TotalBlogsViews", JSON.stringify(fetchedTotalViews));

//           setTotalBlogsFollower(fetchedTotalFollowers);
//           localStorage.setItem("TotalBlogsFollower", JSON.stringify(fetchedTotalFollowers));
//           setTotalComments(fetchedTotalComments);
//         })
//         .catch((error) => {
//           console.log(error.response ? error.response.status : error.message);
//         });
//     }
//   }, [setTotalBlogsViews, setTotalBlogsFollower, user ,setuserBlogs]);

//   // Load data from localStorage on component mount
//   useEffect(() => {
//     const storedTotalViews = localStorage.getItem("TotalBlogsViews");
//     const storedTotalFollowers = localStorage.getItem("TotalBlogsFollower");

//     if (storedTotalViews) {
//       setTotalBlogsViews(JSON.parse(storedTotalViews));
//     }
//     if (storedTotalFollowers) {
//       setTotalBlogsFollower(JSON.parse(storedTotalFollowers));
//     }
//   }, [setTotalBlogsViews, setTotalBlogsFollower]);

//      console.log(userBlogs);

  
//   return (
       
//     <div>{LoginState?
//       <div><h1> Total Blogs:{userBlogs.length}</h1>
//         <h1>Total Blog Views: {TotalBlogsViews}</h1>
//       <p>Total Blog Followers: {TotalBlogsFollower}</p>
//       <br></br>
//       <h3>Total Comments:{totalComments}</h3>
//       </div>:<p> please login To see profile data</p>}
//       <div>
     
//       {error ? (
//         <p style={{ color: "red" }}>{error}</p> // Display error if any
//       ) : (
//         <p>{userBlogs.comments}</p> // Display total comments count
//       )}
//     </div>
//     </div>
//   );
// }

// export default ProfileData;
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './MyContext'; // Import the context
import axios from 'axios';

function ProfileData() {
  const {
    TotalBlogsViews,
    setTotalBlogsViews,
    TotalBlogsFollower,
    setTotalBlogsFollower,
    user,
    setUser, // Add setUser from context
    LoginState, setLoginState,
    userBlogs, setuserBlogs,
    ReceiveBlogObject,
  } = useContext(MyContext);

  const [totalComments, setTotalComments] = useState(0); // State to hold total comments count
  const [error, setError] = useState(null);
  const [UserTotalAverageRating, setUserTotalAverageRating] = useState(0);
  
  const storedBlogObject = localStorage.getItem("ReceiveBlogObject");
  const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
  const currentBlog = ReceiveBlogObject || localStorageBlog;

  useEffect(() => {
    if (currentBlog) {
      localStorage.setItem("ReceiveBlogObject", JSON.stringify(currentBlog));
    }
  }, [currentBlog]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, [setUser]);

  const [login, setLogin] = useState(() => {
    const storedLoginState = localStorage.getItem("LoginState");
    return storedLoginState ? JSON.parse(storedLoginState) : false;
  });

  useEffect(() => {
    if (login) {
      localStorage.setItem("LoginState", JSON.stringify(login));
    }
  }, [login]);

  useEffect(() => {
    axios.get("http://localhost:5002/protected", { withCredentials: true })
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
      })
      .catch((error) => {
        console.log("Session validation error:", error);
        setLogin(false); 
        setLoginState(false);
        setuserBlogs([]);
        localStorage.removeItem("userBlogs");
      });
  }, [setLoginState]);

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:5002/api/userBlogs", {
          withCredentials: true,
          headers: { user: user },
        })
        .then((response) => {
          setuserBlogs(response.data.blogs); 
          const fetchedTotalViews = response.data.totalViews;
          const fetchedTotalFollowers = response.data.totalfollowers;
          const fetchedTotalComments = response.data.totalcomments;
          const TotalaverageRatings = response.data.blogs.averageRating;

          setUserTotalAverageRating(TotalaverageRatings);
          localStorage.setItem("TotalaverageRatings", JSON.stringify(TotalaverageRatings));

          setTotalBlogsViews(fetchedTotalViews);
          localStorage.setItem("TotalBlogsViews", JSON.stringify(fetchedTotalViews));

          setTotalBlogsFollower(fetchedTotalFollowers);
          localStorage.setItem("TotalBlogsFollower", JSON.stringify(fetchedTotalFollowers));

          setTotalComments(fetchedTotalComments);
        })
        .catch((error) => {
          console.log(error.response ? error.response.status : error.message);
        });
    }
  }, [setTotalBlogsViews, setTotalBlogsFollower, user, setuserBlogs]);

  useEffect(() => {
    const storedTotalViews = localStorage.getItem("TotalBlogsViews");
    const storedTotalFollowers = localStorage.getItem("TotalBlogsFollower");

    if (storedTotalViews) {
      setTotalBlogsViews(JSON.parse(storedTotalViews));
    }
    if (storedTotalFollowers) {
      setTotalBlogsFollower(JSON.parse(storedTotalFollowers));
    }
  }, [setTotalBlogsViews, setTotalBlogsFollower]);

  return (
    <div className="grid-container">
      {LoginState ? (
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <h1>Total Blogs: {userBlogs.length}</h1>
            <h1>Total Blog Views: {TotalBlogsViews}</h1>
            <p>Total Blog Followers: {TotalBlogsFollower}</p>
            <br />
            <h3>Total Comments: {totalComments}</h3>
          </div>
        </div>
      ) : (
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <p>Please login to see profile data</p>
          </div>
        </div>
      )}

      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-6">
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            <p>{userBlogs.comments}</p> // Display total comments count
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileData;

