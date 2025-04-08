import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="bg-gray-800 w-[30rem] rounded-2xl p-10">
              <form action="" className="grid grid-cols-4 gap-3">
                <input className="col-span-4 mt-10" type="text" />
                <Button text="C" className="bg-gray-500 text-gray-800" />
                <Button text="+/-" className="bg-gray-500 text-gray-800" />
                <Button text="%" className="bg-gray-500 text-gray-800" />
                <Button
                  text="/"
                  className="bg-orange-500 hover:bg-orange-600 text-gray-800"
                />
                <Button text="7" />
                <Button text="8" />
                <Button text="9" />
                <Button
                  text="X"
                  className="bg-orange-500 hover:bg-orange-600 text-gray-800"
                />
                <Button text="4" />
                <Button text="5" />
                <Button text="6" />
                <Button
                  text="-"
                  className="bg-orange-500 hover:bg-orange-600 text-gray-800"
                />
                <Button text="1" />
                <Button text="2" />
                <Button text="3" />
                <Button
                  text="+"
                  className="bg-orange-500 hover:bg-orange-600 text-gray-800"
                />
                <div className="col-span-2">
                  <Button text="0" className="w-full" />
                </div>
                <Button text="." />
                <Button
                  text="="
                  className="bg-orange-500 hover:bg-orange-600 text-gray-800"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
