import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGuide = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isGuide, isPending: isGuideLoading } = useQuery({
        queryKey: [user?.email, 'isGuide'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            return res.data?.guide;
        }
    })
    return [isGuide, isGuideLoading]
};

export default useGuide;