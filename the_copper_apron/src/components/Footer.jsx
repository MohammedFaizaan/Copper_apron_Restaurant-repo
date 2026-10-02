import logo from "../assets/Copper_Apron_Logo.png";

export default function Footer() {
  const heading = "font-bold text-lg mb-3 text-white";
  const subHeading = "font-semibold text-[#EC9B3B]";

  return (
    <footer className="bg-[#2D2424] text-[#EC9B3B]/80 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="flex flex-col">
            <img
              src={logo}
              alt="The Copper Apron Logo"
              className="w-36 mb-4 rounded-xl object-cover"
            />
            <h3 className={heading}>The Copper Apron</h3>
            <p className="text-sm mb-3">Modern Comfort Food & Wood-Fired Craft</p>
            <p className="text-sm">
              <span className={subHeading}>Phone:</span> (555) 019-2834
            </p>
            <p className="text-sm">
              <span className={subHeading}>Email: </span>
              <a href="mailto:contact@copperapron.com" className="hover:underline hover:text-white transition-colors">
                contact@copperapron.com
              </a>
            </p>
          </div>

          {/* Location Details */}
          <div className="flex flex-col">
            <h3 className={heading}>Location & Map</h3>
            <p className="text-sm mb-1">
              <span className={subHeading}>Street Address:</span> 124 Maple Street, Downtown
            </p>
            <p className="text-sm mb-3">
              <span className={subHeading}>City, State, Zip:</span> Austin, TX 78701
            </p>
            <p className="text-sm">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 hover:border-amber-500 text-[#EC9B3B] hover:text-white text-xs font-semibold rounded-lg transition-all"
              >
                Get Directions on Google Maps ↗
              </a>
            </p>
          </div>

          {/* Hours of Operation */}
          <div className="flex flex-col">
            <h3 className={heading}>Hours of Operation</h3>
            <ul className="text-sm space-y-1.5">
              <li>
                <span className={subHeading}>Mon – Thu:</span> 11:30 AM – 10:00 PM
              </li>
              <li>
                <span className={subHeading}>Fri – Sat:</span> 11:30 AM – 11:00 PM
              </li>
              <li>
                <span className={subHeading}>Sunday:</span> 10:00 AM – 9:00 PM
              </li>
              <li>
                <span className={subHeading}>Sunday Brunch:</span> 10:00 AM – 2:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-amber-500/10 text-center text-xs text-amber-500/50">
          <p>© {new Date().getFullYear()} The Copper Apron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}