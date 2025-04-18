const listaDeCompras = [];

function agregarProducto(producto) {
    producto = producto.trim().toLowerCase();

    if (!producto || producto === "") {
        throw new Error("Invalid product");
    }

    if (listaDeCompras.includes(producto)) {
        throw new Error("Product already exist");
    }

    listaDeCompras.push(producto);
}

function eliminarProducto(producto) {
    producto = producto.trim().toLowerCase();

    if (!producto || producto === "") {
        throw new Error("Invalid product");
    }

    const deletedProduct = listaDeCompras.indexOf(producto);

    if (deletedProduct !== -1) {
        listaDeCompras.splice(deletedProduct, 1);
    } else {
        throw new Error("Product does not exist");
    }
}

function mostrarLista() {
    listaDeCompras.forEach(producto => {
        console.log(producto);
    });
}