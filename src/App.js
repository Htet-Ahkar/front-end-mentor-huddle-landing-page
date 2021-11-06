import { ThemeProvider } from "styled-components";

//Components
import Header from "./components/Header";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

//Styled components
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
