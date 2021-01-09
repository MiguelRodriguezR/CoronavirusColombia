export const OPEN_DATA_SERVER = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
export const QUERIES = [
  'SELECT departamento_nom, count(edad) as infected GROUP BY departamento_nom', //Contagiados
  'SELECT departamento_nom, count(edad) as deaths WHERE estado = "Fallecido" GROUP BY departamento_nom', //Fallecidos
  'SELECT departamento_nom, count(edad) as imported WHERE fuente_tipo_contagio = "Importado" GROUP BY departamento_nom', //Importados
  'SELECT departamento_nom, count(edad) as related WHERE fuente_tipo_contagio = "Relacionado" GROUP BY departamento_nom', //Relacionados
  'SELECT departamento_nom, count(edad) as onStudy WHERE fuente_tipo_contagio = "En estudio" GROUP BY departamento_nom', //En Estudio
  'SELECT departamento_nom, max(edad) as olderInfected, min(edad) as youngerInfected GROUP BY departamento_nom', //Edad Mayor, Menor Contagiado
  'SELECT departamento_nom, max(edad) as olderDeath, min(edad) as youngerDeath WHERE estado = "Fallecido" GROUP BY departamento_nom', //Edad Mayor, Menor Muerto
];

