import { useContext } from "react";
import { AuthContext } from "../Hooks/Auth/UseAuth";

export function useAuth() {
  return useContext(AuthContext);
}