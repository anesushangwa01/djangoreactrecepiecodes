// import React, { useState } from 'react';
// import {
//     FormControl,
//     FormLabel,
//     Button,
//     VStack,
//     Input,
//     Text,
//   } from '@chakra-ui/react'


// // function ForgotPassword() {
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://127.0.0.1:8000/api/password_reset/', { email });
// //       setMessage('Password reset email sent! Check your inbox.');
// //     } catch (error) {
// //       console.error(error);
// //       setMessage('Error sending email. Please try again.');
// //     }
// //   };

// const ForgotPassword = () => {

//    const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//     const { emailUser } = useAuth();
//     const nav = useNavigate();

//     const handleemail = async () => {
//         await emailUser(email)
//     }
// }

// return (
//     <div style={{ margin: '50px' }}>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="email" 
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         <Button onClick={handleemail}>Send Reset Link</Button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );


// export default ForgotPassword;
