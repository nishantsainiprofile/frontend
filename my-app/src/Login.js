import { useRef,  useContext } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";
import {useEffect} from "react";

function Login() {
  const inputUser = useRef();
  const inputPassword = useRef();
  const { LoginState, setLoginState ,    user , setUser   } = useContext(MyContext);


//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(savedUser);
//     } 
     
//     axios.get("http://localhost:5000/protected", { withCredentials: true })
//       .then((response) => {
//         if (response.status === 200) {
//           setLoginState(true);
//         }
//       })
//       .catch((error) => {
//         console.log("No valid token found", error);
//         if ( error.reponse &&  error.response.status===401 )
//         setLoginState(false);
//         // localStorage.removeItem("user");
//       });
// }, [setLoginState , setUser]);

useEffect(() => {
  axios.get("http://localhost:5002/protected", { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        setLoginState(true);
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        setLoginState(false); // Token expired or unauthorized
        localStorage.removeItem("user"); // Clear localStorage
      }
    });
}, [setLoginState]);

  function Submit() {
    const user = inputUser.current.value;
    const password = inputPassword.current.value;

                 if(user==="" || password===""){
                    return  ;
                 }
    axios.post("http://localhost:5002/Login", { user, password }  ,{ withCredentials: true }  )
      .then((response) => {
        console.log(response.data);
         setUser(user);
        if (response.status === 200) {
          setUser(user);
          setLoginState(true);
          localStorage.setItem("user", user);  
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
       
        <div   style={{height:250   , width:500  , backgroundColor:"pink" ,   marginLeft  :100 ,    marginTop:100  , display:"flex"
                 ,   alignItems:"center"  ,  borderRadius: 5   }}  >
      {LoginState ? <div     style={{marginLeft:250}}   >You are logged in </div> :
        <div     style={{      marginLeft:100     }}    >
          <label>User Name:</label>
          <input
            type="text"
            placeholder="Enter User Name"
            ref={inputUser}
          />
          <br /><br />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            ref={inputPassword}
          />
          <br /><br />

          <button onClick={Submit}      style={{marginLeft:100}}             >Submit</button>
        </div>}
        </div>
    </>
  );
}

export default Login;
