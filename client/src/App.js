import React, { useState, useEffect } from "react";
import "./App.css";
import Category from "./components/category";
import Button from "./components/button";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const selectedCategory = [];

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const handleNextButton = () => {
    alert(selectedCategory);
  };

  return (
    <div className="h-screen w-screen justify-between p-5 flex flex-col">
      <div>
        <div className="space-y-2 mb-10">
          <h1 className="text-4xl font-semibold">Choose your interest</h1>
          <p className="text-sm text-gray-400">
            Get personalized video recommendation
          </p>
        </div>
        <div className="w-full flex flex-wrap">
          {error && <div>{error}</div>}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {categories.map((category, index) => {
                return (
                  <Category
                    key={index}
                    emoji={category.emoji}
                    name={category.name}
                    selectedCategory={selectedCategory}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <Button onClick={handleNextButton} />
    </div>
  );
}

export default App;
