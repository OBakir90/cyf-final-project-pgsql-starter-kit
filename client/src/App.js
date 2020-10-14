import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme";


const App = () => {
	return (
	  <ThemeProvider theme={theme}>
			<GlobalStyles />
		  	<Routes />
	  </ThemeProvider>
	);
};

export default App;
