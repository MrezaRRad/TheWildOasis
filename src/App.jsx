import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
function App() {
  return (
    <>
      <GlobalStyles />
      <Input type="text" />
      <Button>Click Me</Button>
    </>
  );
}

export default App;
