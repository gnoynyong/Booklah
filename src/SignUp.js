import React,{useRef} from 'react';
import './SignUp.css';
import {Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function SignUp() {
    //useReference hooks for input value
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();

    return (
    <div className="signup-page">
        <Link to="/"> 
        <h2>Booklah!</h2>
        </Link>
        <h3>Sign Up</h3>
        <Form>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={confirmpasswordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">Sign Up</Button>
        </Form>
        <div className="w-100 text-center mt-2">
            Already have an account? Login
        </div>
    </div>
    )
}

export default SignUp
