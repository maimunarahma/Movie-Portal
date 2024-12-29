import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const data = useLoaderData();
    console.log(data);

    // State for form fields
    const [formData, setFormData] = useState({
        title: data?.title || "",
        overview: data?.overview || "",
        rating: data?.rating || "",
        poster: data?.poster || "",
        genre: data?.genre || "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:4000/update/${data._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.matchedCount > 0) {
                    Swal.fire("Success!", "Movie updated.", "success");
                } else {
                    Swal.fire("Error!", "Something went wrong while updating.", "error");
                }
            })
            .catch((error) => {
                console.error("Error during update:", error);
                Swal.fire("Error!", "Failed to update the movie.", "error");
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-5">
            <h1 className="text-center font-bold text-3xl my-5 text-gray-900 dark:text-gray-200">
                Update Movie
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
                {/* Movie Name */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text text-gray-700 dark:text-gray-300">
                            Movie Name
                        </span>
                    </label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        type="text"
                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
                        placeholder="Enter movie title"
                        required
                    />
                </div>

                {/* Overview */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text text-gray-700 dark:text-gray-300">
                            Overview
                        </span>
                    </label>
                    <textarea
                        name="overview"
                        value={formData.overview}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
                        placeholder="Enter movie overview"
                        rows="4"
                    />
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text text-gray-700 dark:text-gray-300">
                            Rating
                        </span>
                    </label>
                    <input
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        type="number"
                        step="0.1"
                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
                        placeholder="Enter movie rating"
                        required
                    />
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text text-gray-700 dark:text-gray-300">
                            Genre
                        </span>
                    </label>
                    <input
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        type="text"
                        className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
                        placeholder="Enter movie genre"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
