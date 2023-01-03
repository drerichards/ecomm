import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCollectionAndDocuments } from "utils/firebase/firebase";
import CategoriesPreview from "routes/categories-preview/CategoriesPreview";
import Category from "routes/category/Category";
import { setCategories } from "store/categories/categories.actions";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArr = await getCollectionAndDocuments();
      console.log(categoriesArr);
      dispatch(setCategories(categoriesArr));
    };

    getCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
