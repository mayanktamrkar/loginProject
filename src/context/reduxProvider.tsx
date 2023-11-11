'use client'
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../datastore/store';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  // You can add any additional logic or configuration here
  // For example, you can initialize some global state or perform setup

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
