const listaDeCompras = [];

function agregarProducto(producto) {
    if (!producto || producto === "") {
        console.error("Invalid product");
        return;
    }

    producto = producto.trim().toLowerCase();

    if (listaDeCompras.includes(producto)) {
        console.error("Product already exist");
        return;
    }

    listaDeCompras.push(producto);
}

function eliminarProducto(producto) {
    if (!producto || producto === "") {
        console.error("Invalid product");
        return;
    }

    producto = producto.trim().toLowerCase();

    const deletedProduct = listaDeCompras.indexOf(producto);

    if (deletedProduct !== -1) {
        listaDeCompras.splice(deletedProduct, 1);
    } else {
        console.error("Product does not exist");
    }
}

function mostrarLista() {
    console.log("------------------");
    listaDeCompras.forEach(producto => {
        console.log(producto);
    });
    console.log("------------------");
}

agregarProducto("Aguacates");
agregarProducto("Arroz");
agregarProducto("Aceite");
agregarProducto("Arroz");
agregarProducto("");
agregarProducto();

mostrarLista();

eliminarProducto("Aguacates");
eliminarProducto("Agua");
eliminarProducto("");

mostrarLista();