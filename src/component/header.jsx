 


 export default function Header() {
    return <>
    <div className="navbar-container">
        <div className="nav-logo">
            <a href="/">BITNET.</a>
        </div>
        <div className="login-signup-box">
            <a href="/login" className="login-btn">Login</a>
            <a href="/signup" className="signup-btn">Signup</a>
        </div>
    </div>
    </>
 }