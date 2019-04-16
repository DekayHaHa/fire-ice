export const updateHouses = (houses) => ({
  type: 'UPDATE_HOUSES',
  houses
})

export const isLoading = (isLoading) => ({
  type: "IS_LOADING",
  isLoading
})

export const hasError = (error) => ({
  type: "HAS_ERROR",
  error
})