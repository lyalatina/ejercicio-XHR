const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

//COMIENZO LLAMADA XHR 
//llamada y recibiendo cosas
const getJSON = (url, callback) => {
  // crear instancia del objeto XMLHttpRequest. Guardar en una variable al objeto
  const request = new XMLHttpRequest(); 

  request.onload = () => { // peticion
    //4: la peticion se termino y la respuesta esta lista
    // 200: status esta ok
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText); //devuelve  y transforma en un string,la respuesta

    } 
  }
  //Open()
  request.open('GET', url);
  //Send()
  request.send();
}
// FINAL LLAMADA

btn.addEventListener('click', () => {
  getJSON (url, response => {   // la respuesta guardada en json
    let doggie = JSON.parse(response).message;
    // metodo. adentro va que quiero parsear (manipular)
    console.log(doggie);
    img.src = doggie

  })

});