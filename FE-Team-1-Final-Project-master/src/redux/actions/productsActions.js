import Swal from "sweetalert2";
import {GET_ALL_PRODUCT, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, PREVIEW_PRODUCT, CLEAR_ALL_PRODUCT, CLEAR_PRODUCT, PRODUCT_ERROR, CLEAR_STATUS_PRODUCT, DELETE_PRODUCT} from "./types";

export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/products", {
            method: "GET",
        });
        const data = await response.json();
        if (data.message === "Product is Empty") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
            return dispatch({
                type: GET_ALL_PRODUCT,
                payload: data,
                status: "produk kosong",
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data.data.products,
            status: "Get All",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
            status: "produk kosong",
        });
        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getAllProductByIdSeller = (params) => async (dispatch) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/product/seller?" + new URLSearchParams({idUser: params.idUser}), {
            method: "GET",
        });
        const data = await response.json();
        if (data.message === "Product is Empty") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
            return dispatch({
                type: GET_ALL_PRODUCT,
                payload: "",
                status: "Get All By Id User",
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data.data,
            status: "Get All By Id User",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
            status: "produk kosong",
        });
        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getProductByIdSeller = (params) => async (dispatch) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/product/minat?" + new URLSearchParams(params), {
            method: "GET",
        });
        const data = await response.json();
        if (data.message === "Product is Empty") {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
            return dispatch({
                type: GET_ALL_PRODUCT,
                payload: "",
                status: "Get All By Id User",
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data.data,
            status: "Get All By Id User",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
            status: "produk kosong",
        });
        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getProductById = (params) => async (dispatch) => {
    try {
        const id = params;
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL +
                "/api/v1/product?" +
                new URLSearchParams({
                    id,
                })
        );
        const data = await response.json();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Berhasil",
            text: "Pencarian data berhasil",
            showConfirmButton: false,
            timer: 1500,
        });

        dispatch({
            type: GET_PRODUCT,
            payload: data,
            status: "Get Product",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });
        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getProductByNama = (params) => async (dispatch) => {
    try {
        const nama = params;
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL +
                "/api/v1/product/name?" +
                new URLSearchParams({
                    nama,
                })
        );
        const data = await response.json();

        if (data.length === 0) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data,
            status: "Get All by Nama",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getProductByKategory = (params) => async (dispatch) => {
    try {
        const kategori = params;
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL +
                "/api/v1/product/kategory?" +
                new URLSearchParams({
                    kategori,
                })
        );
        const data = await response.json();
        if (data.length === 0) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data,
            status: "Get All by Kategory",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const getProductsByMinatAndSeller = (params) => async (dispatch) => {
    try {
        const idUser = params.idUser;
        const minat = params.minat;
        const response = await fetch(
            process.env.REACT_APP_BACKEND_URL +
                "/api/v1/product/minat?" +
                new URLSearchParams({
                    idUser,
                    minat,
                })
        );
        const data = await response.json();
        if (data.length === 0) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Data kosong",
                text: "Data yang anda cari tidak ditemukan",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Pencarian data berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch({
            type: GET_ALL_PRODUCT,
            payload: data,
            status: "Get All My Products",
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const addProduct = (data) => async (dispatch) => {
    try {
        var formdata = new FormData();
        formdata.append("nama", data.nama);
        formdata.append("harga", data.harga_new);
        formdata.append("kategori", data.kategori);
        formdata.append("deskripsi", data.deskripsi);
        if (data.gambar.length > 0) {
            for (var i = 0; i < data.gambar.length; i++) {
                if (data.gambar[i].type === "image/jpeg" || data.gambar[i].type === "image/png") {
                    formdata.append("gambar", data.gambar[i]);
                }
            }
        }

        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/products", {
            method: "POST",
            body: formdata,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.status === 200) {
            const data = await response.json();

            dispatch({
                type: CREATE_PRODUCT,
                payload: data,
                status: "Created",
            });

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Data berhasil ditambahkan",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            const data = await response.json();

            dispatch({
                type: PRODUCT_ERROR,
                payload: data,
            });

            Swal.fire({
                position: "center",
                icon: "error",
                title: data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const updateProduct = (data) => async (dispatch) => {
    try {
        var formdata = new FormData();
        formdata.append("nama", data.nama);
        formdata.append("harga", data.harga_new);
        formdata.append("kategori", data.kategori);
        formdata.append("deskripsi", data.deskripsi);
        // Upload File Image
        for (var i = 0; i < data.gambar.length; i++) {
            if (data.gambar[i].type === "image/jpeg" || data.gambar[i].type === "image/png") {
                formdata.append("gambar", data.gambar[i]);
            }
        }
        // Delete File Image
        if (data.imgTemp.length > 0) {
            for (i = 0; i < data.imgTemp.length; i++) {
                formdata.append("imgTemp", data.imgTemp[i]);
            }
        }

        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/products/" + data.id, {
            method: "PUT",
            body: formdata,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        if (response.status === 200) {
            const data = await response.json();

            dispatch({
                type: UPDATE_PRODUCT,
                payload: data,
                status: "Updated",
            });

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Data berhasil diupdate",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            const data = await response.json();

            dispatch({
                type: PRODUCT_ERROR,
                payload: data,
            });

            Swal.fire({
                position: "center",
                icon: "error",
                title: data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const deleteProduct = (params) => async (dispatch) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/products/" + params, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await response.json();
        if (data.message === "delete product berhasil") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil",
                text: "Data berhasil dihapus",
                showConfirmButton: false,
                timer: 1500,
            });
            return dispatch({
                type: DELETE_PRODUCT,
                status: "deleted",
            });
        } else {
            dispatch({
                type: PRODUCT_ERROR,
                status: data.message,
            });
        }
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: error.response,
            status: "produk kosong",
        });
        Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
        });
    }
};

export const clearProduct = () => async (dispatch) => {
    dispatch({
        type: CLEAR_PRODUCT,
    });
};

export const clearAllProduct = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ALL_PRODUCT,
    });
};

export const clearStatusProduct = () => async (dispatch) => {
    dispatch({
        type: CLEAR_STATUS_PRODUCT,
    });
};

export const previewImg = (params) => async (dispatch) => {
    dispatch({
        type: PREVIEW_PRODUCT,
        payload: params,
    });
};
