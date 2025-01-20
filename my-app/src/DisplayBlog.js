// // import {MyContext} from "./MyContext";
// // import {useContext} from "react";
// // import axios from "axios";
// // import {useEffect}  from "react";
// // import {useState} from "react";


// // // DisplayBlog component to display the blog type and the content
// // function DisplayBlog() {
// //   // const { Blog ,setBlog} = useContext(MyContext);
// //             const {FindData,setFindData} =useContext(MyContext);
// //             const [nextBlog,setnextBlog] =useState(false);
// //             const [DataVolume,setDataVolume] = useState(false);
// //             // console.log(FindData)

// //   // useEffect(()=>{
// //   //      axios.get("http://localhost:5000/api/BuildBlog")
// //   //      .then(response=>{
// //   //              console.log(response.data.data);
// //   //         setFindData(response.data.data)

// //   //        }).catch(error=>{
// //   //                   console.log("Internal error to found the data",error);
// //   //        })
// //   //      },[]);


// //     const Boxheight= document.getElementById("Boxheight").offsetHeight;

// //     if(Boxheight>=570){
// //       setDataVolume(true);
// //     }

// //          function Submitnext(){
// //               setnextBlog(true);
// //          }                          

// //   return (
// //    <div      id="Boxheight "     style={{height:"auto" , width:700 , border: " 1px solid black" }} >
// //       {FindData.map((object, index) => (
// //         <div key={index}>
// //           <p>{object.blogType}</p> 
// //           <p>{object.inputBlog}</p>   
// //           {DataVolume  ? {nextBlog?<div>
// //             <p>{object.blogType}</p>
// //             <p>{object.inputBlog}</p>
// //           </div>:<div>{}</div>}:<p></p>}
// //         </div>
// //       ))}
// //       <button  onClick={Submitnext}  >Submitnext</button>
// //      </div>
// //   );
// // }

// // export default DisplayBlog;

// // import { MyContext } from "./MyContext";
// // import { useContext, useState, useEffect } from "react";

// // // DisplayBlog component to display the blog type and the content
// // function DisplayBlog() {
// //   const { FindData, setFindData } = useContext(MyContext);
// //   const [nextBlog, setNextBlog] = useState(false);
// //   const [DataVolume, setDataVolume] = useState(false);

// //   console.log("useState",DataVolume)

// //   // Measure the height of the container and set DataVolume
// //   useEffect(() => {
// //     const boxElement = document.getElementById("Boxheight");
// //     if (boxElement) {
// //       const boxHeight = boxElement.offsetHeight;
// //       if (boxHeight >= 400) {
// //         console.log("box")
// //         setDataVolume(true);
// //         console.log(DataVolume);
// //       }
// //     }
// //   }, [FindData]); // Only runs when FindData changes (after data is fetched)

// //   function SubmitNext() {
// //     setNextBlog(true);
// //   }

// //   return (
// //     <div id="Boxheight" style={{ height: "auto", width: 700, border: "1px solid black" }}>
// //       {FindData.map((object, index) => (
// //         <div key={index}>

// //           {DataVolume && nextBlog?
// //               <div>
// //                 <p>{object.blogType}</p>
// //                 <p>{object.inputBlog}</p>
// //               </div>:
// //             <div>
// //               <p>{object.blogType}</p>
// //               <p>{object.inputBlog}</p>
// //             </div>
// //           }
// //         </div>
// //       ))}
// //       <button onClick={SubmitNext}>Submit Next</button>
// //     </div>
// //   );
// // }

// // export default DisplayBlog;


// // import { MyContext } from "./MyContext";
// // import { useContext, useState, useEffect } from "react";

// // // DisplayBlog component to display the blog type and the content
// // function DisplayBlog() {
// //   const { FindData } = useContext(MyContext); // Context data
// //   const [nextBlog, setNextBlog] = useState(false); // Tracks if the button was clicked
// //   const [showInitialBlogs, setShowInitialBlogs] = useState(true); // To control initial blog display
// //   const [showRemainingBlogs, setShowRemainingBlogs] = useState(false); // To control remaining blog display
// //   const blogLimit = 400; // Height limit to determine when to hide/show blogs

