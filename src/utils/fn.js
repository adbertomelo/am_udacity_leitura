

export function getDateFormat(value){

  return  new Intl.DateTimeFormat('pt-BR', { 
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'      
  }).format(value)

}