import { editUser } from "@/_helpers.ts/actions";
import { getUserById } from "@/_helpers.ts/model";
import { use } from "react";

interface IProps {
  params: { id: number };
}

export default function EditUser({ params }: IProps) {
  console.log(params.id);
  const user = getUserById(params.id);
  console.log(user);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit User</h1>
        <form className="space-y-6" action={editUser}>
          <input type="hidden" name="id" value={params.id} />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              placeholder="Enter name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              defaultValue={user.surname}
              placeholder="Enter surname"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              defaultValue={user.age}
              placeholder="Enter age"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              defaultValue={user.salary}
              placeholder="Enter salary"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