// //   // Measure the height of the container and set states accordingly
// //   useEffect(() => {
// //     const boxElement = document.getElementById("Boxheight");
// //     if (boxElement) {
// //       const boxHeight = boxElement.offsetHeight;
// //       // If box height exceeds the limit, only show initial set of blogs
// //       if (boxHeight >= blogLimit) {
// //         setShowInitialBlogs(true); // Show initial set of blogs
// //         setShowRemainingBlogs(false); // Hide remaining blogs until "Next" is clicked
// //       } else {
// //         setShowRemainingBlogs(true); // Show all blogs if box height is less than limit
// //       }
// //     }
// //   }, [FindData]); // Runs when FindData changes

// //   function SubmitNext() {
// //     setNextBlog(true); // Show remaining blogs when "Next" is clicked
// //     setShowRemainingBlogs(true); // Toggle display of remaining blogs
// //   }

// //   return (
// //     <div id="Boxheight" style={{ height: "auto", width: 700, border: "1px solid black" }}>
// //       {/* Display blogs conditionally */}
// //       {FindData.map((object, index) => (
// //         <div key={index}>
// //           {showInitialBlogs && index < blogLimit / 100 && ( // Display initial blogs up to the limit
// //             <div>
// //               <p><strong>Blog Type:</strong> {object.blogType}</p>
// //               <p><strong>Blog Content:</strong> {object.inputBlog}</p>
// //             </div>
// //           )}

// //           {nextBlog && showRemainingBlogs && index >= blogLimit / 100 && ( // Display remaining blogs after "Next" click
// //             <div>
// //               <p><strong>Blog Type:</strong> {object.blogType}</p>
// //               <p><strong>Blog Content:</strong> {object.inputBlog}</p>
// //             </div>
// //           )}
// //         </div>
// //       ))}

// //       {/* Show "Next" button to reveal more blogs */}
// //       {!nextBlog && showInitialBlogs && (
// //         <button onClick={SubmitNext} style={{ marginTop: "10px" }}>
// //           Submit Next
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// // export default DisplayBlog;


// import { MyContext } from "./MyContext";
// import { useContext, useState, useEffect } from "react";
// import { useNavigate  ,    useLocation  , Link    } from "react-router-dom";
// import axios from "axios";
// import { findDOMNode } from "react-dom";


// // DisplayBlog component to display the blog type and the content
// function DisplayBlog() {
//   const { FindData } = useContext(MyContext); // Context data
//   console.log(FindData)
//   const blogsPerPage = 2; // Number of blogs to show per page
//  // Current page index
//   const [TechBlog, setTechBlog] = useState(false);
//   const Navigate = useNavigate();
//   const location = useLocation();
//   const [BlogObject, setBlogObject] = useState();
//   const { setReceiveBlogObject  ,ReceiveBlogObject , setIndex, countviews, setCountviews, BlogType, setBlogType, currentPage, setCurrentPage,  user, setUser
//                , LoginState  , setLoginState   ,       ObjectId   ,   setObjectId  , averageRating
//     } = useContext(MyContext);
//   // Calculate the starting and ending index for blogs to be shown
//   const startIndex = currentPage * blogsPerPage;
//   const endIndex = startIndex + blogsPerPage;
//   console.log(user);
//   console.log(FindData)
//     // const StorageUser =localStorage.getItem(user);
//     useEffect(() => {
//       const savedUser = localStorage.getItem('user');
//       if (savedUser) {
//         setUser(savedUser);
//       }
//     }, [setUser]);
           
//   // console.log(FindData.inputBlog);

//   // Function to handle showing the next set of blogs
//   function SubmitNext() {
//     // If there is more data to show, increment the page number
//     if (endIndex < FindData.length) {
//       console.log(FindData.length)
//       // Navigate(`/${FindData.length}`) 
//       setCurrentPage((prevPage) => prevPage + 1);
//    ;

