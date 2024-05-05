import logoImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Loves", "Kisses", "Weds"];
function genRanInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRanInt(2)];
  return (
    <header>
      <img src={logoImg} alt="Stylized atom" />
      <h1>Janvi  {description}️ Anurag</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
