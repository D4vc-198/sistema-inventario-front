import { useState, useEffect } from "react";

// Calcula cuantas páginas tendremos de la tabla
export const calculatePagination = (data, rowsPerPage) => {
    const range = []
    let num = 0
    if (data) {
        num = Math.ceil(data.length / rowsPerPage)
    }
    let i = 1
    for (let i = 1; i < num; i++) {
        range.push(i)
    }
    return range
}

// Devuelve una matriz con los datos a mostrar
export const sliceData = (data, page, rowsPerPage) => {
    return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

export const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculatePagination(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([slice]);
    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    return { slice, range: tableRange };
};