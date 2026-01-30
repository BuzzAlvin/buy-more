import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <main className="min-h-screen flex flex-col flex-1 items-center justify-center bg-gray-200">
      <div className=" py-6 mt-20 shadow-xl bg-white border-gray-400 rounded-lg px-3 gap-6 w-xs sm:w-lg">
        <h2 className="font-bold lg:text-4xl text-3xl text-center text-gray-800">
          Sign in
        </h2>
        <p className="text-center lg:text-xl text-lg text-gray-600 mt-2">
          Welcome back to BuyMore
        </p>

        <form className="pt-6 flex flex-col gap-2">
          <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="signIn">Sign In</Button>
        </form>
        <div className="flex items-center">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="px-3 lg:text-md text-sm text-gray-500"> Or continue with</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <Button variant="white">Continue with Google</Button>

        <div className="mt-4 text-center lg:text-md text-sm text-gray-600">
          Don't have an account?
          {" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
