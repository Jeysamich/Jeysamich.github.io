// list.js

// Función para obtener información del personaje desde la API
async function getCharacterInfo(characterId) {
  try {
    // Construye la URL de la API con el ID del personaje
    var apiUrl = 'https://rickandmortyapi.com/api/character/' + characterId;

    // Realiza la solicitud a la API utilizando fetch
    var response = await fetch(apiUrl);

    // Verifica si la solicitud fue exitosa (código de respuesta 200)
    if (!response.ok) {
      throw new Error('Error al obtener la información del personaje');
    }

    // Parsea la respuesta a JSON
    var character = await response.json();

    // Retorna la información del personaje
    return character;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Función para manejar el evento de clic en el botón "Add item"
document.querySelector('.btn-primary').addEventListener('click', async function () {
  try {
    // Obtiene el ID del personaje desde el usuario (puedes modificar esto según tus necesidades)
    var characterId = prompt('Ingrese el ID del personaje (por ejemplo, 1 para Rick):');

    // Verifica si se proporcionó un ID
    if (characterId) {
      // Obtén la información del personaje desde la API
      var character = await getCharacterInfo(characterId);

      // Crea un nuevo elemento de lista utilizando el template
      var template = document.getElementById('list-template');
      var listItem = document.importNode(template.content, true);

      // Modifica el contenido del elemento de lista con la información del personaje
      listItem.querySelector('[data-id="title"]').textContent = character.name;
      listItem.querySelector('[data-id="content"]').textContent = `Status: ${character.status}, Species: ${character.species}`;
      listItem.querySelector('[data-id="number"]').textContent = character.id;

      // Agrega el nuevo elemento de lista a la lista existente
      var listContainer = document.getElementById('my-list');
      listContainer.appendChild(listItem);
    }
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir al obtener la información del personaje
    console.error('Error:', error);
    alert('Error al obtener la información del personaje. Verifica la consola para más detalles.');
  }
});

// Función para manejar el evento de clic en el botón "Clear all"
document.querySelector('.btn-light').addEventListener('click', function () {
  // Limpia la lista
  document.getElementById('my-list').innerHTML = '';
});
