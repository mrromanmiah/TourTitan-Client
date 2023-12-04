import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="h-screen w-screen items-center lg:flex md:flex flex-none">
    <div className="container flex lg:flex-row flex-col-reverse md:flex-row items-center justify-between px-5 lg:text-left md:text-left text-center">
            <div className="w-full lg:w-1/2 mx-20">
                <div className="text-7xl text-[#05ac39] font-dark font-extrabold mb-8"> 404</div>
            <p className="lg:text-3xl md:text-xl text-xl font-light leading-normal mb-10">
                Sorry we could not find the page you are looking for
            </p>
            
            <Link to="/"><a href="#" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-full focus:outline-none bg-[#05ac39] active:bg-red-600 hover:bg-red-700">Homepage</a></Link>
    </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-20 my-12">
            <img src="https://i.ibb.co/ZdMSXnJ/Asset-1.png" alt="Page not found" />
        </div>
    
    </div>
</div>
        </div>
    );
};

export default Error;