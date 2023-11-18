function crearEquipos() {
    const numEquipos = parseInt(document.getElementById('numEquipos').value);
    const jugadoresPorEquipo = parseInt(document.getElementById('jugadoresPorEquipo').value);
  
    const jugadoresInput = document.getElementById('jugadoresInput');
    const inputsContainer = document.getElementById('inputsContainer');
    inputsContainer.innerHTML = '';
  
    for (let i = 0; i < numEquipos * jugadoresPorEquipo; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `Nombre del jugador ${i + 1}`;
      inputsContainer.appendChild(input);
    }
  
    jugadoresInput.style.display = 'block';
    asignacionEquipos.style.display = 'none';
  }
  
  function asignarEquipos() {
    const numEquipos = parseInt(document.getElementById('numEquipos').value);
    const jugadoresPorEquipo = parseInt(document.getElementById('jugadoresPorEquipo').value);
  
    const equipos = [];
    for (let i = 0; i < numEquipos; i++) {
      equipos.push([]);
    }
  
    const inputs = document.querySelectorAll('#inputsContainer input');
    let index = 0;
    inputs.forEach(input => {
      const equipoIndex = index % numEquipos;
      equipos[equipoIndex].push(input.value);
      index++;
    });
  
    const resultado = document.getElementById('resultado');
    const equiposDiv = document.getElementById('equipos');
    equiposDiv.innerHTML = '';
  
    equipos.forEach((equipo, index) => {
      const equipoElement = document.createElement('div');
      equipoElement.innerHTML = `<strong>Equipo ${index + 1}:</strong>  ${equipo.join(',<br> ')} `;
      equiposDiv.appendChild(equipoElement);
    });
  
    resultado.style.display = 'block';
    jugadoresInput.style.display = 'none';
  }
  