// import {MyContext} from "./MyContext";
// import {useContext} from "react";
// function PoliticsBlog(){
//         const {receiveDataBlog , FindData}  =useContext(MyContext);
//         console.log(FindData); 
         
//     return(<>
//        { FindData.map((object, index) => (
//           object.blogType === "PoliticsBlog" && (
//             <div key={index}>
//               <p>{object.blogType}</p>
//               <p>{object.inputBlog}</p>
//             </div>
//           )))} 

//     </>)
// }
// export default PoliticsBlog;





// import { MyContext } from "./MyContext";
// import { useContext, useState } from "react";


// // DisplayBlog component to display the blog type and the content
// function PoliticsBlog() {
//   const { FindData  } = useContext(MyContext); // Context data
//   const blogsPerPage = 2; // Number of blogs to show per page
//   const [currentPage, setCurrentPage] = useState(0); // Current page index

//   // Filter the blogs for 'PoliticsBlog' only
//   const politicsBlogsInformation = FindData.filter((blog) => blog.blogType === "PoliticsBlog");
//                          console.log(politicsBlogsInformation);

//   // Calculate the starting and ending index for blogs to be shown
//   const startIndex = currentPage * blogsPerPage;
//   const endIndex = startIndex + blogsPerPage;

//   // Function to handle showing the next set of blogs
//   function SubmitNext() {
//     // If there is more data to show, increment the page number
//     if (endIndex < politicsBlogsInformation.length) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }

//   // Function to handle showing the previous set of blogs
//   function SubmitPrevious() {
//     // Prevent going below the first page
//     if (currentPage > 0) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   }

//   return (  <div>
//     <div id="Boxheight" style={{ minHeight:250, minWidth: 1000,  height:"auto" , border: "1px solid black"    , marginTop:100 , marginLeft:100  , 
//                           backgroundColor:"pink"  ,   textAlign:"center"    ,      borderRadius:5
//       }}>
//       {/* Display blogs in the range of startIndex to endIndex */}
//       {politicsBlogsInformation.slice(startIndex, endIndex).map((object, index) => (
//         <div key={index}>
//           <p><strong>Blog Type:</strong> {object.blogType}</p>
//           <img
//                   src={`http://localhost:5000/${object.BlogImage}`}
//                   alt="Blog"
//                   className="thumbnail"
//                   style={{ width: "100px", height: "100px", margin: "10px" }}
//                 />
//               <p><strong>Blog Content:</strong> {object.inputBlog.slice(0, 100)}</p>
//                <div style={{ fontSize: "12px", color: "gray" }}>
//                   <p>{object.views} Views</p>
//                   <p>{object.follower} Followers</p>
//                   <p>{object.averageRating} Rating</p>
//                 </div>
//           <div style={{ display: "flex", gap: "5px", marginLeft: "570px" }}>
//                   {Array(Math.floor(object.averageRating)).fill().map((_, index) => (
//                     <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>★</span>
//                   ))}
//                   {object.averageRating % 1 >= 0.5 && <span style={{ color: "green", fontSize: "20px" }}>☆</span>}
//                   {Array(5 - Math.floor(object.averageRating) - (object.averageRating % 1 >= 0.5 ? 1 : 0)).fill().map((_, index) => (
//                     <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>★</span>
//                   ))}
//                 </div>
//           <br></br>
//           <br></br>
//         </div>
//       ))}

//       {/* Buttons to navigate between blog sets */}
//       <div style={{ marginTop: "10px" }}>
//         {currentPage > 0 && (
//           <button onClick={SubmitPrevious} style={{ marginRight: "10px" }}>
//             Previous
//           </button>
//         )}
//         {endIndex < politicsBlogsInformation.length && (
//           <button onClick={SubmitNext}>
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//     <br></br>
//     <br></br>
//     </div>
//   );
// }

// export default PoliticsBlog;











// import { MyContext } from "./MyContext";
// import { useContext, useState ,useEffect  } from "react";
// import { Navigate , useLocation } from "react-router-dom";
// import axios from "axios";
// function PoliticsBlog() {
//   const { FindData , LoginState ,setReceiveBlogObject ,setIndex ,setObjectId ,user , setCountviews , setUser } = useContext(MyContext); // Context data
//   const blogsPerPage = 5; // Number of blogs to show per page
//   const [currentPage, setCurrentPage] = useState(0); // Current page index
//   const location = useLocation();

