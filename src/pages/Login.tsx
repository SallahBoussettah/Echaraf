import { Button } from "@relume_io/relume-ui";
import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'student' | 'parent' | 'teacher'>('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const result = await login(formData.email, formData.password, userType);
    if (result.success) {
      // Redirect to dashboard or home page
      window.location.href = '/';
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18 bg-white border-b border-gray-100">
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-lg mx-auto">
            <div className="text-center mb-12">
              <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
                Welcome Back
              </h1>
              <p className="md:text-md">
                Sign in to access your learning dashboard and continue your educational journey with Echaraf.
              </p>
            </div>

            {/* User Type Selection */}
            <div className="mb-8">
              <p className="mb-4 text-sm font-semibold text-brand-primary">I am signing in as a:</p>
              <div className="grid grid-cols-3 gap-3">
                {(['student', 'parent', 'teacher'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all ${
                      userType === type
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <HiEyeSlash className="size-5" /> : <HiEye className="size-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-brand-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand-primary hover:bg-brand-primary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-brand-primary hover:underline font-medium">
                  Sign up here
                </a>
              </p>
            </div>


          </div>
        </section>
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}