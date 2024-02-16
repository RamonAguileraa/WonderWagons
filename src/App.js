import Navbar from './components/navbar';
import Hero from './components/hero'
import Twit from './components/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div> {/* Agrega el contenido de la sección si es necesario */}
            {/* Otro contenido de la sección aquí */}
          </div>
          <div className="mt-16"> {/* Agrega margen superior para separar la sección */}
            <Twit />
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;