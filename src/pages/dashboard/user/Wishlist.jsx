import { Link } from "react-router-dom";
import useWishlist from "../../../hooks/useWishlist";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const Wishlist = () => {
    const [wish, refetch] = useWishlist()
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishlist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">List of my wishes</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Wishlist</h1>
            </div>



            <div>
                <div className="overflow-x-auto rounded-xl">
                    <table className="table">

                        <thead className="bg-[#ffb229] text-sm text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Tour Type</th>
                                <th>Trip Title</th>
                                <th>Details</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                wish.map((wishItem, index) => <tr key={wishItem._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={wishItem.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">

                                            <div>
                                                <div>{wishItem.tourType}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{wishItem.tripTitle}</div>
                                    </td>
                                    <td><Link><button className="btn btn-ghost btn-xs">Details</button></Link></td>
                                    <th>
                                        <button onClick={() => handleDelete(wishItem._id)} className="btn btn-ghost btn-sm text-lg text-red-600"><FaTrash></FaTrash></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Wishlist;