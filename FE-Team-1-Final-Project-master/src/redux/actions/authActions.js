import {
  AUTH_ERROR,
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_INFO_USERS,
  CLEAR_STATUS,
} from "./types";
import Swal from "sweetalert2";

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (result.token) {
      await Swal.fire({
        title: "Berhasil",
        text: "Berhasil melakukan login",
        icon: "success",
      });
      dispatch({
        type: LOGIN,
        payload: result.token,
        status: "login success",
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
        timer: 2000,
      });
      authError(result.error);
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 2000,
    });
    authError(error);
  }
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.token) {
      await Swal.fire({
        title: "Berhasil",
        text: "Berhasil melakukan login",
        icon: "success",
      });
      dispatch({
        type: LOGIN,
        payload: result.token,
        user: result.user,
        status: "login success",
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
        timer: 2000,
      });
      authError(result.error);
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 2000,
    });
    authError(error);
  }
};

export const updateInfoUsers = (data) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("nama", data.nama);
    formdata.append("kota", data.kota);
    formdata.append("alamat", data.alamat);
    formdata.append("noHp", data.hp);
    if (data.gambar) {
      formdata.append("gambar", data.gambar);
    }

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/v1/profile",
      {
        method: "PUT",
        body: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const result = await response.json();
    if (result) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile berhasil diperbaharui",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: UPDATE_INFO_USERS,
        payload: result.data,
        status: "Updated",
      });
    }
  } catch (error) {
    authError(error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "gagal",
      text: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const logout = () => async (dispatch) => {
  await Swal.fire({
    title: "Berhasil",
    text: "Kamu berhasil logout",
    icon: "success",
  });
  dispatch({
    type: LOGOUT,
  });
};

export const clearStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_STATUS,
  });
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    dispatch({
      type: REGISTER,
      payload: result.user,
      status: "register success",
    });
    if (result.user) {
      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil melakukan registrasi",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
      });
    }
  } catch (error) {
    authError(error);
  }
};

export const whoami = () => async (dispatch) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/v1/whoami",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    const userInfo = JSON.parse(JSON.stringify(result.user));

    dispatch({
      type: LOGIN,
      payload: localStorage.getItem("token"),
      user: userInfo,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Session anda telah berakhir, silahkan login kembali",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
