import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

export default function Header() {
  const { user, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="px-8 py-4 border-b border-[var(--accent-blue)]/20 
      bg-[#090a14] shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        <h1 className="text-2xl font-bold bg-gradient-to-r 
          from-[var(--accent-blue)] to-[var(--accent-pink)] 
          text-transparent bg-clip-text">
          TAP ACADEMY
        </h1>

        {token && user && (
          <nav className="flex items-center gap-6 text-lg">
            
            {user.role === "employee" && (
              <>
                <Link to="/employee" className="hover:text-[var(--accent-blue)]">Dashboard</Link>
                <Link to="/employee/check" className="hover:text-[var(--accent-blue)]">Check</Link>
                <Link to="/employee/history" className="hover:text-[var(--accent-blue)]">History</Link>
              </>
            )}

            {user.role === "manager" && (
              <Link to="/manager" className="hover:text-[var(--accent-blue)]">Manager Panel</Link>
            )}

            <button
              onClick={() => dispatch(logout())}
              className="px-4 py-1.5 rounded-lg 
                bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)] 
                text-white font-semibold">
              Logout
            </button>
          </nav>
        )}

      </div>
    </header>
  );
}
