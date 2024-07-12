import Swal from "sweetalert2";
import {
  GET_ALL_TRBUYER,
  GET_ALL_TRSELLER,
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "../actions/types";

const { REACT_APP_BACKEND_URL } = process.env;

export const getTransactionBuyer = () => async (dispatch) => {
  const res = await fetch(`${REACT_APP_BACKEND_URL}/api/v1/trBuyer`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  dispatch({
    type: GET_ALL_TRBUYER,
    payload: data.transactions,
    status: data.status,
  });
};

export const getTransactionSeller = () => async (dispatch) => {
  const res = await fetch(`${REACT_APP_BACKEND_URL}/api/v1/trSeller`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  dispatch({
    type: GET_ALL_TRSELLER,
    payload: data.transactions,
    status: data.status,
  });
};

export const createTransaction = (data) => async (dispatch) => {
  const response = await fetch(
    `${REACT_APP_BACKEND_URL}/api/v1/transaction?` + new URLSearchParams(data),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const result = await response.json();

  if (result.error) {
    Swal.fire({
      title: "Error",
      text: result.error,
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success",
      text: "Transaksi anda sedang diproses",
      icon: "success",
    });
    dispatch({
      type: CREATE_TRANSACTION,
      status: result.status,
    });
  }
};

export const updateTransaction = (args) => async (dispatch) => {
  const response = await fetch(
    `${REACT_APP_BACKEND_URL}/api/v1/transaction?` + new URLSearchParams(args),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const result = await response.json();

  if (result.error) {
    Swal.fire({
      title: "Error",
      text: result.error,
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success",
      text: "Transaksi berhasil diperbaharui",
      icon: "success",
    });
    dispatch({
      type: UPDATE_TRANSACTION,
      status: result.status,
    });
  }
};

export const updateStatusTransaction = (args) => async (dispatch) => {
  const response = await fetch(
    `${REACT_APP_BACKEND_URL}/api/v1/transaction/status?` +
      new URLSearchParams(args),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const result = await response.json();

  if (result.error) {
    Swal.fire({
      title: "Error",
      text: result.error,
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success",
      text: "Transaksi selesai",
      icon: "success",
    });
    dispatch({
      type: UPDATE_TRANSACTION,
      status: result.status,
    });
  }
};
