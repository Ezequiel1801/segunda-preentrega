class telefonos{
    constructor(nombre, tamaño, camFrontal, camTrasera, color, almacenamiento, ram, precio){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.camFrontal=camFrontal;
        this.camTrasera=camTrasera;
        this.color=color;
        this.almacenamiento=almacenamiento;
        this.ram=ram;
        this.precio=precio;
        this.infoTelefono=`Nombre: ${this.nombre}\nColor: ${this.color}\nTamaño y resolucion de pantalla: ${this.tamaño}\nCamara frontal: ${this.camFrontal}\nCamaras traseras: ${this.camTrasera}\nAlmacenamiento: ${this.almacenamiento}\nMemoria Ram: ${this.ram}\nPrecio: $${this.precio}`;
    }
}
function operacionTelefonos(modeloTelefono){
    pregunta=prompt(`¿está seguro de sumar ${modeloTelefono.nombre} a su carrito de compras?\nEstas son sus especificaciones:\n${modeloTelefono.infoTelefono}\nPara agregarlo al carrito ingrese "Si", caso contrario ingrese "No"`).toLowerCase();
    if(pregunta=="si"){
        listaProductos.push(`${modeloTelefono.nombre}`);
        precios.push(modeloTelefono.precio);
        alert(`Producto agregado con exito`);
    }else if(pregunta=="no"){
        alert("Operacion cancelada");
    }else{
        alert("Por favor ingrese una opcion correcta");
    }
}
function telefonosSamsung(){
    const samsungA24=new telefonos('Samsung A24', '6,5" (FHD+)', '50MP', 'Camara principal: 50MP, gran angular: 5MP, camara macro: 2MP', 'Gris', '128 GB', '6 GB', 172000);
    const samsungS21fe=new telefonos('Samsung S21 FE', '6,4" (FHD+)', '32MP', 'Camara principal: 12MP, gran angular: 12MP, camara teleobjetivo: 8MP', 'Negro', '256 GB', '8 GB', 370000);
    const samsungS23Ultra=new telefonos('Samsung S23 Ultra', '6,8" (QHD+)', '12MP', 'Camara principal: 200MP, gran angular: 12MP, Zoom 1 y Zoom 2: 10MP', 'Blanco', '512 GB', '12 GB', 800000);

    let opcionSamsung=prompt('Elija entre estos 3 modelos para sumar al carrito:\nSamsung A24.\nSamsung S21 fe.\nSamsung S23 Ultra.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    while(opcionSamsung!=="atras"){
        switch(opcionSamsung){
            case "samsung a24":
                operacionTelefonos(samsungA24);
                break;

            case "samsung s21 fe":
                operacionTelefonos(samsungS21fe);
                break;
            case "samsung s23 ultra":
                operacionTelefonos(samsungS23Ultra);
                break;
            default:
                alert("Por favor ingrese una opcion correcta");
                break;
        }

        opcionSamsung=prompt('Elija entre estos 3 modelos para sumar al carrito:\nSamsung A24.\nSamsung S21 fe.\nSamsung S23 Ultra.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    }
}
function telefonosIphone(){
    const iphoneSe= new telefonos('Iphone SE (2022)', '4,7" (HD)', '7MP', '12MP', 'Blanco', '64GB', '4GB', 760000);
    const iphone15= new telefonos('Iphone 15', '6.1" (FHD+)', '12MP', 'Principal: 48MP, Gran angular: 12MP, Zoom optico: 12MP', 'Rosa', '256GB', '6GB', 1300000);
    const iphone15ProMax= new telefonos('Iphone 15 Pro Max', '6,7" (FHD+)', '12MP', 'Principal: 48MP, Gran angular: 12MP, Teleobjetivo: 12MP', 'Negro', '1TB', '8GB', 1700000);

    let opcionIphone=prompt('Elija entre estos 3 modelos para sumar al carrito:\nIphone SE.\nIphone 15.\nIphone 15 Pro Max.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    while(opcionIphone!=="atras"){
        switch(opcionIphone){
            case "iphone se":
                operacionTelefonos(iphoneSe);
                break;
            case "iphone 15":
                operacionTelefonos(iphone15);
                break;
            case "iphone 15 pro max":
                operacionTelefonos(iphone15ProMax);
                break;
            default:
                alert("Por favor ingrese una opcion correcta");
                break;
        }
        opcionIphone=prompt('Elija entre estos 3 modelos para sumar al carrito:\nIphone SE.\nIphone 15.\nIphone 15 Pro Max.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    }
}
function telefonosXiaomi(){
    const redmiNote13= new telefonos('Xiaomi Redmi Note 13', '6,7" (FHD+)', '16MP', 'Principal: 100MP, Profundidad: 2MP', 'Azul', '128GB', '6GB', 140000);
    const xiaomi11Pro= new telefonos('Xiaomi 11 Pro', '6,8" (QHD+)', '20MP', 'Principal: 50MP, Gran angular: 13MP, Macro: 8MP', 'Azul', '128GB', '8GB', 683000);
    const xiaomi12Pro= new telefonos('Xiaomi 12 Pro', '6,7" (2K)', '32MP', 'Principal: 50MP, Gran angular: 50MP, Telefoto: 50MP', 'Negro', '256GB', '12GB', 1000000);

    let opcionXiaomi=prompt('Elija entre estos 3 modelos para sumar al carrito:\nXiaomi Redmi Note 13.\nXiaomi 11 Pro.\nXiaomi 12 Pro.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    while(opcionXiaomi!=="atras"){
        switch(opcionXiaomi){
            case "xiaomi redmi note 13":
                operacionTelefonos(redmiNote13);
                break;
            case "xiaomi 11 pro":
                operacionTelefonos(xiaomi11Pro);
                break;
            case "xiaomi 12 pro":
                operacionTelefonos(xiaomi12Pro);
                break;
            default:
                alert("Por favor ingrese una opcion correcta");
                break;
        }
        opcionXiaomi=prompt('Elija entre estos 3 modelos para sumar al carrito:\nXiaomi Redmi Note 13.\nXiaomi 11 Pro.\nXiaomi 12 Pro.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    }
}
function telefonosMotorola(){
    const motoE22= new telefonos('Motorola E22', '6.5" (HD+)', '5MP', 'Principal: 16MP, Profundidad: 2MP', 'Azul', '64GB', '4GB', 80000);
    const motoG72= new telefonos('Motorola G72', '6,5" (FHD+)', '16MP', 'Principal: 108MP, Gran angular: 8MP, Macro: 2MP', 'Blanco', '128GB', '6GB', 180000);
    const motoEdge40Pro= new telefonos('Motorola Edge 40 Pro', '6,7" (FHD+)', '60MP', 'Principal: 50MP, Gran angular: 50MP, Teleobjetivo: 12MP', 'Negro', '256GB', '12GB', 550000);

    let opcionMoto=prompt('Elija entre estos 3 modelos para sumar al carrito:\nMoto E22.\nMoto G72.\nMoto Edge 40 Pro.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    while(opcionMoto!=="atras"){
        switch(opcionMoto){
            case "moto e22":
                operacionTelefonos(motoE22);
                break;
            case "moto g72":
                operacionTelefonos(motoG72);
                break;
            case "moto edge 40 pro":
                operacionTelefonos(motoEdge40Pro);
                break;
            default:
                alert("Por favor ingrese una opcion correcta");
                break;
        }
        opcionMoto=prompt('Elija entre estos 3 modelos para sumar al carrito:\nMoto E22.\nMoto G72.\nMoto Edge 40 Pro.\nO ingrese "atras" para regresar al anterior menu.').toLowerCase();
    }
}
function descuento(booleano){
    if(booleano==true){
        let preguntaDescuento=prompt("Hay un codigo de descuento para productos que cuesten mas de $500.000, ¿desea ingresarlo?").toLowerCase();
        while(bool==false){
            switch(preguntaDescuento){
                case "si":
                    let ingresoDescuento=prompt("Por favor ingrese un codigo de descuento.").toLowerCase();
                    if(ingresoDescuento==="descuento10"){
                        const preciosDesc=precios.map(valor=>{
                            if(valor>=500000){
                                return valor*0.9;
                            }else{
                                return valor;
                            }
                        });
                        for(let i=0; i<=listaProductos.length - 1; i++){
                            listaFinal += `-${listaProductos[i]} $${preciosDesc[i]}\n`;
                            precioFinal+=preciosDesc[i];
                        }
                        alert(`Esta es la lista de productos del carrito:\n${listaFinal}El costo total de todos estos productos es de: $${precioFinal}`);
                        bool=true;
                    }
                    break;
                case "no":
                    for(let i=0; i<=listaProductos.length - 1; i++){
                        listaFinal += `-${listaProductos[i]} $${precios[i]}\n`;
                        precioFinal+=precios[i];
                    }
                    alert(`Esta es la lista de productos del carrito:\n${listaFinal}El costo total de todos estos productos es de: $${precioFinal}`);
                    bool=true;
                    break;
                default:
                    alert('Por favor ingrese Si o No');
                    preguntaDescuento=prompt("Hay un codigo de descuento disponible, ¿desea ingresarlo?");
                    bool=false;
                    break;
            }
        }
    }else{
        for(let i=0; i<=listaProductos.length - 1; i++){
            listaFinal += `-${listaProductos[i]} $${precios[i]}\n`;
            precioFinal+=precios[i];
        }
        alert(`Esta es la lista de productos del carrito:\n${listaFinal}El costo total de todos estos productos es de: $${precioFinal}`);
    }
}

const precios=[];
let precioFinal=0;
const listaProductos=[];
let listaFinal="";
let pregunta="";
let bool=false;
let encontrado=false;

alert("Bienvenido a Phone Market, ¡Aca podras encontrar lo mejor en telefonos, desde baja hasta alta gama!");

let opcionMarca=prompt('Ingrese el nombre de algunas de estas marcas disponibles:\nSamsung.\nIphone.\nXiaomi.\nMotorola.\nO ingrese "salir" para cancelar la operacion.').toLowerCase();

while(opcionMarca!=="salir"){

    switch(opcionMarca){
        case "samsung":
            telefonosSamsung();
            break;
        case "iphone":
            telefonosIphone();
            break;
        case "xiaomi":
            telefonosXiaomi();
            break;
        case "motorola":
            telefonosMotorola();
            break;
        default:
            alert("Por favor ingrese una opcion correcta");
            break;
    }

    opcionMarca=prompt('Ingrese el nombre de algunas de estas marcas disponibles:\nSamsung.\nIphone.\nXiaomi.\nMotorola.\nO ingrese "salir" para finalizar la compra.').toLowerCase();
}

if(listaProductos.length===0){
    alert("!Gracias por visitar la pagina¡");
}else{
    precios.find(preciosOriginales=>{
        if(preciosOriginales>=500000){
            encontrado=true;
        }
    });

    descuento(encontrado);
}