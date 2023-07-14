import React, { createContext, useContext, useReducer } from "react";
import { allProducts } from "../../Data/allProducts";
const CreateFilterContext = createContext();
const CreateFilterDispatch = createContext();

export const FilterContext = () => {
  return useContext(CreateFilterContext);
};
export const FilterDispatch = () => {
  return useContext(CreateFilterDispatch);
};

const initialState = {
  filterItems: [...allProducts],
  isOpen: false,
  category: "ALL MENUS",
  searchKey: "",
};
const filterHandler = (key) => {
  const filterItems = allProducts.filter((product) => product.category === key);
  const category = key;
  return { filterItems, category };
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD": {
      state.searchKey = action.payload;
      if (action.payload.length > 0) {
        state.category = "SEARCH MENU";
      } else {
        state.category = "ALL MENUS";
        state.filterItems = [...allProducts]
      }
      return {
        ...state,
      };
    }
    case "ISOPEN": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      return {
        ...state,
      };
    }
    case "ALL": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      state.filterItems = [...allProducts];
      state.category = "ALL MENUS";
      return {
        ...state,
      };
    }
    case "WINGS": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      return {
        ...state,
        ...filterHandler("WINGS"),
      };
    }
    case "DESERT": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      return {
        ...state,
        ...filterHandler("DESERT"),
      };
    }
    case "COMBO": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      return {
        ...state,
        ...filterHandler("COMBO"),
      };
    }
    case "MAINCOURSE": {
      if (state.isOpen === false) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
      return {
        ...state,
        ...filterHandler("MAINCOURSE"),
      };
    }
    default:
      return state;
  }
};
export default function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <CreateFilterContext.Provider value={state}>
      <CreateFilterDispatch.Provider value={dispatch}>
        {children}
      </CreateFilterDispatch.Provider>
    </CreateFilterContext.Provider>
  );
}
