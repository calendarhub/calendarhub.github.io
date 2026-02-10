"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Shield,
  FileText,
  Cookie,
  Users,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <Users className="w-4 h-4" /> },
  ];

  const legalItems = [
    {
      path: "/privacy",
      label: "Privacy Policy",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      path: "/terms",
      label: "Terms of Service",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      path: "/cookies",
      label: "Cookie Policy",
      icon: <Cookie className="w-4 h-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div>
              <img src="./favicon.png" className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CalendarHub</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {/* Legal Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLegalMenuOpen(!isLegalMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Legal</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isLegalMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLegalMenuOpen && (
                <>
                  <div
                    className="fixed inset-0"
                    onClick={() => setIsLegalMenuOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {legalItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsLegalMenuOpen(false)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-px h-6 bg-gray-200" />

            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}

              <div className="px-4 py-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Legal
                </h3>
                <div className="space-y-1">
                  {legalItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
