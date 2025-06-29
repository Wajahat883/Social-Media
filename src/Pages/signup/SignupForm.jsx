import React, { useState } from 'react';
import {
  User, Mail, Lock, Eye, EyeOff, LogIn
} from 'lucide-react';
import { auth,googleProvider } from '../../Firebase/Firebase';
import { signInWithPopup } from 'firebase/auth';

const SignupForm = ({ onSubmit, onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onSubmit(formData);
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      alert('Google signup error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Full Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start space-x-2">
        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" required />
        <p className="text-sm text-gray-600">
          I agree to the{' '}
          <button type="button" className="text-blue-600 hover:underline">
            Terms
          </button>{' '}
          and{' '}
          <button type="button" className="text-blue-600 hover:underline">
            Privacy
          </button>
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold"
      >
        Create Account
      </button>

      {/* Google Auth Button */}
      <div className="text-center mt-4">
        <p className="text-gray-500 mb-3">or sign up with</p>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="bg-red-100 hover:bg-red-200 p-3 rounded-full"
          >
            <LogIn className="text-red-600 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toggle to Signin */}
      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onToggle}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
