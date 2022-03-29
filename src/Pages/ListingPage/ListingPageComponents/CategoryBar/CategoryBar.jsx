import "./CategoryBar.css";

export const CategoryBar = ({ category, setCategory }) => {
  return (
    <div className="category-bar-container">
      <ul className="categories">
        <li
          className={`${category === null && "active"}`}
          onClick={() => setCategory(null)}
        >
          All
        </li>
        <li
          className={`${category === "Basics" && "active"}`}
          onClick={() => setCategory("Basics")}
        >
          Basics
        </li>
        <li
          className={`${category === "Info" && "active"}`}
          onClick={() => setCategory("Info")}
        >
          Technical Information
        </li>
        <li
          className={`${category === "overclock" && "active"}`}
          onClick={() => setCategory("overclock")}
        >
          Overclocking
        </li>
        <li
          className={`${category === "advice" && "active"}`}
          onClick={() => setCategory("advice")}
        >
          Expert Advice
        </li>
      </ul>
    </div>
  );
};
