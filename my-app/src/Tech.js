// import {MyContext} from "./MyContext";
// import {useContext} from "react";

// function TechBlog(){
//     const {FindData} =useContext(MyContext);
//     console.log(FindData)

  
//     return(<>

//   {/* <button onClick={FindTechBlog}>Find</button>
//   <br></br>  */}
//       {FindData.map((object,index)=>object.blogType==="TechBlog"?
//       <ul>
//         <li>
//       <div key={object._id ||  index}>
        
//         <p>{object.blogType}</p>
//          <p>{object.inputBlog}</p>
//       </div>
//       </li>
//       </ul>
//       :<p></p>)}
//     </>)
// }

// export default TechBlog;






import { MyContext } from "./MyContext";
import { useContext, useState } from "react";


// DisplayBlog component to display the blog type and the content
function DisplayBlog() {
  const { FindData } = useContext(MyContext); // Context data
  const blogsPerPage = 2; // Number of blogs to show per page
  const [currentPage, setCurrentPage] = useState(0); // Current page index

  // Filter the blogs for 'TechBlog' only
  const techBlogs = FindData.filter((blog) => blog.blogType === "TechBlog");

  // Calculate the starting and ending index for blogs to be shown
  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // Function to handle showing the next set of blogs
  function SubmitNext() {
    // If there is more data to show, increment the page number
    if (endIndex < techBlogs.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  // Function to handle showing the previous set of blogs
  function SubmitPrevious() {
    // Prevent going below the first page
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  return (
      <div>
    <div id="Boxheight" style={{ height: "auto", width: 700, border: "1px solid black" , marginTop:250  ,  marginLeft:100  }}>
      {/* Display blogs in the range of startIndex to endIndex */}
      {techBlogs.slice(startIndex, endIndex).map((object, index) => (
        <div key={index}>
          <p><strong>Blog Type:</strong> {object.blogType}</p>
          <p><strong>Blog Content:</strong> {object.inputBlog}</p>
        </div>
      ))}

      {/* Buttons to navigate between blog sets */}
      <div style={{ marginTop: "10px" }}>
        {currentPage > 0 && (
          <button onClick={SubmitPrevious} style={{ marginRight: "10px" }}>
            Previous
          </button>
        )}
        {endIndex < techBlogs.length && (
          <button onClick={SubmitNext}>
            Next
          </button>
        )}
      </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default DisplayBlog;

