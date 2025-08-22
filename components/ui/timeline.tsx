"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#2C5F7C] via-[#D4A574] to-[#2C5F7C]"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-4 w-8 h-8 bg-white border-4 border-[#2C5F7C] rounded-full z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#2C5F7C] rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="ml-16 md:ml-20 flex-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="text-[#2C5F7C] font-semibold text-lg">{item.year}</span>
                </div>
                
                <div className="mb-3">
                  <span className="text-lg font-medium text-[#D4A574]">{item.company}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nyckelresultat:</h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#2C5F7C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}