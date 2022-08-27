import { FC, createContext } from "react";
import { HairColor } from "../components/person";
import Person from "../components/person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const Test: FC = () => {
  const contextValue: AppContextInterface = {
    name: "pedro",
    age: 20,
    country: "Poland",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="write">
        <Person
          name="Pedro"
          age={20}
          email="fsadfa@dasd.sa"
          hairColor={HairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default Test;
