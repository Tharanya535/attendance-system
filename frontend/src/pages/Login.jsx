import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  async function submit(e) {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));

    if (result.meta.requestStatus === "fulfilled") {
      const role = result.payload.user.role;
      navigate(role === "manager" ? "/manager" : "/employee");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 
      bg-gradient-to-br from-[#05010F] via-[#160028] to-[#00061A]">
      
      <div className="w-full max-w-md bg-[var(--bg-card)] 
        border border-[var(--accent-blue)]/30 
        rounded-3xl p-10 backdrop-blur-xl 
        animate-fadeIn shadow-[0_0_25px_rgba(0,255,255,0.2)]">

        <h1 className="text-4xl font-extrabold text-center 
          bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)] 
          bg-clip-text text-transparent mb-4 drop-shadow-lg">
          
        </h1>

        

        <form onSubmit={submit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/5 text-white 
            border border-[var(--accent-blue)]/30 
            focus:outline-none focus:ring-2 focus:ring-[var(--accent-pink)] transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/5 text-white 
            border border-[var(--accent-blue)]/30 
            focus:outline-none focus:ring-2 focus:ring-[var(--accent-pink)] transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-400 text-center text-sm mt-2 bg-red-500/10 py-2 rounded-lg">
              {error}
            </p>
          )}

          <Button className="w-full bg-gradient-to-r 
            from-[var(--accent-blue)] to-[var(--accent-pink)] 
            hover:opacity-90 text-white font-semibold py-3 rounded-xl 
            shadow-lg shadow-[var(--accent-blue)]/40">
            {loading ? "ACCESSING..." : "LOGIN"}
          </Button>
        </form>

        <p className="mt-6 text-center text-[var(--text-dim)]">
          New user?
          <a href="/register" className="text-[var(--accent-pink)] font-semibold ml-1">
            Register
          </a>
        </p>

      </div>
    </div>
  );
}
