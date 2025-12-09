import React from "react";

function Sidebar({ selectedTabs, setSelectedTabs }) {
  const HandleOnclick = (tabName) => {
    setSelectedTabs(tabName);
  };
  return (
    <aside className="w-64 bg-linear-to-b from-slate-800 to-slate-900 text-white min-h-screen shadow-xl p-6">
      <nav>
        <ul className="space-y-3">
          <li
            onClick={() => {
              HandleOnclick("Home");
            }}
          >
            <a
              href="#"
              className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                selectedTabs === "Home"
                  ? "bg-yellow-400 text-slate-900"
                  : "hover:bg-slate-700 hover:text-yellow-400"
              }`}
            >
              🏠 Home
            </a>
          </li>
          <li
            onClick={() => {
              HandleOnclick("Create Post");
            }}
          >
            <a
              href="#"
              className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                selectedTabs === "Create Post"
                  ? "bg-yellow-400 text-slate-900"
                  : "hover:bg-slate-700 hover:text-yellow-400"
              }`}
            >
              📊 Create Post
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 hover:text-yellow-400 transition-all duration-200 font-medium"
            >
              📦 Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 hover:text-yellow-400 transition-all duration-200 font-medium"
            >
              🛍️ Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 hover:text-yellow-400 transition-all duration-200 font-medium"
            >
              💬 Customer Help
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
