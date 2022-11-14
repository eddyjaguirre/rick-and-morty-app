import { createContext } from "react";

const categoriesContext = createContext({
  selectedGender: '',
  selectedStatus: '',
  page: 1,
  setSelectedGender: () => {},
  setSelectedStatus: () => {},
  setPage: () => {},
})

export default categoriesContext;