import { createContext } from "react";

const categoriesContext = createContext({
  selectedGender: '',
  selectedStatus: '',
  setSelectedGender: () => {},
  setSelectedStatus: () => {},
})

export default categoriesContext;