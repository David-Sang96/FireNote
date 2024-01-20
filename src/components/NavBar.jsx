/* eslint-disable react/prop-types */
const NavBar = ({ setActive, active }) => {
  return (
    <nav className="flex justify-between items-center md:w-1/3 mx-auto">
      <h1 className="text-center text-4xl font-serif text-purple-700 md:text-5xl">
        FireNote
      </h1>
      <button
        className="shadow bg-purple-500 hover:bg-purple-400 w-[130px] md:w-[160px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
        type="button"
        onClick={() => setActive((prev) => !prev)}
      >
        {`${active ? "Hide Notes" : "Show Notes"}`}
      </button>
    </nav>
  );
};

export default NavBar;