//     }
//   }

//   // Function to handle showing the previous set of blogs
//   function SubmitPrevious() {
//     // Prevent going below the first page
//     if (currentPage > 0) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   }

//   function ReadMore(receive, index) {
//           if(!LoginState){
//               return  Navigate("/Login")
//           }
//     setReceiveBlogObject(receive);
//     setIndex(index);

//     // Debugging log to check the blog ID and user ID
//     console.log("Blog ID being sent to backend:", receive._id);
//     console.log(receive)    
//     console.log("User ID:", user );
//      setObjectId(receive._id);

//     if (receive._id && user) {
//       // Increment views before navigating
//       axios.post(`http://localhost:5000/incrementViews/${receive._id}`, {
//         user: user // Pass the user ID to the backend
//       })
//         .then(response => {
//           console.log("Views checked:", response.data.views);
//           setCountviews(response.data.views);
//           localStorage.setItem("countviews", JSON.stringify(response.data.views));
//           console.log(response.data.blogId);
//           console.log(response.data.user);
//         })
//         .catch(error => {
//           console.error("Error checking views:", error);
//         });
//     } else {
//       console.error("Error: Blog ID or User ID is missing");
//     }

//     // Navigate based on blog type
//     if (receive.blogType === "PoliticsBlog") {
//       // Navigate(`/RouterPoliticsBlog/${receive._id} `, { state: { from: location.pathname } });
//       Navigate(`/RouterPoliticsBlog/:${receive._id} `   , { state: { from: location.pathname } }    );
//     } else {
//       Navigate("/RouterTechBlog", { state: { from: location.pathname } });
//     }
//   } 
  
//     // const fullStars = Math.floor(); // Number of full stars
//     // const halfStar = averageRating % 1 >= 0.5; // Check if there's a half star
//     // const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

// return ( <div>
//     <div id="Boxheight" style={{ height: 1000, width: 751, border: "1px solid black", marginTop: 100, marginLeft: 0, borderRadius: 5 
//          , textAlign:"center" , background:"pink"  ,    paddingTop:14
//     }}>
//       {/* Display blogs in the range of startIndex to endIndex */}
//       {FindData.slice(startIndex, endIndex).map((object, index) => (
//         <div key={index} >
            
//           <p><strong>Blog Type:</strong> {object.blogType}</p>
//           <p>{object.BlogImage}</p>
//             <img
//             src={`http://localhost:5000/${object.BlogImage}`}
//             alt="Blog"
//             style={{ height: 70, width: 70 }}
//             />
//           <p  style={{paddingTop:5  }}><strong>Blog Content:</strong> {object.inputBlog.slice(0, 100)}</p>
              
//           <p style={{fontSize:12  ,  marginLeft: 500  }}> {object.views}</p>
//           <p     style={{fontSize:12  ,  marginLeft: 500  }}>{object.follower}</p>
//             <p style={{fontSize:12 , marginLeft:500}}>
//               {object.averageRating}</p>
//                 <br></br>
               

    
//       <div style={{ display: "flex", gap: "5px",  marginLeft:570 }}>
//         {Array(Math.floor(object.averageRating))
//           .fill()
//           .map((_, index) => (
//             <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>★</span>
//           ))}
//         {object.averageRating % 1 >= 0.5 && <span style={{ color: "green", fontSize: "20px" }}>☆</span>}
//         {Array(5 - Math.floor(object.averageRating) - (object.averageRating % 1 >= 0.5  ? 1 : 0))
//           .fill()
//           .map((_, index) => (
//             <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>★</span>
//           ))}
//       </div>
//           <br></br>
  
//           <button onClick={() => ReadMore(object, index)}   style={{marginBottom:50}} >Readmore</button>
//           <div  style={{height:14     ,   width:750  , backgroundColor:"white" ,   marginTop:14   }}    ></div>
                  
