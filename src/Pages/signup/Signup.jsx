// Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Authcontext";
import { toast } from "react-toastify";
import AuthFormLayout from "../../Hooks/Auth/Authform";
import SignupForm from "./SignupForm";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase"; // make sure you have this

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignupSubmit = async (formData) => {
    const { fullName, email, password } = formData;

    try {
      // Step 1: Create user
      await signup(email, password);

      // Step 2: Update profile with fullName
      await updateProfile(auth.currentUser, {
        displayName: fullName
      });

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
