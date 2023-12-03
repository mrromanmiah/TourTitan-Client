import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleMakeGuide = user => {
        axiosSecure.patch(`/users/guide/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is a tour guide now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Change User's Role</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Manage User</h1>
            </div>


            <div>
                <div className="overflow-x-auto rounded-xl bg-white">
                    <table className="table">

                        <thead className="bg-[#ffb229] text-sm text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Make Guide</th>
                                <th>Make Admin</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>{user.email}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.role}</div>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleMakeGuide(user)}
                                            className={`btn btn-sm bg-[#29b3ff] text-white ${user.role === 'admin' || user.role === 'guide' ? 'disabled' : ''}`}
                                            disabled={user.role === 'admin' || user.role === 'guide'}
                                        >
                                            Make Guide
                                        </button>
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className={`btn btn-sm bg-[#ffb229] text-white ${user.role === 'admin' || user.role === 'guide' ? 'disabled' : ''}`}
                                            disabled={user.role === 'admin' || user.role === 'guide'}
                                        >
                                            Make Admin
                                        </button>
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

export default ManageUser;