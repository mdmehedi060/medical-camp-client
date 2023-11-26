import { useContext } from 'react';
import { Authcontext } from './../../Providers/AuthProviders';


const useAuth = () => {
   const auth=useContext(Authcontext);
   return auth;
};

export default useAuth;