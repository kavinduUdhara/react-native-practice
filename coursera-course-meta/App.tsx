import React from 'react';
import MyComponent from './app-props-01';

// The App component acts as the top-level component for this application
const App = () => {
  return (
    // Render the MyComponent component within the App component
    <MyComponent />
  );
};

// Export the App component as the default export
export default App;
