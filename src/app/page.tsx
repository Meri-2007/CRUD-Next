import { deleteUser } from "@/_helpers.ts/actions";
import { getAllUsers } from "@/_helpers.ts/model";
import Link from "next/link";

export default function Home() {
  const users = getAllUsers();

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Users List
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white text-left border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 border-b border-gray-300 text-gray-800">ID</th>
              <th className="p-4 border-b border-gray-300 text-gray-800">Name</th>
              <th className="p-4 border-b border-gray-300 text-gray-800">
                Surname
              </th>
              <th className="p-4 border-b border-gray-300 text-gray-800">Age</th>
              <th className="p-4 border-b border-gray-300 text-gray-800">
                Salary
              </th>
              <th className="p-4 border-b border-gray-300 text-gray-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
              >
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {user.id}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {user.name}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {user.surname}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {user.age}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  {user.salary}
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-700">
                  <div className="flex space-x-4">
                    <Link
                      href={`/users/edit/${user.id}`}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-600 transition-all"
                    >
                      Edit
                    </Link>
                    <form action={deleteUser.bind(null,user.id)} >
                      <button
                        type="submit"
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-700 transition-all"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/users/add"
          className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition-all"
        >
          Add User
        </Link>
      </div>
    </div>
  );
}
