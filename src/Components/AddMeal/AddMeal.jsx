import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddMeal = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
    fetch("http://localhost:5000/addMeals", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.acknowledged) {
                alert("Product Added SUccesfully");
            }
            });
  };

  return (
    <div className='bg-gradient-to-tr from-green-500 to-green-100 py-8 px-28 flex items-center justify-center'>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  my-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full rounded-md p-2 border-solid border-emerald-900 border-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Breakfast</label>
          <Controller
            name="breakfast"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Snack 1</label>
          <Controller
            name="snack1"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Lunch</label>
          <Controller
            name="lunch"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Snack 2</label>
          <Controller
            name="snack2"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Dinner</label>
          <Controller
            name="dinner"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Total Calories</label>
          <Controller
            name="totalCalories"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Weekly Price</label>
          <Controller
            name="weeklyPrice"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <label className="block text-gray-700">Monthly Price</label>
          <Controller
            name="monthlyPrice"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" className="w-full border-solid border-emerald-900 border-2 rounded-md p-2" />}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-emerald-900 text-white hover:text-emerald-900 hover:bg-white
            px-8 font-bold hover:border-emerald-900 hover:border transition-colors rounded-md p-2 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddMeal;
