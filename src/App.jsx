import React from "react";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="bg-gray-800 w-96 rounded-2xl p-5">
              <div className="grid grid-cols-4 gap-3">
                <input className="col-span-4" type="text" />
                <button className="bg-gray-200 rounded-lg shadow-2xl p-5">
                  AC
                </button>
                <button className="bg-gray-200 shadow-2xl p-5">
                  <sup>+</sup>/ <sub>-</sub>
                </button>
                <button className="bg-gray-200 shadow-2xl p-5">AC</button>
                <button className="bg-gray-200 shadow-2xl p-5">AC</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
