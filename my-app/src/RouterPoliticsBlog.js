// import {useContext} from "react";
// import {MyContext} from "./MyContext";
// function RouterPoliticsBlog(){

    
//              const {ReceiveBlogObject,index} = useContext(MyContext);

//                             if( ReceiveBlogObject==="PoliticsBlog" ){
//                                         console.log(ReceiveBlogObject,"this is PoliticsBlog")
//                             } else{
//                                 console.log(ReceiveBlogObject, "this is TechBlog");
//                             }

//     return(<>

//               {ReceiveBlogObject.blogType==="PoliticsBlog"   ?    <div>
//                 <p>{ReceiveBlogObject.blogType}</p>
//                 <p>{ReceiveBlogObject.inputBlog}</p>
//               </div>     :       <p>{}</p>     }
        
       

//     </>)
// }

// export default RouterPoliticsBlog;








// import {useContext}  from "react";
// import {MyContext} from "./MyContext";
// const RouterPoliticsBlog = () => {
//     const { ReceiveBlogObject,index } = useContext(MyContext);
//     const localstorage= localStorage.getItem(ReceiveBlogObject);
//     const blogType = ReceiveBlogObject.blogType;
  
//     if (!ReceiveBlogObject || !blogType) {
//       return <div>{ReceiveBlogObject.inputBlog}</div> // or handle the undefined case appropriately
//     }
  
//     return (
//       <div>
//                 <div>{ReceiveBlogObject.inputBlog}</div>
//       </div>
//     );
//   };

   
//   export default RouterPoliticsBlog;


//   import { useContext, useEffect } from "react";
// import { MyContext } from "./MyContext";
// import { useNavigate   ,  useLocation  } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const RouterPoliticsBlog = () => {
//   const { ReceiveBlogObject, index   , countviews ,  BlogType   ,  ObjectId  ,  setObjectId  } = useContext(MyContext);
//   const Navigate = useNavigate();
//   const location = useLocation();
//   const [followerCount, setFollowerCount] = useState(null);

//   // Safely checking if ReceiveBlogObject exists and extracting blogType
//   const blogType = ReceiveBlogObject ? ReceiveBlogObject.blogType : null;
         
//   // Retrieve the blog object from localStorage (if stored as a string)
//   const storedBlogObject = localStorage.getItem('ReceiveBlogObject');
//   const storedCountviews = localStorage.getItem('countviews');

  
//   // If stored in localStorage, parse it back to an object
//   const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
//   const localStorageViews = storedCountviews ? JSON.parse(storedCountviews) : JSON.parse(storedCountviews);

//   // If ReceiveBlogObject is undefined or doesn't have blogType, fall back to localStorage
//   const currentBlog = ReceiveBlogObject || localStorageBlog;
//   const views = countviews || localStorageViews ;

//   useEffect(() => {
//     if (ReceiveBlogObject) {
//       // Store the blog object in localStorage for persistence
//       localStorage.setItem('ReceiveBlogObject', JSON.stringify(ReceiveBlogObject));
//       localStorage.setItem("countviews"  , JSON.stringify(countviews));

//     }
//     if (countviews) {
//           localStorage.setItem("countviews"  , JSON.stringify(countviews));

//     }
//   }, [ReceiveBlogObject , countviews]);
//          function GoBack(){
//           if (location.state && location.state.from) {
//             Navigate(location.state.from); // Go back to the previous page
//           }
//           // window.location.href  =  `RouterPoliticsBlog/:${ObjectId}`
//          }
//          function Blog (){
//           window.location.href = "/";
//          }
//             const SubmitFollower = async (currentBlog) => {
//               try {
//                 // Make the POST request to increment followers
//                 const response = await axios.post(
//                   `http://localhost:3005/incrementfollower/${currentBlog.blogId}`, // Adjust the URL as needed
//                   { user: currentBlog.blogId } // Sending the user ID in the request body
//                 );
          
//                 // Extract the updated follower count and message
//                 const { follower, message } = response.data;
          
//                 // Update the state
//                 setFollowerCount(follower);
//                 setMessage(message);
//               } catch (error) {
//                 console.error("Error incrementing follower:", error);
//                 setMessage(error.response?.data?.message || "An error occurred");
//               }
//             };
    
