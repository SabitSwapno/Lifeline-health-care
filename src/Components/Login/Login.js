import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const { signInUsingGoogle, error, isLogin, toggleLogin, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();


  const iconsFa = <FontAwesomeIcon icon={faGlobe} />
  return (
    <>
      <Header></Header>
      <div className="bg-custom">
        <h2 className="pt-3 mb-3 text-white">Login Here</h2>
        <form onSubmit={handleRegistration} className="w-50 mx-auto form-bg-custom">
          <div className="mb-3">
            <label form="exampleInputEmail1" className="form-label">Email address</label>
            <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 ">
            <label form="exampleInputPassword1" className="form-label">Password</label>
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="row mb-3 text-danger fw-bolder px-4">
            {error}
          </div>
          <div className="mb-3 form-check">
            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">{isLogin ? "Accepted" : "Accept policy?"}</label>
          </div>
          <div className="mb-3 d-inline-flex">
            <p>New to website</p>
            <Link className="mx-3" to="/register">Register Now</Link>
          </div>
          <div className="mb-1 form-check">
            <button type="submit" className="login-submit-btn">Submit</button>
            <button onClick={signInUsingGoogle} className="google-btn">{iconsFa} Google Sign in</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;