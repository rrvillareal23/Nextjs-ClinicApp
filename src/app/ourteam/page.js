"use client";
import React, { useState, useEffect } from "react";
import categories from "./data/categories";
import teamMembers from "./data/teamMembers";
import TeamCategories from "./components/TeamCategories";
import TeamMembers from "./components/TeamMembers";

export default function OurTeam() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const defaultCategory = categories.find(
      (category) => category.name === "Speech Therapy"
    );
    setSelectedCategory(defaultCategory);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMembers = selectedCategory
    ? teamMembers.filter(
        (member) =>
          member.role.toLowerCase() === selectedCategory.name.toLowerCase()
      )
    : [];

  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#ffde00] min-h-48 text-black px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">TEAM RAINBOW KIDS</span>
            </h1>
            <h2>
              <span className="text-lg">
                "Rainbow Kids is a fantastic place for all children. The front
                office staff and all the therapists are wonderful. We are very
                happy to be working with the Rainbow Kids team." — Lauren
              </span>
            </h2>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="relative lg:flex-row max-w-[1400px] pt-[30px] pb-[30px] pr-[20px] pl-[20px]">
          <TeamCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
          {selectedCategory && (
            <div className="mt-8 2xl:min-w-[1400px]">
              <h1 className="text-2xl font-extrabold mb-4 flex items-center">
                {selectedCategory.name}
                <span className="border-t-[3px] border-double border-gray-400 flex-grow ml-4"></span>
              </h1>
              <h2 className="text-xl">{selectedCategory.description}</h2>
              <TeamMembers members={filteredMembers} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
