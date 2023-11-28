
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useOrganizer = () => {
    const { user,loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isOrganizer, isLoading: isOrganizerLoading } = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
           if(user?.email){
            const res = await axiosSecure.get(`/users/organizer/${user?.email}`);
            console.log(res.data);
            return res.data?.organizer;
           }
        }
    })
    return [isOrganizer,isOrganizerLoading]
};

export default useOrganizer;