//   return (<>
//     <div    style={{marginTop:100}}    >
//       <p>{currentBlog.blogType}</p>
//       <img src={`http://localhost:5000/${currentBlog.BlogImage}`} alt="BlogImage" style={{height:100 , width:100}}/>
//       <div>{currentBlog.inputBlog}</div>
//       <div>{BlogType}</div>

//       {(currentBlog.blogType==="PoliticsBlog"  && <p>{views} </p>) }

//     </div>

//     <button onClick={Blog } style={{ marginTop: "20px" }}>
//            Blog   
//       </button>

//       <br></br>
//       <br></br>
     
//       <button onClick={GoBack}>
//         GoBack
//       </button>
//       <br></br>
//       <br></br>
//       <button onClick={SubmitFollower()}>Follow This Blog</button>
//       </>
//   );
// };

// export default RouterPoliticsBlog;









// import { useContext, useEffect } from "react";
// import { MyContext } from "./MyContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const RouterPoliticsBlog = () => {
//   const { ReceiveBlogObject, index, countviews, BlogType, ObjectId, setObjectId , user , setFollowerCount , followerCount
//        ,  CurrentBlogFollower ,setCurrentBlogFollower , FindData } = useContext(MyContext);
//   const Navigate = useNavigate();
//   const location = useLocation();
   
  
//   const [message, setMessage] = useState("");
//   console.log(user);
//   console.log(FindData);

//   const blogType = ReceiveBlogObject ? ReceiveBlogObject.blogType : null;

//   const storedBlogObject = localStorage.getItem("ReceiveBlogObject");
//   const storedCountviews = localStorage.getItem("countviews");

//   const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
//   const localStorageViews = storedCountviews ? JSON.parse(storedCountviews) : null;

//   const currentBlog = ReceiveBlogObject || localStorageBlog;
//         console.log(currentBlog)
//         setCurrentBlogFollower(currentBlog.follower);

//   const views = countviews || localStorageViews;

//   useEffect(() => {
//     if (ReceiveBlogObject) {
//       localStorage.setItem("ReceiveBlogObject", JSON.stringify(ReceiveBlogObject));
//     }
//     if (countviews) {
//       localStorage.setItem("countviews", JSON.stringify(countviews));
//     }
//   }, [ReceiveBlogObject, countviews]);

//   const GoBack = () => {
//     if (location.state && location.state.from) {
//       Navigate(location.state.from);
//     }
//   };

//   const Blog = () => {
//     window.location.href = "/";
//   };

//   function SubmitFollower(currentBlog) {
//     console.log("Current Blog:", currentBlog);
//     console.log("User:", user); // Check if user is a string
  
//     // Ensure 'user' is not empty or undefined
//     if (!user) {
//       console.error("Error: User is not defined or empty");
//       return;
//     }
  
//     axios.post(`http://localhost:5000/incrementfollower/${currentBlog._id}`, {
//       user,
//     })
//       .then((response) => {
//         console.log("Follower count:", response.data.follower);
//         setFollowerCount(response.data.follower);
        
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.error("Backend Error:", error.response.data);
//         } else {
//           console.error("Request Error:", error.message);
//         }
//       });
//   }
  

//   return (
//     <>
//       <div style={{ marginTop: 100 }}>
//         <p>{currentBlog.blogType}</p>
//         <img
//           src={`http://localhost:5000/${currentBlog.BlogImage}`}
//           alt="BlogImage"
//           style={{ height: 100, width: 100 }}
//         />
//         <div>{currentBlog.inputBlog}</div>
//         <div>{BlogType}</div>
//         {currentBlog.blogType === "PoliticsBlog" && <p>{views}</p>}
//       </div>

//       <button onClick={Blog} style={{ marginTop: "20px" }}>
//         Blog
//       </button>

//       <br />
//       <br />

//       <button onClick={GoBack}>Go Back</button>

//       <br />
//       <br />

//       <button onClick={() => SubmitFollower(currentBlog)}>Follow This Blog</button>

    
//     </>
//   );
// };

// export default RouterPoliticsBlog;





// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "./MyContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const RouterPoliticsBlog = () => {
//   const { ReceiveBlogObject, countviews, BlogType, user, setFollowerCount, setCurrentBlogFollower } = useContext(MyContext);
//   const Navigate = useNavigate();
//   const location = useLocation();

