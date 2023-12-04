import Swal from "sweetalert2";
import { useState } from "react";

const AddPackage = () => {
    const [galleryUrls, setGalleryUrls] = useState(["", "", "", "", ""]);
    const [tourPlanDays, setTourPlanDays] = useState(["", "", ""]);

    const handleAddPackage = async (event) => {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const tripTitle = form.tripTitle.value;
        const tourType = form.tourType.value;
        const price = form.price.value;
        const description = form.description.value;
        const newPackage = {
            image,
            tripTitle,
            tourType,
            price,
            description,
            gallery: galleryUrls,
            tourPlan: tourPlanDays,
        };

        try {
            const response = await fetch("https://tour-titan-server.vercel.app/packages", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newPackage),
            });

            const data = await response.json();

            if (data.insertedId) {
                Swal.fire(
                    "Good job!",
                    "You added this package successfully!",
                    "success"
                );
                form.reset();
            }
        } catch (error) {
            console.error("Error adding package:", error);
        }
    };

    const handleGalleryInputChange = (index, event) => {
        const newGalleryUrls = [...galleryUrls];
        newGalleryUrls[index] = event.target.value;
        setGalleryUrls(newGalleryUrls);
    };

    const handleTourPlanInputChange = (index, event) => {
        const newTourPlanDays = [...tourPlanDays];
        newTourPlanDays[index] = event.target.value;
        setTourPlanDays(newTourPlanDays);
    };

    return (
        <div className="mb-20">
            <div className="text-center my-10">
                <p className="font-medium">Open A New Dream</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Add Package</h1>
            </div>

            <div>
                <form onSubmit={handleAddPackage} className="space-y-4">
                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Package Image</p>
                        <input className="w-full px-4 py-2 rounded-lg" type="text" name="image" placeholder="Package Image URL" />
                    </div>
                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Trip Title</p>
                        <input className="w-full px-4 py-2 rounded-lg" type="text" name="tripTitle" placeholder="Trip Title" />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="mb-1 font-bold text-[#29b3ff]">Tour Type</p>
                            <select className="w-full px-4 py-2 rounded-lg" name="tourType" >
                                <option selected>Select Tour Type</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Beach">Beach</option>
                                <option value="Cultural">Cultural</option>
                                <option value="Island">Island</option>
                                <option value="Nature">Nature</option>
                                <option value="Wildlife">Wildlife</option>
                            </select>
                        </div>
                        <div>
                            <p className="mb-1 font-bold text-[#29b3ff]">Price</p>
                            <input className="w-full px-4 py-2 rounded-lg" type="number" name="price" placeholder="Price" />
                        </div>
                    </div>

                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Description</p>
                        <input className="w-full h-20 px-4 py-2 rounded-lg" type="text" name="description" placeholder="Write a short description..." />

                    </div>
                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Gallery</p>
                        <div className="space-y-3">
                            {galleryUrls.map((url, index) => (
                                <input
                                    key={index}
                                    className="w-full px-4 py-2 rounded-lg"
                                    type="text"
                                    name="gallery"
                                    placeholder={`Image URL ${index + 1}`}
                                    value={url}
                                    onChange={(event) =>
                                        handleGalleryInputChange(index, event)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-1 font-bold text-[#29b3ff]">Tour Plan</p>
                        <div className="space-y-3">
                            {tourPlanDays.map((day, index) => (
                                <input
                                    key={index}
                                    className="w-full px-4 py-2 rounded-lg"
                                    type="text"
                                    name="tourPlan"
                                    placeholder={`Day ${index + 1}`}
                                    value={day}
                                    onChange={(event) =>
                                        handleTourPlanInputChange(index, event)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <input className="flex items-center mx-auto bg-[#ffb229]  text-white font-bold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;
