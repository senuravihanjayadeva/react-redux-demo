import api from "./StudentAPI";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .students()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const create = (data, OnSuccess) => (dispatch) => {
  api
    .students()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const update = (id, data, OnSuccess) => (dispatch) => {
  api
    .students()
    .update(id, data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Delete = (id, OnSuccess) => (dispatch) => {
  api
    .students()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: { id },
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};
