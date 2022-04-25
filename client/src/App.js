import React, {useState} from "react";
import "./App.css";
import Category from "./components/category";
import Button from "./components/button";

function App() {

  // const [selectedCategory, setSelectedCategory] = useState([]);
  const categoryList = [
    {
      name: "Art",
      emoji: "🎨",
    },
    {
      name: "Cars",
      emoji: "🚗",
    },
    {
      name: "Computers",
      emoji: "🖥",
    },
    {
      name: "Fashion",
      emoji: "👩‍🎤",
    },
    {
      name: "Food",
      emoji: "🍽",
    },
    {
      name: "Coding",
      emoji: "💻",
    },
    {
      name: "Design",
      emoji: "🎨",
    },
    {
      name: "Music",
      emoji: "🎵",
    },
    {
      name: "Photography",
      emoji: "📷",
    },
    {
      name: "Sports",
      emoji: "🏀",
    },
    {
      name: "Travel",
      emoji: "🌍",
    },
    {
      name: "Video Games",
      emoji: "🎮",
    },
    {
      name: "Writing",
      emoji: "📝",
    },
    {
      name: "Other",
      emoji: "🤔",
    },
  ];
  return (
    <div className="p-5">
      <div className="space-y-2 mb-10">
        <h1 className="text-4xl font-semibold">Choose your interest</h1>
        <p className="text-sm text-gray-400">
          Get personalized video recommendation
        </p>
      </div>
      <div className="w-full flex flex-wrap">
        {categoryList.map((category, index) => {
          return <Category key={index} emoji={category.emoji} name={category.name} />;
        })}
      </div>
      <Button />
    </div>
  );
}

export default App;
