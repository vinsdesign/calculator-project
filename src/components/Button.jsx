export default function Button({ text = "Null Button", className = null }) {
  return (
    <>
      <button
        className={`text-gray-500 w-20 h-20 rounded-lg shadow-[-6px_-4px_20px_0px_rgba(0,0,0,0.1)] shadow-gray-600 p-5 hover:bg-orange-500 hover:text-gray-800 transition duration-500 ease-in-out hover:shadow-[-6px_-4px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-orange-500 font-semibold cursor-pointer text-xl ${className}`}
      >
        {text}
      </button>
    </>
  );
}
