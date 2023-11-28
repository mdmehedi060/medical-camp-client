
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: joincamp = [] } = useQuery({
        queryKey: ['joincamp', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/joincamp?email=${user?.email}`);
            return res.data;
        }
    })

    return [joincamp, refetch]
};

export default useCamp;