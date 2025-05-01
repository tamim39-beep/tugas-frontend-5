import { useState } from "react";

export default function App() {
  conts[(isLoggeIn, setIsLoggedIn)] = userState(true);

  function Dashboard() {
    return <h1 className="p-2 bg-blue-800 text-white text-4xl">Dashboard</h1>;
  }
}

function LoginForm() {
  return (
    <h1 className="p-2 bg-yellow-800 text-white text-4xl">This Login Form</h1>
  );
}
return (
  <div>
    <button
      className="bg-scale-300 p-2"
      onClick={() => setIsLoggedIn(!isLoggeIn)}
    >
      Login Sekarang
    </button>
    {isLoggeIn ? <Dashboard /> : <LoginForm />}
  </div>
);
