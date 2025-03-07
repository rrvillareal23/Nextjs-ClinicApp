import React from "react";

export default function TeamCategories({
  categories,
  selectedCategory,
  onCategoryClick,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 2xl:min-w-[1400px]">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`bg-white text-black py-2 px-4 rounded-xl shadow-lg focus:outline-none ${
            selectedCategory?.name === category.name
              ? "bg-yellow-300"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
