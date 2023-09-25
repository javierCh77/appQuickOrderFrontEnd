import Swal from "sweetalert2";

export function Modal(id, name, description, imgUrl, price, quantity) {
  quantity = 1;
  Swal.fire({
    title: `${name}`,
    html: `${description}` + '<br/> <br/><h1>$' + `${price}` + '</h1>',
    color: 'white',
    background: 'linear-gradient(180deg,rgba(227,197,197,1)50%, rgba(165,8,69,1) 50%',
    imageUrl: `${imgUrl}`,
    imageWidth: 400,
    imageHeight: 400,
    showCancelButton: false,
    confirmButtonColor: '#15B15B',
    confirmButtonText: 'agregar',
    denyButtonText: 'Cerrar',
    showDenyButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Add(id, name, description, imgUrl, price, quantity);
    }
  });
}

async function Add(id, name, description, imgUrl, price, quantity) {
  let addToCart = {
    "id": id,
    "name": name,
    "description": description,
    "imgUrl": imgUrl,
    "price": price,
    "quantity": quantity
  };
  try {
    let addCart = await fetch('http://localhost:3001/cart/addorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addToCart)
    });
    
    if (addCart.ok) {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3001/cart/vieworder");
          const jsonData = await response.json();
          document.querySelector('.contador-car').innerHTML = jsonData;
        } catch (error) {
          console.log("Error getting API data:", error);
        }
      };
      fetchData();
    } else {
      throw new Error('Error al agregar al carrito');
    }
  } catch (error) {
    console.error('Error al agregar al carrito:', error);
  }
}

export function ModalCancel() {
  Swal.fire({
    icon: 'warning',
    title: '¿Está seguro de cancelar su pedido?',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, continuar pidiendo'
  }).then((result) => {
    if (result.isConfirmed) {
      cancelOrder();
    }
  });
}
async function cancelOrder() {
  try {
    const response = await fetch('http://localhost:3001/cart/deleteOrder', {
      method: 'DELETE'
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Pedido cancelado',
        text: 'Su pedido ha sido cancelado exitosamente.',
      }).then(() => {
        // Redirigir a http://localhost:3000/Welcome
        window.location.href = 'http://localhost:3000/Welcome';
      });
    } else {
      throw new Error('Error al cancelar el pedido');
    }
  } catch (error) {
    console.error('Error al cancelar el pedido:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error al cancelar el pedido',
      text: 'Ha ocurrido un error al cancelar el pedido. Por favor, intente nuevamente.',
    });
  }
}
async function confirmOrder() {
  try {
    const response = await fetch('http://localhost:3001/cart/deleteOrder', {
      method: 'DELETE'
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Pedido realizado',
        text: 'Su pedido ha sido confirmado con exito. Gracias.',
      }).then(() => {
        // Redirigir a http://localhost:3000/Welcome
        window.location.href = 'http://localhost:3000/Welcome';
      });
    } else {
      throw new Error('Error al confirmar el pedido');
    }
  } catch (error) {
    console.error('Error al confirmar el pedido:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error al confirmar el pedido',
      text: 'Ha ocurrido un error al confirmar el pedido. Por favor, intente nuevamente.',
    });
  }
}

export function ModalSuccess() {
  Swal.fire({
    icon: 'success',
    title: '¿Está seguro de confirmar su pedido?',
    showCancelButton: true,
    confirmButtonColor: '#15B15B',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, confirmar',
    cancelButtonText: 'No, continuar pidiendo'
  }).then((result) => {
    if (result.isConfirmed) {
      confirmOrder();
    }
  });
}