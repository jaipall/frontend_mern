import { Link } from "react-router";
import { useMyContext } from "../context/MyContext";

const Navbar = () => {
  const { count } = useMyContext();
  return (
    <div className="py-4 px-6 flex justify-between bg-amber-100">
      <div className="font-bold text-emerald-600">Shopping App!</div>
      <div className="flex gap-2">
        <input
          className="border-1 py-1 px-2 rounded-md"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            return e.target.value;
          }}
        />
        <button className="b-1 py-1 rounded-md ">Submit</button>
      </div>
      <div className="flex gap-2">
        <Link to="/profile">Profile</Link>
        <Link to="/signup">SignUp</Link>
        <p>value:{count}</p>
      </div>
    </div>
  );
};
export { Navbar };
