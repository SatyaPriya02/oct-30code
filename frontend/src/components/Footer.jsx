import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WorkVerse</h3>
            <p className="text-gray-400 text-sm">
              Your unified AI-powered platform for everything you need.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} WorkVerse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
