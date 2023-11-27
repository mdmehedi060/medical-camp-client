
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: camp = [] } = useQuery({
        queryKey: ['camp', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/addcamp?email=${user.email}`);
            return res.data;
        }
    })

    return [camp, refetch]
};

export default useCamp;