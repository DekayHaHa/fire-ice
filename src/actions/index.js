export const updateHouses = (houses) => ({
  type: 'UPDATE_HOUSES',
  houses
})

export const isLoading = (bool) => ({
  type: "IS_LOADING",
  bool
})

export const hasError = (error) => ({
  type: "HAS_ERROR",
  error
})