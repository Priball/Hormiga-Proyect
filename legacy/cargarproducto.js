class Product {
    constructor (direccion, ciudad, codigopostal, pais, 
        ciudad2, codigopostal2, pais2, idusuario2, 
        valordeclarado, recompenza,peso, alto, ancho, profundidad,
        diaderecoleccion, horaderecoleccion ) {
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.codigopostal = codigopostal;
    this.pais = pais;
    this.ciudad2 = ciudad2;
    this.codigopostal2 = codigopostal2;
    this.pais2 = pais2;
    this.idusuario2 = idusuario2;
    this.valordeclarado = valordeclarado;
    this.recompenza = recompenza;
    this.peso = peso;
    this.alto = alto;
    this.ancho = ancho;
    this.profundidad = profundidad;
    this.diaderecoleccion = diaderecoleccion;
    this.horaderecoleccion = horaderecoleccion;
}

}

class UI {
    addProduct() {
       const listadeanuncios = document.getElementById('listadeanuncios');
       const element = document.createElement('div');
       element.innerHTML =`
          
         <div class="product-form"
          
          <strong>Producto Direccion</strong>: ${product.direccion} 
          <strong>Producto Ciudad</strong>: ${producto.ciudad}
          <strong>Producto Codigo Postal</strong>: ${producto.codigopostal}
          <strong>Producto Pais</strong>: ${pais}
          <strong>Producto Ciudad</strong>: ${ciudad2}
          <strong Producto Codigo Postal</strong>: ${codigopostal2}
          <strong>Producto id de usuario</strong>: ${idusuario2}
          <strong>Producto Valor declarado</strong>: ${valordeclarado}
          <strong>Producto Recompenza </strong>: ${recompenza}
          <strong>Producto Peso</strong>: ${peso}
          <strong>Producto Alto</strong>: ${alto}
          <strong>Ancho</strong>: ${ancho}
          <strong>Profundidad</strong>: ${profundidad}
          <strong>Dia de recoleccion </strong>: ${diaderecoleccion}
          <strong>Hora de recoleccion </strong>: ${horaderecoleccion}

          </div>
          
          `;
          listadeanuncios.appenChild(element);

          
    }

    deletProduct(){

    }

    showMessage(){

    }

}
    
//doom events
document.getElementById('anuncio-form')
  .addEventListener('submit', function (e) { 
     const direccion = direccion.getElementById ('direccion').value;
     const ciudad = ciudad.getElementById('ciudad').value;
     const codigopostal=codigopostal.getElementById('codigopostal').value;
     const pais = pais.getElementById('pais').value;
     const ciudad2 = ciudad2.getElementById('ciudad2').value;
     const codigopostal2 =codigopostal2.getElementById('codigopostal2').value;
     const pais2 = pais2.getElementById('pais2').value;
     const idusuario2 = idusuario2.getElementById('idusuario2').value;
     const valordeclarado = valordeclarado.getElementById ('valordeclarado').value;
     const recompenza =recompenza.getElementById('recompenza').value;
     const peso = peso.getElementById('peso').value;
     const alto = alto.getElementById ('alto').value;
     const ancho = ancho.getElementById('ancho').value;
     const profundidad = profundidad.getElementById('profundidad').value;
     const diaderecoleccion = diaderecoleccion.getElementById('diaderecoleccion').value;
     const horaderecoleccion = horaderecoleccion.getElementById('horaderecoleccion').value;

     
     
        const product = new Product (direccion, ciudad, codigopostal, pais, 
            ciudad2, codigopostal2, pais2, idusuario2, 
            valordeclarado, recompenza, peso, alto, ancho, profundidad,
            diaderecoleccion, horaderecoleccion );

            const UI = new UI();
            ui.addProduct (product);


        e.preventDefault();








});
