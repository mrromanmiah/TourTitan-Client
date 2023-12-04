

const TourGuides = ({filteredData}) => {
    return (
        <div className="mt-10 text-center">
                <h1 className="text-2xl font-black text-[#ffb229] underline">Tour Guides</h1>
                <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    {filteredData.map((guide, index) => (
                        <div key={index} className='rounded-lg overflow-hidden shadow-md p-5 bg-base-200'>
                            <div>
                                <img src={guide.photoURL} alt="" className='w-full rounded-full' />
                                <div className=''>
                                    <p className='text-center mt-3 text-xl font-bold text-[#29b3ff]'>{guide.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default TourGuides;