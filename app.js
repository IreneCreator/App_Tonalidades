// Lógica simple: mostrar la hora y contar clics
const btn = document.getElementById('actionBtn');
const output = document.getElementById('output');
let clicks = 0;

btn.addEventListener('click', () => {
  const tonalidades = [
    { nombre: 'Do M', equivalente: null },
    { nombre: 'La m', equivalente: null },
    { nombre: 'Sol M', equivalente: null },
    { nombre: 'Mi m', equivalente: null },
    { nombre: 'Re M', equivalente: null },
    { nombre: 'Si m', equivalente: null },
    { nombre: 'La M', equivalente: null },
    { nombre: 'Fa# m', equivalente: null },
    { nombre: 'Mi M', equivalente: null },
    { nombre: 'Do# m', equivalente: null },
    { nombre: 'Si M', equivalente: 'Dob M' },
    { nombre: 'Sol# m', equivalente: 'Lab m' },
    { nombre: 'Fa# M', equivalente: 'Solb M' },
    { nombre: 'Re# m', equivalente: 'Mib m' },
    { nombre: 'Reb M', equivalente: 'Do# M' },
    { nombre: 'Sib m', equivalente: 'La# m' },
    { nombre: 'Lab M', equivalente: 'Sol# M' },
    { nombre: 'Fa m', equivalente: null },
    { nombre: 'Mib M', equivalente: 'Re# M' },
    { nombre: 'Do m', equivalente: null },
    { nombre: 'Sib M', equivalente: 'La# M' },
    { nombre: 'Sol m', equivalente: null },
    { nombre: 'Fa M', equivalente: null },
    { nombre: 'Re m', equivalente: null }
  ];
  const randomIndex = Math.floor(Math.random() * tonalidades.length);
  const seleccionada = tonalidades[randomIndex];
  let texto = `${seleccionada.nombre}`;
  if (seleccionada.equivalente) {
    texto += ` (equivalente: ${seleccionada.equivalente})`;
  }
  output.textContent = texto;
});
