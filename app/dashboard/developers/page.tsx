import Link from "next/link";
import { getDevelopers } from "../getData";

interface Developer {
  id: string;
  name: string;
  email: string;
}

const Developers = async () => {
  const developers = await getDevelopers();
  console.log(developers);

  return (
    <div className="m-4">
      <div className="my-2 flex items-center justify-end">
        <Link href="/developers/new">
          <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
            Add Developer
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left w-1/3">Name</th>
            <th className="py-3 px-6 text-left w-1/3">Email</th>
            <th className="py-3 px-6 text-left w-1/3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {developers.data.map((developer: Developer) => (
            <tr
              key={developer.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{developer.name}</td>
              <td className="py-3 px-6">{developer.email}</td>
              <td className="py-3 px-6">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Developers;
