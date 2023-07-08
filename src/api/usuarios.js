export const obtenerUsuarios = async () => {
    let responseData = { code: 500, data: {} }

    const requestOptions = {
        method: 'GET',
    }
    const response = await fetch('http://localhost:3000/getAllUsers', requestOptions)
    const responseJSON = await response.json()

    // console.log(response)
    responseData = { code: 200, data: responseJSON}
    return responseData
}