import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const {refetch, data: wish=[]} = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user.email}`)
            return res.data
        }
    })
    return [wish, refetch]
};

export default useWishlist;