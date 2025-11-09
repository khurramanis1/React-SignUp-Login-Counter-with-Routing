import './SignupLogin.css';

const SignupLogin = () => {
    return (
        <>
        <div className="signup-container" id='signupContainer'>
            <h1>Create Account</h1>
            <form method="POST">
                <div className="signup-form">
                    <input type="text" id="username" name="username" placeholder='Your name' />
                    <p className='userError error' id='userError'></p>
                    <input type="email" id="email" name="email" placeholder='Your Email' />
                    <p className='emailError error' id='emailError'></p>
                    <input type="password" id="password" name="password" placeholder='Password' />
                    <p className='passError error' id='passError'></p>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm Password' />
                    <p className='confirmpassError error' id='confirmpassError'></p>
                    <div className="terms-conditions">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">I agree to the <a href="#">Terms and Conditions</a></label>
                    </div>
                    <p className='termsError error' id='termsError'></p>
                    <button type="submit" onClick={register}>Sign Up</button>
                    <p className='login-of-signup'>Already have an account? <a href="#loginContainer" onClick={loginOfSignup}>Login here</a></p>
                </div>
            </form>
        </div>

        <div className="login-container" id='loginContainer'>
            <h1>Login</h1>
            <form method="POST">
                <div className="login-form">
                    <input type="email" id="login-email" name="login-email" placeholder='Your Email' />
                    <input type="password" id="login-password" name="login-password" placeholder='Password' />
                    <button type="submit" onClick={loginFormValidation}>Login</button>
                    <p className='signup-of-login'>Don't have an account? <a href="#signupContainer" onClick={signupOfLogin}>Sign Up here</a></p>
                </div>
            </form>
        </div>
    </>
    )
};
export default SignupLogin;

export function loginOfSignup() {
    return (
        document.getElementById('signupContainer').style.display = 'none',
        document.getElementById('loginContainer').style.display = 'block'
    )
}

export function signupOfLogin() {
    return (
        document.getElementById('loginContainer').style.display = 'none',
        document.getElementById('signupContainer').style.display = 'block'
    )
}

// Registration form validation
export function register(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (username === "") {
        document.getElementById('userError').innerText = "Username is required";
        isValid = false;
    } else {
        document.getElementById('userError').innerText = "";
    }

    if (email === "") {
        document.getElementById('emailError').innerText = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (password === "") {
        document.getElementById('passError').innerText = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passError').innerText = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        document.getElementById('passError').innerText = "";
    }

    if (confirmPassword === "") {
        document.getElementById('confirmpassError').innerText = "Confirm Password is required";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmpassError').innerText = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById('confirmpassError').innerText = "";
    }
    
    if (!document.getElementById('terms').checked) {
        document.getElementById('termsError').innerText = "You must agree to the terms and conditions";
        isValid = false;
    } else {
        document.getElementById('termsError').innerText = "";
    }
    if (isValid) {
        alert("Registered Successfully!");
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('signupContainer').style.display = 'none';
    }
}

//  Initially hide login container
export function loginFormValidation(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('login-email').value.trim();
    const loginPassword = document.getElementById('login-password').value.trim();
    if (loginEmail === "" || loginPassword === "") {
        alert("Please enter both email and password to login.");
    } else {
        location = "/Counter"
    }
}