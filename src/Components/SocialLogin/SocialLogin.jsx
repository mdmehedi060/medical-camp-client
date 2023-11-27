import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from './../../assets/Hooks/useAuth';
import useAxiosPublic from './../../assets/Hooks/useAxiosPublic';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic=useAxiosPublic();
const navigate=useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo={
        email:result.user?.email,
        name: result.user.displayName
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        console.log(res.data);
        navigate('/')
      })
    });
  };
  return (
    <div className="p-8 mx-auto">
      <div className="divider divider-success w-full text-red-400"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn text-green-600 text-xl"
        >
          <FaGoogle className="mr-2 text-red-600" />
         Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
