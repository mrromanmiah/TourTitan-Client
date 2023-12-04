
import useBooking from "../../../hooks/useBooking";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Bookings = () => {
    const [booking, refetch] = useBooking()
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#29b3ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
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
                <p className="font-medium">List of my bookings</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Bookings</h1>
            </div>



            <div>
                <div className="overflow-x-auto rounded-xl bg-white">
                    <table className="table">

                        <thead className="bg-[#ffb229] text-sm text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Package Name</th>
                                <th>Tour Guide</th>
                                <th>Tour Date</th>
                                <th>Tour Price</th>
                                <th>Status</th>
                                <th>Accept</th>
                                <th>Pay</th>
                                <th>Cancel</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((bookedItem, index) => <tr key={bookedItem._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                    <div className="font-bold">{bookedItem.tripTitle}</div>
                                    </td>
                                    <td>
                                    <div>{bookedItem.guide}</div>
                                    </td>
                                    <td>
                                    <div>{bookedItem.date}</div>
                                    </td>
                                    <td>
                                    <div>${bookedItem.price}</div>
                                    </td>
                                    <td>
                                    <div>{bookedItem.status}</div>
                                    </td>
                                    
                                    <td>
                                        <button className="btn bg-green-600 text-xs text-white btn-sm">Accept</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-purple-600 text-xs text-white btn-sm">Pay</button>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(bookedItem._id)} className="btn bg-red-600 btn-sm text-xs text-white">Cancel</button>
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

export default Bookings;