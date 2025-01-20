import {useContext , useEffect} from "react";
import {MyContext} from "./MyContext";


import { useNavigate   ,  useLocation  } from "react-router-dom"
function RouterBlog(){
  const Navigate = useNavigate();
  const location = useLocation();
          const {ReceiveBlogObject, Index   , countviews ,setCountviews , BlogType, setBlogType    } = useContext(MyContext);

          const blogType = ReceiveBlogObject ? ReceiveBlogObject.blogType : null;

          const storedBlogObject = localStorage.getItem('ReceiveBlogObject');
          const storedBlogViews = localStorage.getItem("countviews");

          const localStorageBlog = storedBlogObject ? JSON.parse(storedBlogObject) : null;
          const localStorageviews =storedBlogViews ? JSON.parse(storedBlogViews): JSON.parse(storedBlogViews);

          const currentBlog = ReceiveBlogObject || localStorageBlog;
          const views= countviews || localStorageviews ;

          useEffect(() => {
            if (ReceiveBlogObject) {
              // Store the blog object in localStorage for persistence
              localStorage.setItem('ReceiveBlogObject', JSON.stringify(ReceiveBlogObject));
              localStorage.setItem("countviews"  ,  JSON.stringify(countviews));

            }
          }, [ReceiveBlogObject  ,  countviews ] );
        
          if (!currentBlog || !currentBlog.blogType) {
            return <div>No blog selected or blogType missing.</div>;
          }    
          function GoBack(){
            if (location.state && location.state.from) {
              Navigate(location.state.from); // Go back to the previous page
            }
            // window.location.href  =  `RouterPoliticsBlog/:${ObjectId}`
           }
           function Blog (){
            window.location.href = "/";
  
           }
              

          // if(ReceiveBlogObject.blogType==="PoliticsBlog"){
          //   console.log(ReceiveBlogObject, "this is PoliticsBlog")

          // }
          // else{
          //   console.log(ReceiveBlogObject, "this is TechBlog");
          // }

    return (<>
           
           {/* {ReceiveBlogObject.blogType==="TechBlog" ? <div>
            <p>{ReceiveBlogObject.blogType}</p>
            <p>{ReceiveBlogObject.inputBlog}</p>
                 </div>    :
            <div>
                <p>{ReceiveBlogObject.blogType}</p>
                <p>{ReceiveBlogObject.inputBlog}</p>
            </div>
           } */}

       <div  style={{marginTop:100}}  >
      <p>{currentBlog.blogType}</p>
      <img src={`http://localhost:5002/${currentBlog.BlogImage}`} alt="BlogImage" style={{height:100 , width:100}}/>
      <div>{currentBlog.inputBlog}</div>
      <div>{BlogType}</div>
      {(currentBlog.blogType==="TechBlog"  && <p>{views} </p>) }

    </div>

    <button onClick={Blog } style={{ marginTop: "20px" }}>
           Blog   
      </button>

      <br></br>
      <br></br>
     
      <button onClick={GoBack}>
        GoBack
      </button>
      </>
                    
          )
}

export default RouterBlog;