export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and company name on the left */}
          <div className="flex items-center">
            <span className="text-lg font-semibold">City Driving School</span>
          </div>
          {/* Copyright information and website credit on the right */}
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2 md:mb-0">
              Copyright © 2024 All rights reserved.
            </p>
            <p className="text-sm">
              Website by <a href="https://github.com/adnangondal">adnangondal</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
