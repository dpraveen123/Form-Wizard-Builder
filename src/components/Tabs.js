import React from "react";

const Tabs = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Profile", "Interest", "Settings"];

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded ${
            currentTab === tab ? "bg-blue-500 text-white" : "bg-gray-300"
          } hover:bg-blue-400`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