//   const [comments, setComments] = useState([]); // State for all comments
//   const [newComment, setNewComment] = useState(""); // State for new comment text
//   const [message, setMessage] = useState(""); // Message for feedback

//   const storedBlogObject = localStorage.getItem("ReceiveBlogObject");
//   const storedCountviews = localStorage.getItem("countviews");

//   const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
//   const localStorageViews = storedCountviews ? JSON.parse(storedCountviews) : null;

//   const currentBlog = ReceiveBlogObject || localStorageBlog;
//   const views = countviews || localStorageViews;

//   useEffect(() => {
//     if (ReceiveBlogObject) {
//       localStorage.setItem("ReceiveBlogObject", JSON.stringify(ReceiveBlogObject));
//     }
//     if (countviews) {
//       localStorage.setItem("countviews", JSON.stringify(countviews));
//     }

//     // Fetch comments for the blog
//     if (currentBlog) {
//       axios
//         .get(`http://localhost:5000/${currentBlog._id}/comments`)
//         .then((response) => {
//           setComments(response.data.comments);
//         })
//         .catch((error) => {
//           console.error("Error fetching comments:", error);
//         });
//     }
//   }, [ReceiveBlogObject, countviews, currentBlog]);

//   const GoBack = () => {
//     if (location.state && location.state.from) {
//       Navigate(location.state.from);
//     }
//   };

//   const Blog = () => {
//     window.location.href = "/";
//   };

//   const SubmitFollower = (currentBlog) => {
//     if (!user) {
//       console.error("Error: User is not defined or empty");
//       return;
//     }

//     axios
//       .post(`http://localhost:5000/incrementfollower/${currentBlog._id}`, { user })
//       .then((response) => {
//         setFollowerCount(response.data.follower);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.error("Backend Error:", error.response.data);
//         } else {
//           console.error("Request Error:", error.message);
//         }
//       });
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();

//     if (!newComment) {
//       setMessage("Comment cannot be empty.");
//       return;
//     }

//     axios
//       .post(`http://localhost:5000/${currentBlog._id}/comments`, { content: newComment, author: user , BlogType :BlogType ,
//             inputBlog:currentBlog.inputBlog  , currentBlogImage:currentBlog.BlogImage})
//       .then((response) => {
//         setComments((prevComments) => [...prevComments, response.data.comment]); // Append new comment
//         setNewComment(""); // Clear input field
//         setMessage("Comment added successfully.");
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//         setMessage("Failed to add comment.");
//       });
//   };

//   return (
//     <>
//       <div style={{ marginTop: 100 }}>
//         <p>{currentBlog.blogType}</p>
//         <img
//           src={`http://localhost:5000/${currentBlog.BlogImage}`}
//           alt="BlogImage"
//           style={{ height: 100, width: 100 }}
//         />
//         <div>{currentBlog.inputBlog}</div>
//         <div>{BlogType}</div>
//         {currentBlog.blogType === "PoliticsBlog" && <p>{views}</p>}
//       </div>

//       <button onClick={Blog} style={{ marginTop: "20px" }}>
//         Blog
//       </button>

//       <br />
//       <br />

//       <button onClick={GoBack}>Go Back</button>

//       <br />
//       <br />

//       <button onClick={() => SubmitFollower(currentBlog)}>Follow This Blog</button>

//       <div style={{ marginTop: 40 }}>
//         <h3>Comments</h3>
//         {comments.length === 0 ? (
//           <p>No comments yet. Be the first to comment!</p>
//         ) : (
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment._id}>
//                 <strong>{comment.author}</strong>: {comment.content}
//               </li>
//             ))}
//           </ul>
//         )}

//         <form onSubmit={handleCommentSubmit} style={{ marginTop: 20 }}>
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Write your comment here..."
//             rows="4"
//             style={{ width: "100%" }}
//           ></textarea>
//           <button type="submit" style={{ marginTop: 10 }}>
//             Submit Comment
//           </button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </>
//   );
// };

// export default RouterPoliticsBlog;



import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import BlogsRating from "./BlogsRating";

