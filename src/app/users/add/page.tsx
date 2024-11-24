import { addUser } from "@/_helpers.ts/actions";

export default function AddUser() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add User</h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to add a new user to the system.
          </p>
          <form className="space-y-6" action={addUser}>
            {/* //harcman zhamanak inch petqa ashxtai */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
  
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Enter surname"
                className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
  
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Enter age"
                className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
  
            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                placeholder="Enter salary"
                className="w-full p-3 border rounded-lg bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-pink-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-pink-200 transition-all focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    );
  }
  