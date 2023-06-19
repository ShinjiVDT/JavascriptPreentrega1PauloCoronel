let cantidad;
let ibustock = 0;
let amoxistock = 0;
let cefastock = 0;
let mas;


function inicio() {
    console.clear();
    console.log("═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═");
    console.log("1_Ingresar a stock");
    console.log("2_Baja de stock");
    console.log("3_Consultar stock");
    console.log("4_Salir");
    console.log("═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═");
    let opcion = prompt("elija una opcion");
    switch (opcion) {
        case "1":
            mas = true
            console.clear()
            console.log(opcion + "_Ingresando a stock");
            console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
            producto = prompt("Que producto se ingresara a stock? (Cefalexina/Amoxicilina/Ibuprofeno)");
            producto = producto.toLowerCase()
            modificarStock()
            break;
        case "2":
            mas = false
            producto = prompt("Que producto se da de baja de stock?(cefalexina/Amoxicilina/Ibuprofeno)");
            producto = producto.toLowerCase()
            modificarStock()
            break;
        case "3":
            producto = prompt("El stock de que producto desea consultar? (Cefalexina/Amoxicilina/Ibuprofeno)");
            producto = producto.toLowerCase()
            consultaStock()
            break;
        case "4":
            salir();
            break;
        default:
            alert("Ingreso una opcion no valida");
            inicio();
    }
}


function ingresoCantidad() {

    if (mas === true) {
        cantidad = Number(prompt("Ingrese cantidad de unidades de " + producto + " que agrega a stock"))
        if (typeof cantidad == 'number' & Number.isInteger(cantidad)) {
            console.log("Desea ingresarar " + cantidad + " unidades de " + producto + " ...")
            console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
            return cantidad;
        } else {
            alert("no ingreso un numero valido");
            inicio()
        }
    } else {
        cantidad = Number(prompt("Ingrese cantidad unidades de " + producto + " que se da de baja de stock"))
        if (typeof cantidad == 'number' & Number.isInteger(cantidad)) {
            console.log("Desea restar " + cantidad + " unidades de " + producto + " ...")
            console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
            return cantidad;
        } else {
            alert("no ingreso un numero valido");
            inicio()
        }
    }

}


function cantidadIbuprofeno() {
    if (mas === true) {
        ibustock = ibustock + cantidad
        console.log("Se agregaron al stock " + cantidad + " unidades de " + producto + " ...")
    }
    else if (mas === 0 & ibustock >= cantidad) {
        ibustock = ibustock - cantidad;
        console.log("Se restaron del stock " + cantidad + " unidades de " + producto + " ...")
    } else {
        alert("su stock actual es de " + ibustock + " unidades. No es posible restar " + cantidad + " unidades")
    }
    console.log("stock total de Ibuprofeno: " + ibustock)
    console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
}


function cantidadAmoxicilina() {
    if (mas === true) {
        amoxistock = amoxistock + cantidad
        console.log("Se agregaron al stock " + cantidad + " unidades de " + producto + " ...")
    }
    else if (mas === 0 & amoxistock >= cantidad) {
        amoxistock = amoxistock - cantidad;
        console.log("Se restaron del stock " + cantidad + " unidades de " + producto + " ...")
    } else {
        alert("su stock actual es de " + amoxistock + " unidades. No es posible restar " + cantidad + " unidades")
    }
    console.log("stock total de Amoxicilina: " + amoxistock)
    console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
}


function cantidadCefalexina() {
    if (mas === true) {
        cefastock = cefastock + cantidad
        console.log("Se agregaron al stock " + cantidad + " unidades de " + producto + " ...")
    }
    else if (mas === 0 & cefastock >= cantidad) {
        cefastock = cefastock - cantidad;
        console.log("Se restaron del stock " + cantidad + " unidades de " + producto + " ...")
    } else {
        alert("su stock actual es de " + cefastock + " unidades. No es posible restar " + cantidad + " unidades")
    }
    console.log("stock total de Cefalexina: " + cefastock)
    console.log(" ─ ─ ─ ─ ─ ─ ─ ─ ─ ")
}


function reingreso() {
    let reingresar = confirm("Desea realizar una nueva operacion?");
    if (reingresar === true) {
        inicio()
    } else {
        let salida = confirm("esta seguro que desea salir?")
        if (salida === true) {
            console.log("Gracias por usar nuestro sistema")
        } else {
            inicio()
        }
    }


}


function modificarStock() {
    switch (producto) {
        case "ibuprofeno":
            ingresoCantidad();
            cantidadIbuprofeno();
            reingreso()
            break;
        case "amoxicilina":
            ingresoCantidad()
            cantidadAmoxicilina()
            reingreso()
            break;
        case "cefalexina":
            ingresoCantidad()
            cantidadCefalexina()
            reingreso()
            break;
        default:
            alert("ingreso un producto fuera de catalogo")
            inicio()
    }

}


function consultaStock() {
    switch (producto) {
        case "ibuprofeno":
            alert("su stock actual es de " + ibustock + " unidades.")
            reingreso()
            break;
        case "amoxicilina":
            alert("su stock actual es de " + amoxistock + " unidades.")
            reingreso()
            break;
        case "cefalexina":
            alert("su stock actual es de " + cefastock + " unidades.")
            reingreso()
            break;
        default:
            alert("ingreso un producto fuera de catalogo")
            inicio()
    }

}


function salir() {
    let salir = confirm("Desea salir del programa? ");
    if (salir != true) {
        inicio()
    } else {
        let salida = confirm("esta seguro que desea salir? Se perderan todos los datos no guardados")
        if (salida === true) {
            console.log("Gracias por usar nuestro sistema")
        } else {
            inicio()
        }
    }
}


inicio()
