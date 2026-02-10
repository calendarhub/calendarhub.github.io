"use client";

import { useState } from "react";
import Link from "next/link";
import {  Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
            <div>
              <img src="./favicon.png" className="w-10 h-10 text-white" />
            </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">CalendarHub</h2>
                <p className="text-sm text-gray-600">
                  Global holiday information at your fingertips
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Providing accurate holiday data from around the world with a
              beautiful, intuitive interface.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://weather-pro.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center"
                >
                  Weather Pro
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "date-fns",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              <div className="flex items-center">
                © {year} CalendarHub. All rights reserved.
                <Heart className="w-4 h-4 text-red-400 mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
