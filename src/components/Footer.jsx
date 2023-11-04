import React from "react";

function Footer() {
  return (
    <div className="flex flex-col min-h-screen fixed-bottom">
      <div className="footer bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; 2023 Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
