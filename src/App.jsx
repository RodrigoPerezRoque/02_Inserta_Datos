const persona ={ 
 nombre : 'RODRIGO PEREZ ROQUE',
 edad : '24',
 profesion: 'Universitario',
 pasatiempos: ['Videojuegos', 'Escuchar música', 'Investigar temas de astronomia', 'Acariciar a mi pug'],
 lugarnacimiento: 'Tuxtepec, Oaxaca',
 cumpleaños: '16 de abril',
 
}

function App() {
  
  return (
    <div>
      <h1>Información personal</h1>
      <hr />
    <ul>
      <li>Nombre completo: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Profesión: {persona.profesion}</li>
      <li>Pasatiempos: </li>
        <ul>
          {
            persona.pasatiempos.map((pasatiempos) =>{
              return <li key={pasatiempos}>{pasatiempos}</li>
            })
          }
        </ul>
      <li>Lugar de nacimiento: {persona.lugarnacimiento}</li>
      <li>Cumpleaños: {persona.cumpleaños}</li>
      </ul> 
    </div>
  )
}

export default App
