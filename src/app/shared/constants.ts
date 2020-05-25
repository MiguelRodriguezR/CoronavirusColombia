export const OPEN_DATA_SERVER = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';
export const QUERIES = [
  'SELECT departamento, count(atenci_n) as infected GROUP BY departamento', //Contagiados
  'SELECT departamento, count(atenci_n) as deaths WHERE estado = "Fallecido" GROUP BY departamento', //Fallecidos
  'SELECT departamento, count(atenci_n) as imported WHERE tipo = "Importado" GROUP BY departamento', //Importados
  'SELECT departamento, count(atenci_n) as related WHERE tipo = "Relacionado" GROUP BY departamento', //Relacionados
  'SELECT departamento, count(atenci_n) as onStudy WHERE tipo = "En estudio" GROUP BY departamento', //En Estudio
  'SELECT departamento, max(edad) as olderInfected, min(edad) as youngerInfected GROUP BY departamento', //Edad Mayor, Menor Contagiado
  'SELECT departamento, max(edad) as olderDeath, min(edad) as youngerDeath WHERE estado = "Fallecido" GROUP BY departamento', //Edad Mayor, Menor Muerto
];
