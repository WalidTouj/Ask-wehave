import React from "react"
import "./Sign-in.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(){
        super();

        this.state ={
            email:"",
            password:""
        }
    }
     handelSubmit = (event)=>{
      event.preventDefault();

      this.setState({eamil:"",password:""})}

      handelChange = (event)=>{
          const {value , name}= event.target;
          this.setState({[name]:value});
      }
     

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" type='email' label="Email" value={this.state.email}
                     handelChange={this.handelChange} required  />
                    <FormInput name="password" type='password' label="Password" value={this.state.password} 
                    handelChange={this.handelChange} required />
                    <div className="buttons">
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;