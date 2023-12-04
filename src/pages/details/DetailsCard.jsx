import { Accordion } from 'flowbite-react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const DetailsCard = ({ details, filteredData }) => {
    const { tripTitle, gallery, description, tourType, price, tourPlan } = details || {};

    return (
        <div className='lg:mx-40 md:mx-10 mx-5 mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Package Details</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">{tripTitle}</h1>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="grid grid-cols-1 gap-2">
                    <img className='rounded-xl' src={gallery[0]} alt="" />
                    <img className='rounded-xl' src={gallery[1]} alt="" />
                </div>
                <div className="col-span-2 row-span-2">
                    <img className='rounded-xl' src={gallery[2]} alt="" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <img className='rounded-xl' src={gallery[3]} alt="" />
                    <img className='rounded-xl' src={gallery[4]} alt="" />
                </div>
            </div>

            <div className="mt-5 space-y-1 text-center">
                <h1 className="text-2xl font-black text-[#ffb229] underline mb-4">Information</h1>
                <h3 className="text-xl font-bold">{tripTitle}</h3>
                <p className="text-sm">{description}</p>
                <p className="font-semibold">Type : {tourType}</p>
                <p className="font-semibold">Price : ${price}</p>
            </div>

            <div className="mt-10 text-center">
                <h1 className="text-2xl font-black text-[#ffb229] underline">Tour Plan</h1>
                <div className='mt-5'>
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title> <span className='flex items-center gap-2 text-[#ffb229] font-bold'>Day - 1 <FaArrowAltCircleRight /></span> Unveiling the Wonders</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                                    {tourPlan[0]}
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title><span className='flex items-center gap-2 text-[#ffb229] font-bold'>Day - 2 <FaArrowAltCircleRight /></span> Hidden Gems Expedition</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                                    {tourPlan[1]}
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title><span className='flex items-center gap-2 text-[#ffb229] font-bold'>Day - 3 <FaArrowAltCircleRight /></span>Explore Local Flavors</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                                    {tourPlan[2]}
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>

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


            <div className="mt-10 ">
                <h1 className="text-2xl font-black text-[#ffb229] underline text-center">Booking Form</h1>

<div>
<form  className="space-y-4">
                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Package Image</p>
                        <input className="w-full px-4 py-2 rounded-lg" type="text" name="image" placeholder="Package Image URL" />
                    </div>
                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Trip Title</p>
                        <input className="w-full px-4 py-2 rounded-lg" type="text" name="tripTitle" placeholder="Trip Title" />
                    </div>
                   

                    <input className="flex items-center mx-auto bg-[#ffb229]  text-white font-bold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black" type="submit" />
                </form>
</div>
                


                {/* <select className="select select-warning w-full max-w-xs">
  <option disabled selected>Guides</option>
  {filteredData.map((guide, index) => (
                        <option key={index} value={guide.name}>{guide.name}</option>
                    ))}
  
</select> */}
            </div>

        </div>
    );
};

export default DetailsCard;