import { messages } from '../../data/messages';
import { Message } from '../../types';

const initialState = messages;
type MessageAction = { type: 'ADD_MESSAGE', payload: Message }
export default function messagesReducer(state = initialState, action: MessageAction) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      var arr = state;
      arr
        .find((message) => message.from === action.payload.from && message.to === action.payload.to)
        .messages.push({
          message: action.payload.message,
          from: action.payload.from,
        });
      return [...arr];
    default:
      return state;
  }
}
