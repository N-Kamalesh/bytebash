import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiRegister, apiLogin } from "../api/auth";

const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const initialState = {
  user: null,
  isAuthenticated: Cookies.get("token") ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case "auth/success":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "auth/logout":
      return { ...state, isAuthenticated: false, user: null };
    case "token/loaded": // Add this case
      return { ...state, isAuthenticated: true, user: action.payload.user };
    default:
      console.error("Unknown action type provided");
      return state;
  }
}

export function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();

  async function handleRegister(data) {
    await toast.promise(apiRegister({ ...data }), {
      loading: "Registering...",
      success: (res) => {
        dispatch({ type: "auth/success", payload: res.user });
        navigate("/login");
        return res.message;
      },
      error: (err) => err?.message || "Registration failed",
    });
  }

  async function handleLogin(data) {
    try {
      await toast.promise(
        apiLogin({ ...data }).then((res) => {
          dispatch({ type: "auth/success", payload: res.user });
          Cookies.set("token", res.token, { expires: 6 });
          navigate("/");
          return res.message;
        }),
        {
          loading: "Logging in...",
          success: (resMessage) => resMessage,
          error: (err) => {
            const errorMsg = err?.message || "Login failed";
            if (errorMsg === "Resgister before login.") {
              navigate("/register");
            }

            return errorMsg;
          },
        }
      );
    } catch (error) {
      console.error("Login Error:", error);
    }
  }

  function handleLogout() {
    Cookies.remove("token");
    dispatch({ type: "auth/logout" });
    toast.success("Logged out successfully!");
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