const RouterPoliticsBlog = () => {
  const {
    ReceiveBlogObject,
    countviews,
    BlogType,
    user,
    setFollowerCount,
    setCurrentBlogFollower
  } = useContext(MyContext);

  const Navigate = useNavigate();
  const location = useLocation();

  const [comments, setComments] = useState([]); // State for all comments
  const [newComment, setNewComment] = useState(""); // State for new comment text
  const [message, setMessage] = useState(""); // Message for feedback
  const [commentArray,setCommentArray] =useState([])
   const [seeComments,setseeComments] = useState(false);

  const storedBlogObject = localStorage.getItem("ReceiveBlogObject");
  const storedCountviews = localStorage.getItem("countviews");

  const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
  const localStorageViews = storedCountviews ? JSON.parse(storedCountviews) : null;

  const currentBlog = ReceiveBlogObject || localStorageBlog;
  const views = countviews || localStorageViews;

  useEffect(() => {
    if (currentBlog) {
      localStorage.setItem("ReceiveBlogObject", JSON.stringify(currentBlog));
    }
    if (countviews) {
      localStorage.setItem("countviews", JSON.stringify(countviews));
    }

    // Fetch comments for the blog
    if (currentBlog) {
      axios
        .get(`http://localhost:5002/${currentBlog._id}/comments`)
        .then((response) => {
          setComments(response.data.comments);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [currentBlog, countviews]);

  const GoBack = () => {
    if (location.state && location.state.from) {
      Navigate(location.state.from);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      setMessage("Comment cannot be empty.");
      return;
    }

    const commentData = {
      content: newComment,
      author: user,  // Assuming 'user' is the logged-in user name or ID
      BlogType,
      inputBlog: currentBlog.inputBlog,
      currentBlogImage: currentBlog.BlogImage,
    };

    axios
      .post(`http://localhost:5002/${currentBlog._id}/comments`, commentData)
      .then((response) => {
        setComments((prevComments) => [...prevComments, response.data.comment]); // Append new comment
        setNewComment(""); // Clear input field
        setMessage("Comment added successfully.");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        setMessage("Failed to add comment.");
      });
  };
  useEffect(() => {
    // Fetch total comments count for the blog
    const fetchCommentsCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5002/blog/${currentBlog._id}/comments/count`
        );
        setComments(response.data.totalCurrentBlogsComments); // Update state with total comments
        console.log(response.data.totalCurrentBlogsComments);
        console.log(response.data.blogComments);
        setCommentArray(response.data.blogComments.comments);
        console.log(response.data.blogComments.comments);
      } catch (error) {
        console.error("Error fetching total comments count:", error);
      }
    };

    fetchCommentsCount();
  }, [currentBlog._id]);

  const SubmitFollower = () => {
    if (!user) {
      console.error("Error: User is not defined or empty");
      return;
    }
    axios
      .post(`http://localhost:5002/incrementfollower/${currentBlog._id}`, { user })
      .then((response) => {
        setFollowerCount(response.data.follower);
      })
      .catch((error) => {
        console.error("Backend Error:", error.response ? error.response.data : error.message);
      });
  };

  function seeCommentsBlog(){
    setseeComments(true);
}

  return (
    <>
      <div style={{ marginTop: 100 }}>
        <p>{currentBlog.blogType}</p>
        <img
          src={`http://localhost:5002/${currentBlog.BlogImage}`}
          alt="BlogImage"
          style={{ height: 100, width: 100 }}
        />
        <div>{currentBlog.inputBlog}</div>
        <div>{BlogType}</div>
        {currentBlog.blogType === "PoliticsBlog" && <p>{views}</p>}
      </div>

      <button onClick={() => Navigate("/")} style={{ marginTop: "20px" }}>
        Blog
      </button>
      <br />
      <br />
      <button onClick={GoBack}>Go Back</button>
      <br />
      <br />
      <button onClick={SubmitFollower}>Follow This Blog</button>

      <div style={{ marginTop: 40 }}>
        <p>{commentArray.length}Comments</p>
        <button onClick={seeCommentsBlog}>seeComments</button>
        {commentArray.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          seeComments?
          <ul>
            {commentArray.map((comment) => (
              <li key={comment._id}>
                <strong>{comment.author}</strong>: {comment.content}
              </li>
            ))}
          </ul>:<p></p>
        )}
          <BlogsRating  blogId={currentBlog._id}  user ={user}/>
          

        <form onSubmit={handleCommentSubmit} style={{ marginTop: 20 }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            rows="4"
            style={{ width: "100%" }}
          ></textarea>
          <button type="submit" style={{ marginTop: 10 }}>
            Submit Comment
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default RouterPoliticsBlog;

