import { useRef, useState, useContext } from "react";
import App from "./App";
// import BuildBlog from "./BuildBlog";
import { MyContext } from "./MyContext";
import axios from "axios";

function Register() {
  const inputUser = useRef();
  const inputPassword = useRef();
  const [password, setPassword] = useState("");
  const [RegisterUser ,  setRegisterUser] = useState();
  const { Registered, setRegistered,  setLoginState   ,  LoginState   } = useContext(MyContext);

                  const [RegexStatus , setRegexStatus] = useState( false );
                const [RegexInformation , setRegexInformation] = useState("");
                               
                      

                // console.log(RegexStatus);
                // console.log(RegexInformation)


                // const usernameRegex = /^[A-Z][a-z]{1,20}$/;
                // console.log(usernameRegex.test(user));

                // if (!usernameRegex.test(user)){
                //             setRegexStatus(false);
                //             setRegexInformation("Enter one Capital letter ");
                        
                // }  


  function Submit() {

    setRegisterUser(inputUser.current.value);
    setPassword(inputPassword.current.value);


            // if(user==="" || password===""){
            //     return ;
            // }
                                                          
      
    axios.post("http://localhost:5002/Register", {
      user: inputUser.current.value,
      password: inputPassword.current.value
    })
    .then(response => {   
      //         console.log(response.status);
      //         console.log(response.data.RegexInformation);

      // if ( response.status ===201) {
      //   console.log(response.data.RegexInformation);
      //   setRegexStatus(true);
      //   setRegexInformation(response.data.RegexInformation);
      // } 
                  //  console.log(response.data.RegexStatus);
                   
                  
                //    console.log(response.status)
                //     console.log(response)
                //  if (response.status===205){    
                //                    console.log("Regex")
                //                    console.log(response.status)

                //                      setRegexStatus(true);
                //                      setRegexInformation("Enter one Starting Capital letter")
                                    
                                    
                //  }

                // if (response.status === 205 && response.data.RegexStatus){
                //       setRegexInformation(response.data.RegexStatus)
                // }  else if (response.status === 205 && response.data.information){

                //          setRegexInformation(response.data.information)
                // }



        //  if(response.status===400){
        //     console.log(response.data.information);
        // }

  if (response.data === "Register Data is saved Successfully") {
        setRegistered(true);
        setLoginState(true);
      }
    })
    .catch(error => {    

      if (error.response && error.response.status === 400) {
        if (error.response.data.RegexInformation) {
          setRegexStatus(true);
          setRegexInformation(error.response.data.RegexInformation);  // Set the validation error message
        } else if (error.response.data.information) {
          setRegexStatus(true);
          setRegexInformation(error.response.data.information);  // Set already registered error message
        }
      } else {
        console.log("An unexpected error occurred:", error);
      }
    })
  }

  return (
    <>
             <div    style={{height:170, width:500 , backgroundColor:"pink" ,    marginTop:170    , marginLeft:100  ,                               
              display:"flex" , alignItems:"center"     , borderRadius: 5    

              }}  >
      {Registered ? <div>Successfully Registered</div> :
      <div          style={{marginLeft:100}}      >
        
        <label>User Name:</label>
        <input 
          type="text"
          placeholder="enter Username"
          ref={inputUser}
        />
        <br /><br />
            
                {RegexStatus?  <p>{RegexInformation}</p>:<p></p>}
                <br></br>
                {/* {(RegexInformation && <p>{RegexInformation}</p>)    } */}
        <label>Password:</label>
        <input 
          type="password"
          placeholder="enter password"
          ref={inputPassword}
        />
        <br /><br />

        <button onClick={Submit}       style={{      height:24, width:70 ,  marginLeft:100  ,  backgroundColor:"lightyellow"  ,        borderRadius:4    }}       >Submit</button>
      </div>}
     </div>

     <br></br>
     <br></br>

    </>
  );
}
export default Register;


