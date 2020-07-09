import produce from "immer";

const initState = {
  data: null,
  isLoading: false
};

export const winnersReducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return draft;
  }

}, initState);
