import { Users, Target, Globe, Code, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <main className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-12 h-12 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                Making global holidays accessible to everyone
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            We believe that understanding and celebrating holidays from around
            the world helps build cultural awareness and brings people together.
            Our mission is to provide accurate, up-to-date holiday information
            in a simple, beautiful interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-6">
            <Globe className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Global Coverage
            </h3>
            <p className="text-gray-700">
              Holidays from over 20 countries across all continents
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <Code className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Open Data</h3>
            <p className="text-gray-700">
              Powered by open APIs and public holiday data
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <Heart className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">User First</h3>
            <p className="text-gray-700">
              Designed with privacy and user experience in mind
            </p>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js 14",
              "React 18",
              "TypeScript",
              "Tailwind CSS",
              "date-fns",
              "Lucide Icons",
              "LocalStorage",
              "Nager API",
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-white border border-gray-200 rounded-lg text-center"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
