export const obtenerProducto = async () => {
    let responseData = { code: 500, data: {} }

    const requestOptions = {
        method: 'GET',
    }
    const response = await fetch('http://localhost:3000/getAllProducts', requestOptions)
    const responseJSON = await response.json()

    // console.log(response)
    responseData = { code: 200, data: responseJSON}
    return responseData
}

export const agregarProducto = async () => {}

export const eliminarProducto = async () => {}