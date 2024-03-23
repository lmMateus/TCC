export default function (date) {
  
  const dateObj = new Date(date)

  const dia = dateObj.getDate().toString().padStart(2, '0');
  const mes = (dateObj.getMonth() + 1).toString().padStart(2, '0'); 
  const ano = dateObj.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`
  return dataFormatada 
}