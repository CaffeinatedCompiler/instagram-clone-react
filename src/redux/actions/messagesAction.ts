export const addMessageAction = (message: string, from: string, to: string) => ({
  type: 'ADD_MESSAGE',
  payload: { message, from, to },
})
