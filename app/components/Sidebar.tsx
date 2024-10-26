const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 max-h-full bg-gray-800 text-white">
      <div className="p-4 text-lg font-semibold">Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Users</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Projects</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Clients</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Developers</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Profile</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Settings</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Logout</a>
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
