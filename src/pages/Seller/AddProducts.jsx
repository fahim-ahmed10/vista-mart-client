import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
    clearErrors();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="grid grid-cols-2 gap-4">
          {/* Title */}
          <div className="form-control relative">
            <label
              htmlFor="title"
              className="labelTextClr text-sm md:text-base font-medium pb-1"
            >
              Title
            </label>
            <input
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title must not be empty",
                },
              })}
              placeholder="Enter product title"
              className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.title && (
              <div className="pt-1">
                <span className="text-red-600 text-sm">
                  {errors.title.message}
                </span>
              </div>
            )}
          </div>
          {/* Brand */}
          <div className="form-control relative">
            <label
              htmlFor="brand"
              className="labelTextClr text-sm md:text-base font-medium pb-1"
            >
              Brand
            </label>
            <input
              type="text"
              {...register("brand", {
                required: {
                  value: true,
                  message: "Brand must not be empty",
                },
              })}
              placeholder="Enter Brand name"
              className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.brand && (
              <div className="pt-1">
                <span className="text-red-600 text-sm">
                  {errors.brand.message}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* price */}
          <div className="form-control relative">
            <label
              htmlFor="price"
              className="labelTextClr text-sm md:text-base font-medium pb-1"
            >
              Price
            </label>
            <input
              type="text"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price must not be empty",
                },
              })}
              placeholder="Enter product price"
              className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.price && (
              <div className="pt-1">
                <span className="text-red-600 text-sm">
                  {errors.price.message}
                </span>
              </div>
            )}
          </div>
          {/* stock */}
          <div className="form-control relative">
            <label
              htmlFor="stock"
              className="labelTextClr text-sm md:text-base font-medium pb-1"
            >
              Stock
            </label>
            <input
              type="text"
              {...register("stock", {
                required: {
                  value: true,
                  message: "Stock must not be empty",
                },
              })}
              placeholder="Enter product stock"
              className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                errors.stock ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.stock && (
              <div className="pt-1">
                <span className="text-red-600 text-sm">
                  {errors.stock.message}
                </span>
              </div>
            )}
          </div>
          {/* Category */}
          <div className="form-control relative">
            <label
              htmlFor="category"
              className="labelTextClr text-sm md:text-base font-medium pb-1"
            >
              Category
            </label>
            <input
              type="text"
              {...register("category", {
                required: {
                  value: true,
                  message: "Category must not be empty",
                },
              })}
              placeholder="Enter product stock"
              className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
                errors.category ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.category && (
              <div className="pt-1">
                <span className="text-red-600 text-sm">
                  {errors.category.message}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* description */}
        <div className="form-control relative">
          <label
            htmlFor="description"
            className="labelTextClr text-sm md:text-base font-medium pb-1"
          >
            Description
          </label>
          <input
            type="text"
            {...register("description", {
              required: {
                value: true,
                message: "Description must not be empty",
              },
            })}
            placeholder="Enter product description"
            className={`text-sm md:text-base input input-bordered focus:outline-none focus:ring-1 pr-10 ${
              errors.description ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.description && (
            <div className="pt-1">
              <span className="text-red-600 text-sm">
                {errors.description.message}
              </span>
            </div>
          )}
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-purple-600 hover:bg-purple-700 w-full mx-auto text-lg md:text-xl text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
