// import { useState, useEffect } from "react";
// import axios from "axios";

// const Rating = ({ blogId, user }) => {
//   const [rating, setRating] = useState(0);
//   const [averageRating, setAverageRating] = useState(0);
//   const [message, setMessage] = useState("");

//   // Fetch average rating
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/${blogId}/average-rating`)
//       .then((response) => {
//         setAverageRating(response.data.averageRating);
//       })
//       .catch((error) => {
//         console.error("Error fetching average rating:", error);
//       });
//   }, [blogId]);

//   // Handle rating submission
//   const handleRating = (newRating) => {
//     setRating(newRating);
//     axios
//       .post(`http://localhost:5000/${blogId}/rate`, { user: user, rating: newRating })
//       .then((response) => {
//         setMessage(response.data.message);
//         setAverageRating(response.data.averageRating); // Update average rating
//       })
//       .catch((error) => {
//         console.error("Error submitting rating:", error);
//         setMessage("Failed to submit rating.");
//       });
//   };

//   return (
//     <div>
//       <h3>Rate this Blog</h3>
//       <div style={{ display: "flex", gap: "10px" }}>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             style={{
//               color: star <= rating ? "gold" : "gray",
//               cursor: "pointer",
//               fontSize: "20px",
//             }}
//             onClick={() => handleRating(star)}
//           >
//             ★
//           </button>
//         ))}
//       </div>
//       <p>Average Rating: {averageRating}</p>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Rating;




import { useState, useEffect } from "react";
import axios from "axios";

const Rating = ({ blogId, user }) => {
  const [rating, setRating] = useState(0); // User-selected rating
  const [averageRating, setAverageRating] = useState(0); // Average rating
  const [message, setMessage] = useState("");

  // Fetch average rating
  useEffect(() => {
    axios
      .get(`http://localhost:5002/${blogId}/average-rating`)
      .then((response) => {
        setAverageRating(response.data.averageRating);
      })
      .catch((error) => {
        console.error("Error fetching average rating:", error);
      });
  }, [blogId]);

  // Handle rating submission
  const handleRating = (newRating) => {
    setRating(newRating);
    axios
      .post(`http://localhost:5002/${blogId}/rate`, { user: user, rating: newRating })
      .then((response) => {
        setMessage(response.data.message);
        setAverageRating(response.data.averageRating); // Update average rating
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
        setMessage("Failed to submit rating.");
      });
  };

  // Render stars for average rating
  const renderStars = (averageRating) => {
    const fullStars = Math.floor(averageRating); // Number of full stars
    const halfStar = averageRating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <div style={{ display: "flex", gap: "5px" }}>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <span key={`full-${index}`} style={{ color: "gold", fontSize: "20px" }}>★</span>
          ))}
        {halfStar && <span style={{ color: "gold", fontSize: "20px" }}>☆</span>}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <span key={`empty-${index}`} style={{ color: "gray", fontSize: "20px" }}>★</span>
          ))}
      </div>
    );
  };

  return (
    <div>
      <h3>Rate this Blog</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            style={{
              color: star <= rating ? "gold" : "gray",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => handleRating(star)}
          >
            ★
          </button>
        ))}
      </div>
      <h4>Average Rating:</h4>
      {renderStars(averageRating)}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Rating;
