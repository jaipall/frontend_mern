import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleResgister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const dataObj = {
      email,
      password,
    };
    // console.log(dataObj);
    const resp = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await resp.json();
    if (resp.status == 201) {
      alert("Registration Successful");
      navigate("/login");
    } else {
      alert("Registration Error", result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <form
        onSubmit={handleResgister}
        className="p-5 flex flex-col items-start gap-4 bg-emerald-200 rounded-lg"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800 shadow-md p-4 bg-white rounded-xl border border-gray-200">
            Create Account
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <lebel className="text-gray-700" htmlFor="user-email">
            Email
          </lebel>
          <input
            id="user-email"
            type="email"
            name="email"
            required
            className="border-1 rounded-md py-1 px-2 text-indigo-700"
          ></input>
        </div>

        <div className="flex gap-4 items-center">
          <lebel className="text-gray-700" htmlFor="user-password">
            Password
          </lebel>
          <input
            id="user-password"
            type="password"
            name="password"
            required
            className="border-1 rounded-md py-1 px-2 text-indigo-700"
          ></input>
        </div>

        <div className="flex flex-col gap-3 items-center self-stretch">
          <button className="border-1 py-1 px-2 rounded-lg text-xl bg-blue-700 text-white cursor-alias">
            Resgister
          </button>
          <p className="flex flex-col gap-2 items-center justify-center">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500 ">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export { SignupPage };
