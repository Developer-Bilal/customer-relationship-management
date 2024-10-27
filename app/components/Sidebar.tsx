import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 max-h-full bg-gray-800 text-white">
      <div className="p-4 text-lg font-semibold">
        <Link href="/">Dashboard</Link>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">Users</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/clients">Clients</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/developers">Developers</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">Profile</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">Settings</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

// // app/components/Sidebar.js
// "use client"; // Add this if you're using client-side code

// const Sidebar = () => {
//   return (
//   );
// };

// export default Sidebar;
