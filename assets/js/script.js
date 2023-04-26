
function cuenta() {

    let productos = [];
    let total = 0;
    let insertarDatos = document.getElementById("insertarDatos");

    //ambas variables abajo, pq acá no las reconoce
    //let productoNombre = checkbox.name;
    //let precio = parseInt(checkbox.value); 

    function calcular (productos){
        let total = 0;
        let filas = "";
        productos.forEach(producto => {
            total += producto.precio;
            filas += `
                <tr>
                    <td>${producto.nombre}</td> 
                    <td>$ ${producto.precio}</td>
                </tr>
            `
        });
        filas += `
            <tr>
                <td>Total:</td>
                <td>$ ${total}</td>
            </tr>
        `;
        insertarDatos.innerHTML = filas;
    }

    let checkbox = document.querySelectorAll('input[type = "checkbox"]'); //todos los checkbox
    checkbox.forEach(function (checkbox) {   //forEch para recorrer todos los elementos

        if (checkbox.checked) {

            //si las pongo con las variables de arriba no las lee
            let productoNombre = checkbox.name;
            let precio = parseInt(checkbox.value);

            //agregar productos y sumar precio al total
            productos.push({nombre: productoNombre, precio});
            calcular(productos)
        }
    })
}


