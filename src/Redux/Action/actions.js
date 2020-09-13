export function addToken(token) {
  return {
    type: 'ADD_TOKEN',
    token,
  };
}

export function addLoading(loading) {
  return {
    type: 'ADD_LOADING',
    loading,
  };
}
