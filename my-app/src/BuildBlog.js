// Client-side code in BuildBlog.js
import { useRef, useContext, useState } from "react";
import { MyContext } from "./MyContext";
import Login from "./Login";
import axios from "axios";
import "./index.css";

function BuildBlog() {
  const inputinformation = useRef();
  const ImageBlog = useRef();
  const { setSelectBlog, setBlog, Blog, LoginState, user } = useContext(MyContext);

  const [SelectBlogType, setSelectBlogType] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
      console.log(LoginState);
  function SelectedOption(e) {
    const selectedoption = e.target.value;
    setSelectBlog(selectedoption);
    setSelectBlogType(selectedoption);
  }

  function ImageChange() {
    const file = ImageBlog.current.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPEG and PNG formats are allowed.");
        ImageBlog.current.value = null;
        return;
      } else if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB.");
        ImageBlog.current.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  }

  function Submit() {
    if (!SelectBlogType || !inputinformation.current.value) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("blogType", SelectBlogType);
    formData.append("BlogImage", ImageBlog.current.files[0]);
    formData.append("inputBlog", inputinformation.current.value);
    formData.append("user", user);

    axios
      .post("http://localhost:5002/BuildBlog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        setSubmissionStatus("Blog submitted successfully!");
        setBlog((prevBlog) => [
          ...prevBlog,
          {
            UserBlog: SelectBlogType,
            BlogImageData: ImageBlog.current.files,
            BlogInformation: inputinformation.current.value,
          },
        ]);
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        console.error("Error submitting blog:", error);
        setSubmissionStatus(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      {LoginState ? (
        <div className="BuildBlog">
          <div className="dropdown-container">
            <select
              id="category-select"
              onChange={SelectedOption}
              className="dropdown"
            >
              <option value="">Select Blog Type</option>
              <option value="TechBlog">Tech Blog</option>
              <option value="PoliticsBlog">Politics Blog</option>
            </select>
          </div>
          <br />
          <br />
          <label htmlFor="file-upload">Upload an Image:</label>
          <input
            type="file"
            id="file-upload"
            ref={ImageBlog}
            onChange={ImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "200px", marginTop: "10px" }}
            />
          )}
          <br />
          <br />
          <textarea
            className="resizable-textarea"
            type="text"
            placeholder="Enter information about the selected Blog"
            ref={inputinformation}
          ></textarea>
          <br />
          <br />
          <button
            onClick={Submit}
            className="SubmitBuildBlog"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <p>{submissionStatus}</p>
        </div>
      ) : (
        <div>
          <p
            style={{
              height: 50,
              width: 250,
              marginTop: 100,
              marginLeft: 250,
              backgroundColor: "pink",
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            Please Login before BuildBlog
          </p>
          <Login />
        </div>
      )}
      <br />
      <br />
    </div>
  );
}

export default BuildBlog;