//         </div>
//       ))}

//       {/* Buttons to navigate between blog sets */}
//       <div style={{ marginTop: "10px" }}>
//         {currentPage > 0 && (
//           <button onClick={SubmitPrevious} style={{ marginRight: 20 }}>
//             Previous
//           </button>
//         )}
//         {endIndex < FindData.length && (
//           <button onClick={SubmitNext}  style={{marginBottom:20}}   >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }
// export default DisplayBlog;



import { MyContext } from "./MyContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

function DisplayBlog() {
  const { FindData } = useContext(MyContext);
  const blogsPerPage = 5; // Display 5 blogs per page
  const [TechBlog, setTechBlog] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();
  const [BlogObject, setBlogObject] = useState();
  const { setReceiveBlogObject, ReceiveBlogObject, setIndex, countviews, setCountviews, BlogType, setBlogType, currentPage, setCurrentPage, user, setUser, LoginState, setLoginState, ObjectId, setObjectId, averageRating } = useContext(MyContext);
  
  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, [setUser]);

  // Function to handle showing the next set of blogs
  function SubmitNext() {
    if (endIndex < FindData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  // Function to handle showing the previous set of blogs
  function SubmitPrevious() {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  function ReadMore(receive, index) {
      console.log(LoginState);
    if (!LoginState) {
      return Navigate("/Login");
    }
    setReceiveBlogObject(receive);
    setIndex(index);
    setObjectId(receive._id);

    if (receive._id && user) {
      axios.post(`http://localhost:5002/incrementViews/${receive._id}`, {
        user: user
      })
        .then(response => {
          setCountviews(response.data.views);
          localStorage.setItem("countviews", JSON.stringify(response.data.views));
        })
        .catch(error => {
          console.error("Error checking views:", error);
        });
    }

    if (receive.blogType === "PoliticsBlog") {
      Navigate(`/RouterPoliticsBlog/:${receive._id}`, { state: { from: location.pathname } });
    } else {
      Navigate("/RouterTechBlog", { state: { from: location.pathname } });
    }
  }

  return (
    <div className="grid-container" style={{ marginTop: "50px" }}>
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-8 large-8">
          <div className="callout" style={{ backgroundColor: "#f4f4f4", borderRadius: "5px", padding: "20px" }}>
            {FindData.slice(startIndex, endIndex).map((object, index) => (
              <div key={index} className="blog-item" style={{marginTop:17}}>
                <p><strong>Blog Type:</strong> {object.blogType}</p>
                <img
                  src={`http://localhost:5002/${object.BlogImage}`}
                  alt="Blog"
                  className="thumbnail"
                  style={{ width: "100px", height: "100px", margin: "10px" }}
                />
                <p><strong>Blog Content:</strong> {object.inputBlog.slice(0, 100)}</p>
                <div style={{ fontSize: "12px", color: "gray", textAlign: "right" }}>
                  <p>{object.views} Views</p>
                  <p>{object.follower} Followers</p>
                  <p>{object.averageRating} Rating</p>
                </div>
                <div style={{ display: "flex", gap: "5px", marginLeft: "570px" }}>
                  {Array(Math.floor(object.averageRating)).fill().map((_, index) => (
                    <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>★</span>
                  ))}
                  {object.averageRating % 1 >= 0.5 && <span style={{ color: "green", fontSize: "20px" }}>☆</span>}
                  {Array(5 - Math.floor(object.averageRating) - (object.averageRating % 1 >= 0.5 ? 1 : 0)).fill().map((_, index) => (
                    <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>★</span>
                  ))}
                </div>
                <button className="button" onClick={() => ReadMore(object, index)} style={{ marginTop: "10px" }}>Read More</button>
                <div className="divider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {currentPage > 0 && (
          <button className="button" onClick={SubmitPrevious} style={{ marginRight: "20px" }}>
            Previous
          </button>
        )}
        {endIndex < FindData.length && (
          <button className="button" onClick={SubmitNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default DisplayBlog;
