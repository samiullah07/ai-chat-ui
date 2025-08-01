"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import BottomBar from "./BottomBar";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen layout">
      {/* Header - Mobile and Desktop Versions */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="flex flex-1">
        {/* Sidebar - Only show on desktop */}
        <div className="hidden md:block">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "md:ml-[260px]" : "md:ml-[80px]"
          }`}
        >
          <div className="hidden md:block">
            <Header />
          </div>
          {children}
        </main>
      </div>

      {/* Bottom Navigation Bar - Only show on mobile */}
      <div className="md:hidden">
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
