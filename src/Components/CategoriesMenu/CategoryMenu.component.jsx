// Constant Files
import { Categories } from "../../constant";
// Styles
import './CategoryMenu.styles.scss'
// Components
import CategoryItem from "../CategoryItems/CategoryItem.component";

const CategoryMenu = () => {
  return (
    <div className="categories-container">
      {Categories?.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;