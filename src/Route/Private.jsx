import { useContext } from 'react';
import { AuthContext } from '../Providers/Authentication';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user)
    if(user)
        return children;

else    return (
      <Navigate to='/login'></Navigate>
    );
};

export default Private;