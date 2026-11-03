const ideas = [
  'Diseña una tarjeta de presentación que cuente algo sobre ti.',
  'Crea una galería con los colores de tu lugar favorito.',
  'Escribe tres cosas que te gustaría aprender y elige la primera.',
  'Transforma una idea de tu cuaderno en una pequeña página web.',
  'Crea algo pequeño que te haga sonreír.',
];
let nextIdea = 0;
document.querySelector('#idea-button').addEventListener('click', () => {
  document.querySelector('#idea').textContent = ideas[nextIdea];
  nextIdea = (nextIdea + 1) % ideas.length;
});
document.querySelector('#year').textContent = new Date().getFullYear();
