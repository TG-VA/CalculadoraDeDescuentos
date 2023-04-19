const inputprecio = document.getElementById("price");
const inputdescuento = document.getElementById("discount");
const resultado = document.getElementById("result");
const btnDescuentoUno = document.getElementById("descuentoUno");
const btnDescuentoDos = document.getElementById("descuentoDos");
const btnDescuentoTres = document.getElementById("descuentoTres");
const btnDescuentoCuatro = document.getElementById("descuentoCuatro");
const couponsObj = {
  'HTML': 10,
  'CSS': 20,
  'JS': 30,
};

const btnDescuento = document.getElementById("btnDesc");
const btnReiniciar = document.getElementById("btnReset");

btnDescuento.addEventListener("click", calcularDescuento);
btnReiniciar.addEventListener("click", reiniciar);
btnDescuentoUno.addEventListener("click", primerDescuento);
btnDescuentoDos.addEventListener("click", segundoDescuento);
btnDescuentoTres.addEventListener("click", tercerDescuento);
btnDescuentoCuatro.addEventListener("click", cuartoDescuento);

function reiniciar() {
  history.go(0);
}

function calcularDescuento() {
  const precio = Number(inputprecio.value);
  const descuento = Number(inputdescuento.value);
  const coupon = inputdescuento.value;

  if (!precio || !coupon) {
    resultado.innerText = "Por favor, Llena todo los campos";
    return;
  }

  if (descuento > 100) {
    resultado.innerText = "El descuento no puede ser mayor al 100%";
    return;
  }

  let discount;
  if (couponsObj[coupon]) {
    discount = couponsObj[coupon];
    const pago = (precio * (100 - discount)) / 100;
    resultado.innerHTML = "$" + pago;
    return;
  } else if (!couponsObj[coupon]) {
    resultado.innerHTML = "El cupón no es válido";
    return;
  }

  const pago = (precio * (100 - descuento)) / 100;
  resultado.innerHTML = "$" + pago;
}

function primerDescuento() {
  const precio = Number(inputprecio.value);

  if (!precio) {
    resultado.innerText = "Por favor, Llena todo los campos";
    return;
  }

  const pago = (precio * (100 - 5)) / 100;
  resultado.innerHTML = "$" + pago;
}

function segundoDescuento() {
  const precio = Number(inputprecio.value);

  if (!precio) {
    resultado.innerText = "Por favor, Llena todo los campos";
    return;
  }

  const pago = (precio * (100 - 10)) / 100;
  resultado.innerHTML = "$" + pago;
}

function tercerDescuento() {
  const precio = Number(inputprecio.value);

  if (!precio) {
    resultado.innerText = "Por favor, Llena todo los campos";
    return;
  }

  const pago = (precio * (100 - 15)) / 100;
  resultado.innerHTML = "$" + pago;
}

function cuartoDescuento() {
  const precio = Number(inputprecio.value);

  if (!precio) {
    resultado.innerText = "Por favor, Llena todo los campos";
    return;
  }

  const pago = (precio * (100 - 20)) / 100;
  resultado.innerHTML = "$" + pago;
}
