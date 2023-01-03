const { CATEGORIES_ACTION_TYPES } = require("./categories.types");
const { createAction } = require("utils/reducer/reducer.utils");

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
