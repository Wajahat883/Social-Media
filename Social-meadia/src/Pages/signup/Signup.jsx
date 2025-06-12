// Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth/UseAuth";
import { toast } from "react-toastify";
import AuthFormLayout from "../../Hooks/Auth/Authform";
import SignupForm from "./SignupForm";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignupSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      await signup(email, password); 
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Signup failed: " + error.message);
    }
  };

  return (
    <AuthFormLayout
      title="Create Your Account"
      subtitle="Already have an account?"
      linkText="Login"
      linkTo="/login"
    >
      <SignupForm onSubmit={handleSignupSubmit} />
    </AuthFormLayout>
  );
}
