const Navbar = () => {
  return (
    <header className="flex justify-between items-center lg:p-16 md:p-12 p-8">
      <h2 className="text-2xl font-bold">My API Store</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </header>
  );
};

export default Navbar;