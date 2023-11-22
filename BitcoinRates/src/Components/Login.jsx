// import { useState } from "react";

// const Login = () => {
//     const [submitted, setSubmitted] = useState(false);
//     const handleSubmit = (event) => {
//         //prevents page reloading
//         event.preventDefault();
//         setSubmitted(true)
//     };
//     const displayForm = (
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="inputContainer">
//                     <label>Username</label>
//                     <input type="text" name="username" required />
//                 </div>
//                 <div className="inputContainer">
//                     <label>Password</label>
//                     <input type="password" name="password" required />
//                 </div>
//                 <div className="buttonContainer">
//                     <input type="submit" />
//                 </div>
//             </form>
//         </div>
//     )
//     return (
//         <>
//             <div className="login">
//                 <div className="login-form">
//                     <div className="title">Sign In</div>
//                     {submitted ? < div > User is successfully logged in</div> : displayForm}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Login
import { FormControl, InputLabel, FormHelperText, Input, Button, Typography, Box } from '@mui/material';
const Login = () => {
    return (
        <div className="login">
            <Typography variant="h2" gutterBottom>Login</Typography>
            <form>
               
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input type="password" id="my-password" aria-describedby="my-helper-text" />
                </FormControl>
               <br></br>
                <Button variant="contained">Submit</Button>
            </form>
        </div>
    )

}
export default Login
