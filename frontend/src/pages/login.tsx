import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
