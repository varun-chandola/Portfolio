//     --color-body: #b6cbce;
// --color-heading: #eef3db;
// --color-base: #033f47;
// --color-base2: #022a30;
// --color-brand: #e0f780;
// --color-brand2: #deff58;
// --sidbar-width: 240px;
// --font-base: "Bai Jamjuree";

// background-color: var(--color-base2);
// color: var(--color-body);
// font-family: var(--font-base), sans-serif;
// }

import "./index.css";
import About from "./About"
import Home from "./Home"
import Nav from "./Nav"
import Contact from "./Contact"
import Projects from "./Projects";
import Blog from "./Blog";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Blog />
    </>
  );
}

export default App;