//   // Filter the blogs for 'PoliticsBlog' only
//   const politicsBlogsInformation = FindData.filter((blog) => blog.blogType === "PoliticsBlog");

//   // Calculate the starting and ending index for blogs to be shown
//   const startIndex = currentPage * blogsPerPage;
//   const endIndex = startIndex + blogsPerPage;
//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, [setUser]);
               


//   function ReadMore(receive, index) {
//        console.log(LoginState);
//     if (!LoginState) {
//       return Navigate("/Login");
//     }
//     setReceiveBlogObject(receive);
//     setIndex(index);
//     setObjectId(receive._id);

//     if (receive._id && user) {
//       axios.post(`http://localhost:5000/incrementViews/${receive._id}`, {
//         user: user
//       })
//         .then(response => {
//           setCountviews(response.data.views);
//           localStorage.setItem("countviews", JSON.stringify(response.data.views));
//         })
//         .catch(error => {
//           console.error("Error checking views:", error);
//         });
//     }

//     if (receive.blogType === "PoliticsBlog") {
//       Navigate(`/RouterPoliticsBlog/:${receive._id}`, { state: { from: location.pathname } });
//     } else {
//       Navigate("/RouterTechBlog", { state: { from: location.pathname } });
//     }
//   }

//   // Function to handle showing the next set of blogs
//   function SubmitNext() {
//     if (endIndex < politicsBlogsInformation.length) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }

//   // Function to handle showing the previous set of blogs
//   function SubmitPrevious() {
//     if (currentPage > 0) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   }

//   return (
//     <div className="grid-container">
//       <div className="callout primary" style={{ marginTop: "2rem", borderRadius: "0.5rem" }}>
//         {/* Display blogs in the range of startIndex to endIndex */}
//         <div className="grid-x grid-margin-x">
//           {politicsBlogsInformation.slice(startIndex, endIndex).map((object, index) => (
//             <div
//               key={index}
//               className="cell small-12 medium-6 large-4"
//               style={{
//                 padding: "1rem",
//                 backgroundColor: "#f7f7f7",
//                 borderRadius: "0.5rem",
//                 marginBottom: "1rem",
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
//                 <div
//                   style={{
//                     flex: "1 1 auto",
//                     marginBottom: "1rem",
//                     textAlign: "left",
//                     padding: "0.5rem",
//                   }}
//                 >
//                   <strong>Blog Type:</strong> {object.blogType}
//                 </div>
//                 <img
//                   src={`http://localhost:5000/${object.BlogImage}`}
//                   alt="Blog"
//                   style={{
//                     width: "100",
//                     height: "100",
//                     objectFit: "cover",
//                     borderRadius: "0.5rem",
//                     marginBottom: "1rem",
//                   }}
//                 />
//                 <div>
//                   <p>
//                     <strong>Blog Content:</strong> {object.inputBlog}
//                   </p>
//                   <div style={{ fontSize: "12px", color: "gray", marginTop: "0.5rem" }}>
//                     <p>{object.views} Views</p>
//                     <p>{object.follower} Followers</p>
//                     <p>{object.averageRating} Rating</p>
//                   </div>
//                   <div style={{ display: "flex", gap: "5px", marginTop: "0.5rem" }}>
//                     {Array(Math.floor(object.averageRating))
//                       .fill()
//                       .map((_, index) => (
//                         <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>
//                           ★
//                         </span>
//                       ))}
//                     {object.averageRating % 1 >= 0.5 && (
//                       <span style={{ color: "green", fontSize: "20px" }}>☆</span>
//                     )}
//                     {Array(
//                       5 - Math.floor(object.averageRating) - (object.averageRating % 1 >= 0.5 ? 1 : 0)
//                     )
//                       .fill()
//                       .map((_, index) => (
//                         <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>
//                           ★
//                         </span>
//                       ))}
//                   </div>
//                 </div>
//                 <button className="button" onClick={() => ReadMore(object, index)} style={{ marginTop: "10px" }}>Read More</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons to navigate between blog sets */}
//         <div style={{ marginTop: "1rem" }}>
//           {currentPage > 0 && (
//             <button
//               className="button secondary"
//               onClick={SubmitPrevious}
//               style={{ marginRight: "1rem" }}
//             >
//               Previous
//             </button>
//           )}
//           {endIndex < politicsBlogsInformation.length && (
//             <button className="button primary" onClick={SubmitNext}>
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PoliticsBlog;




