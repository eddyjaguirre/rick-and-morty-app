import { createContext } from "react";

const searchContext = createContext({
  search: '',
  setSearch: () => {},
})

export default searchContext;