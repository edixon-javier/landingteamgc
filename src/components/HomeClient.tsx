"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { projects } from "@/lib/data";
import { getImagePath } from "@/lib/utils";

export default function HomeClient() {
  const [isViewingProject, setIsViewingProject] = useState(false);
  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      suppressHydrationWarning
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="w-full max-w-[90rem] mx-auto py-6 px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          <div suppressHydrationWarning>
            <Image
              src={getImagePath("/LogoGc.svg")}
              alt="Logo"
              width={180}
              height={60}
              className="dark:invert"
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-lg font-medium hover:text-blue-600 transition-colors">
                <a href="#portfolio">
                  Creators and Drivers of Digital Solutions.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main portfolio section */}
      <section
        id="portfolio"
        className="w-full py-12 pt-32 bg-gray-50 dark:bg-gray-900"
      >
        <div
          className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12"
          suppressHydrationWarning
        >
          {/* Portfolio header - Only shown when not viewing a specific project */}
          {isViewingProject ? (
            <div className="flex justify-start mb-8">
            </div>
          ) : (
            <div className="text-center mb-20" suppressHydrationWarning>
              <h2 className="text-4xl sm:text-4xl font-bold mb-6">
                Smart Solutions to Real Challenges
              </h2>
            </div>
          )}
          <div className="w-full">
            <ProjectGrid projects={projects} onViewChange={setIsViewingProject} />
          </div>
        </div>
      </section>
    </div>
  );
}
