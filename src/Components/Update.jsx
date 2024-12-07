
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const data = useLoaderData();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: data?.title || "",
            overview: data?.overview || "",
            rating: data?.rating || "",
            genre: data?.genre || "",
        },
    });

    // Handle form submission
    const onSubmit = (formData) => {
        console.log(formData);

        fetch(`http://localhost:4000/update/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.matchedCount > 0) {
                    Swal.fire("Success!", "Movie updated.", "success");
                    reset();
                } else {
                    Swal.fire("Error!", "Something went wrong while updating.", "error");
                }
            })
            .catch((error) => {
                console.error("Unexpected error:", error);
                Swal.fire("Error!", "Unexpected server error.", "error");
            });
    };

    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-5">Update Movie</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[60%] mx-auto p-5"
            >
                <div className="flex justify-between items-center gap-5">

                    <input
                        {...register("name", { required: "Title is required" })}
                        type="text"
                        className="dark:bg-gray-900 text-gray-900 dark:text-gray-200 w-1/2 rounded-lg border-2 p-3"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                    )}

                    <input
                        {...register("overview", { required: "Overview is required" })}
                        type="text"
                        className="dark:bg-gray-900 text-gray-900 dark:text-gray-200 w-1/2 rounded-lg border-2 p-3"
                    />
                    {errors.overview && (
                        <p className="text-red-500">{errors.overview.message}</p>
                    )}
                </div>

                <div className="flex justify-between items-center gap-5 my-3">
                
                    <input
                        {...register("rating", { required: "Rating is required" })}
                        type="text"
                        className="dark:bg-gray-900 text-gray-900 dark:text-gray-200 w-1/2 rounded-lg border-2 p-3"
                    />
                    {errors.rating && (
                        <p className="text-red-500">{errors.rating.message}</p>
                    )}

                    <input
                        {...register("genre", { required: "Genre is required" })}
                        type="text"
                        className="dark:bg-gray-900 text-gray-900 dark:text-gray-200 w-1/2 rounded-lg border-2 p-3"
                    />
                    {errors.genre && (
                        <p className="text-red-500">{errors.genre.message}</p>
                    )}
                </div>

                <button className="w-full btn bg-red-600">Submit</button>
            </form>
        </div>
    );
};

export default Update;
