// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PopularBlog = () => {
//   const [popularBlogs, setPopularBlogs] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch the top 5 popular blogs when the component mounts
//   useEffect(() => {
//     const fetchPopularBlogs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/PopularBlogs', {
//           params: { limit: 17 }, // Send limit as query parameter
//         });
//         setPopularBlogs(response.data.popularBlogs);  // Set the blog data
//         console.log(response.data.popularBlogs);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch the popular blogs');
//         setLoading(false);
//       }
//     };

//     fetchPopularBlogs();
//   }, []); // Empty array ensures it runs only once on component mount

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!popularBlogs || popularBlogs.length === 0) return <div>No popular blogs found.</div>;

//   return (
//     <div>
//       <h2>Most Viewed Blogs</h2>
//       {popularBlogs.map((blog, index) => (
//         <div key={index}>
//           <h3>{blog.blogType}</h3>
//           <p>{blog.inputBlog}</p>
//           <p><strong>Views:</strong> {blog.views}</p>
//           <p><strong>Created by:</strong> {blog.createdBy}</p>
//           <p><strong>Follower:</strong>{blog.follower}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PopularBlog;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularBlog = () => {
  const [popularBlogs, setPopularBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
      console.log(popularBlogs)

  // Fetch the top 5 popular blogs when the component mounts
  useEffect(() => {
    const fetchPopularBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/PopularBlogs', {
          params: { limit: 17 }, // Send limit as query parameter
        });
        setPopularBlogs(response.data.popularBlogs);  // Set the blog data
        console.log(response.data.popularBlogs);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch the popular blogs');
        setLoading(false);
      }
    };

    fetchPopularBlogs();
  }, []); // Empty array ensures it runs only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!popularBlogs || popularBlogs.length === 0) return <div>No popular blogs found.</div>;

  return (
    <div className="grid-container">
      <h2 className="text-center">Most Viewed Blogs</h2>

      {popularBlogs.map((blog, index) => (
        <div key={index} className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6 large-4">
            {/* Box with fixed width and height, and background color */}
            <div
              className="callout"
              style={{
                backgroundColor: '#f0f0f0', // Background color of the box
                height: '300px', // Fixed height for the box
                padding: '20px', // Padding inside the box
                borderRadius: '10px', // Rounded corners for the box
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the box
              }}
            >
              <h3>{blog.blogType}</h3>
              <img
                  src={`http://localhost:5002/${blog.BlogImage}`}
                  alt="Blog"
                  className="thumbnail"
                  style={{ width: "100px", height: "100px", margin: "10px" }}
                />
              <p>{blog.inputBlog}</p>
              <p><strong>Views:</strong> {blog.views}</p>
              <p><strong>Created by:</strong> {blog.createdBy}</p>
              <p><strong>Followers:</strong> {blog.follower}</p>
              <p><strong>averageRating:</strong>{blog.averageRating}</p>
              <div style={{ display: "flex", gap: "5px", marginLeft: "570px" }}>
                  {Array(Math.floor(blog.averageRating)).fill().map((_, index) => (
                    <span key={`full-${index}`} style={{ color: "green", fontSize: "20px" }}>★</span>
                  ))}
                  {blog.averageRating % 1 >= 0.5 && <span style={{ color: "green", fontSize: "20px" }}>☆</span>}
                  {Array(5 - Math.floor(blog.averageRating) - (blog.averageRating % 1 >= 0.5 ? 1 : 0)).fill().map((_, index) => (
                    <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>★</span>
                  ))}
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularBlog;

