import Link from "next/link";
import { getProjects } from "../getData";

interface Project {
  id: string;
  title: string;
  client: string;
  developer: string;
  status: string;
}

const Projects = async () => {
  const projects = await getProjects();
  console.log(projects);

  return (
    <div className="m-4">
      <div className="my-2 flex items-center justify-end">
        <Link href="/projects/new">
          <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
            Add Project
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left w-1/3">Title</th>
            <th className="py-3 px-6 text-left w-1/3">Client</th>
            <th className="py-3 px-6 text-left w-1/3">Developer</th>
            <th className="py-3 px-6 text-left w-1/3">Status</th>
            <th className="py-3 px-6 text-left w-1/3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {projects.data.map((project: Project) => (
            <tr
              key={project.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{project.title}</td>
              <td className="py-3 px-6">{project.client}</td>
              <td className="py-3 px-6">{project.developer}</td>
              <td className="py-3 px-6">{project.status}</td>
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

export default Projects;
