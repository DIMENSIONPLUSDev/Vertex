import React from 'react';
import Route from './Routes/Routes';
import {useColorScheme} from 'react-native';

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
      <Route />
      </QueryClientProvider>
  );
}

export default App;