import { MyContext } from "./MyContext";
import { useContext, useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

function PoliticsBlog() {
  const { 
    FindData, 
    LoginState, 
    setReceiveBlogObject, 
    setIndex, 
    setObjectId, 
    user, 
    setCountviews, 
    setUser 
  } = useContext(MyContext);

  const blogsPerPage = 5; // Number of blogs to show per page
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const [redirectTo, setRedirectTo] = useState(null); // For navigation
  const location = useLocation();

  // Filter the blogs for 'PoliticsBlog' only
  const politicsBlogsInformation = FindData.filter((blog) => blog.blogType === "PoliticsBlog");

  // Calculate the starting and ending index for blogs to be shown
  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, [setUser]);

  function ReadMore(receive, index) {
    console.log(LoginState);
    if (!LoginState) {
      setRedirectTo("/Login");
      return;
    }

    setReceiveBlogObject(receive);
    setIndex(index);
    setObjectId(receive._id);

    if (receive._id && user) {
      axios
        .post(`http://localhost:5002/incrementViews/${receive._id}`, { user: user })
        .then((response) => {
          setCountviews(response.data.views);
          localStorage.setItem("countviews", JSON.stringify(response.data.views));
        })
        .catch((error) => {
          console.error("Error checking views:", error);
        });
    }

    if (receive.blogType === "PoliticsBlog") {
      setRedirectTo(`/RouterPoliticsBlog/${receive._id}`);
    } else {
      setRedirectTo("/RouterTechBlog");
    }
  }

  function SubmitNext() {
    if (endIndex < politicsBlogsInformation.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  function SubmitPrevious() {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  // If redirection is triggered, navigate to the appropriate route
  if (redirectTo) {
    return <Navigate to={redirectTo} state={{ from: location.pathname }} />;
  }

  return (
    <div className="grid-container">
      <div className="callout primary" style={{ marginTop: "2rem", borderRadius: "0.5rem" }}>
        <div className="grid-x grid-margin-x">
          {politicsBlogsInformation.slice(startIndex, endIndex).map((object, index) => (
            <div
              key={index}
              className="cell small-12 medium-6 large-4"
              style={{
                padding: "1rem",
                backgroundColor: "#f7f7f7",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div
                  style={{
                    flex: "1 1 auto",
                    marginBottom: "1rem",
                    textAlign: "left",
                    padding: "0.5rem",
                  }}
                >
                  <strong>Blog Type:</strong> {object.blogType}
                </div>
                <img
                  src={`http://localhost:5002/${object.BlogImage}`}
                  alt="Blog"
                  style={{
                    width: "100",
                    height: "100",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                />
                <div>
                  <p>
                    <strong>Blog Content:</strong> {object.inputBlog}
                  </p>
                  <div style={{ fontSize: "12px", color: "gray", marginTop: "0.5rem" }}>
                    <p>{object.views} Views</p>
                    <p>{object.follower} Followers</p>
                    <p>{object.averageRating} Rating</p>
                  </div>
                  <div style={{ display: "flex", gap: "5px", marginTop: "0.5rem" }}>
                    {Array(Math.floor(object.averageRating))
                      .fill()
                      .map((_, index) => (
                        <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>
                          ★
                        </span>
                      ))}
                    {object.averageRating % 1 >= 0.5 && (
                      <span style={{ color: "green", fontSize: "20px" }}>☆</span>
                    )}
                    {Array(
                      5 -
                        Math.floor(object.averageRating) -
                        (object.averageRating % 1 >= 0.5 ? 1 : 0)
                    )
                      .fill()
                      .map((_, index) => (
                        <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <button
                  className="button"
                  onClick={() => ReadMore(object, index)}
                  style={{ marginTop: "10px" }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          {currentPage > 0 && (
            <button
              className="button secondary"
              onClick={SubmitPrevious}
              style={{ marginRight: "1rem" }}
            >
              Previous
            </button>
          )}
          {endIndex < politicsBlogsInformation.length && (
            <button className="button primary" onClick={SubmitNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PoliticsBlog;


