import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";

const TestProvider = ({ children }: TestProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

interface TestProviderProps {
  children: React.ReactNode;
}

export default TestProvider;
