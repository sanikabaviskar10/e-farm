 
import { useState } from 'react';


import { Box,TextField, Button,styled,Typography } from '@mui/material';
import { API } from '../../service/api';
const Component = styled(Box)`
  width:400px;
  margin:auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const image = styled('img')({
    width:100,
    margin:'auto' ,
    display:'flex',
    padding: '50px 0 0'
});

const Wrapper =styled(Box)`
   padding: 25px 35px;
   display:flex;
   flex:1;
   flex-direction:column;
   & > div, & > button, & > p{
    margin-top:20px;

   }
`;
const LoginButton = styled(Button)`
         text-transform:none;
         background:#FB641B;
         color:#fff;
         height:48px;
         border-radius:2px;

`
const SignupButton = styled(Button)`
        text-transform:none;
        background:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);

`;

const Text = styled(Typography)`
       color:#878787;
       font-size: 16px;

`
<<<<<<< HEAD
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
=======
const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

>>>>>>> 6d7500c4d54aaffd82f2d06f9fc845d12831243b

const Login = () => {

     const imageURL = 'https://www.shutterstock.com/shutterstock/photos/1608823363/display_1500/stock-vector-e-farm-logo-symbol-of-agricultural-technology-1608823363.jpg';
     
     const[account,toggleAccount] = useState('login');
<<<<<<< HEAD
     const [signup, setSignup] = useState(signupInitialValues);
     const [error, showError] = useState('');
=======
     const[signup,setSignup] = useState(signupInitialValues);
>>>>>>> 6d7500c4d54aaffd82f2d06f9fc845d12831243b

     const toggleSignup = () => {
        account == 'Signup' ? toggleAccount('login') : toggleAccount('Signup')
     }
<<<<<<< HEAD

     const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }
=======
     
     const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
     }



>>>>>>> 6d7500c4d54aaffd82f2d06f9fc845d12831243b

    return (
        <Component>
            <Box>
            <img src={imageURL} alt="login" />
            {
                account == 'login' ?
            <Wrapper>
                 <TextField variant = "standard" label="Enter username"/>
                 <TextField variant = "standard" label="Enter password"/>

                 {error && <Error>{error}</Error>}
                 
                 <LoginButton variant="contained">Login</LoginButton>
                 <Text>OR</Text>
                 <SignupButton onClick={()=>toggleSignup()}>create an account</SignupButton>
             </Wrapper> 
            :
            <Wrapper>
<<<<<<< HEAD
                 <TextField variant = "standard" label="Enter name"/>
                 <TextField variant = "standard" label="Enter username"/>
                 <TextField variant = "standard" label="Enter password"/>
                 <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                 <Text>OR</Text>
=======
                 <TextField variant = "standard" onChange={(e) => onInputChange(e)} name='name' label="Enter name"/>
                 <TextField variant = "standard" onChange={(e) => onInputChange(e)} name='username' label="Enter username"/>
                 <TextField variant = "standard"  onChange={(e) => onInputChange(e)} name ='password' label="Enter password"/>
                 <SignupButton>Signup</SignupButton>
                 <Text style={{textAlign:'center'}}>OR</Text>
>>>>>>> 6d7500c4d54aaffd82f2d06f9fc845d12831243b
                 <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an account</LoginButton>
            </Wrapper>
          }
            </Box>
        </Component>
    )
}

export default Login;