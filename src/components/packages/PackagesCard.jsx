import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWishlist from "../../hooks/useWishlist";



const PackagesCard = ({ tourPackage }) => {

  const { _id, image, tourType, tripTitle, price} = tourPackage || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useWishlist();

  const handleAddToWishlist = () => {
   if(user && user.email){
    const wishPackages = {
        wishId: _id,
        email: user.email,
        image,
        tripTitle,
        tourType,
        price
    }
    axiosSecure.post('/wishlist', wishPackages) 
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "Thanks!",
          text: "This package added to your wishlist!",
          icon: "success"
        });
        refetch()
      }
    })
   }
   else{
    Swal.fire({
      title: "Add it to the wishlist?",
      text: "You need to login now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#29b3ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(location?.state ? location.state : '/login');
      }
    });
   }
  }

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src={image}
          alt="ui/ux review check"
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button onClick={handleAddToWishlist}
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6">

        <h5 className="lg:text-2xl md:text-lg text-left font-black">
          {tripTitle}
        </h5>


        <div className="flex items-center justify-between mt-3">
          <button className="bg-[#29b3ff] lg:text-base md:text-sm text-xs font-medium px-3 py-1 text-white flex flex-initial rounded-md">{tourType}</button>
          <p className="flex items-center lg:text-3xl md:text-lg  font-bold text-gray-600">
            ${price}
          </p>
        </div>
      </div>
      <div className="p-6 pt-3">
        <Link to={`/details/${_id}`}><button
          className="block w-full select-none rounded-lg bg-[#ffb229] py-2 text-center align-middle lg:text-lg md:text-base text-sm font-bold text-white shadow-md shadow-[#ffb229]/20 transition-all hover:shadow-lg hover:shadow-[#ffb229]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          View Package
        </button></Link>
      </div>
    </div>
  );
};

export default PackagesCard;