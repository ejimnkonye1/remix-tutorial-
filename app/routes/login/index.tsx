import {json, ActionFunction } from "@remix-run/node";




// how to action for form submission (post request)
export const action : ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const name = formData.get('name')
    const email = formData.get('email')
    console.log('Form Submitted', { name, email });

    return json({ success: true });

}

export default function Contact() {
    return (
        <div className="pt-[140px] ">

        
      <form method="post" className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      </div>
    );
  }