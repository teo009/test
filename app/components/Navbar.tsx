const Navbar = (): JSX.Element => {
  return (
    <nav className="w-[88%] h-14 flex justify-end border-y-[1px] sticky top-0">
      <ul className="w-full md:w-[420px] h-full flex items-center justify-between text-lg">
        <li>Technologies</li>
        <li>Projects</li>
        <li>|</li>
        <div className="">🇪(es)</div>
        <div className="">🇺(en)</div>
      </ul>
    </nav>
  );
}

export default Navbar;
