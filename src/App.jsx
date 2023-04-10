import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae?'
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae?'
        />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          voluptatibus delectus ullam dolores beatae eaque, quo, illum, fugiat
          ad in repellendus eveniet doloribus iure similique fugit voluptates
          nemo debitis quae?'
        />
      </div>
      
    </div>
  );
}

export default App;
