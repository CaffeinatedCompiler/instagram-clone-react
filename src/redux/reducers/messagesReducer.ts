import { messages } from '../../data/messages';
import { Message, MessageData } from '../../types';

const initialState = messages;
type MessageAction = { type: 'ADD_MESSAGE', payload: Message }
export default function messagesReducer(state: MessageData[] | undefined = initialState, action: MessageAction) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      state
        .find((message) => message.from === action.payload.from && message.to === action.payload.to)
        .messages.push({
          message: action.payload.message,
          from: action.payload.from,
          to: action.payload.to
        });
      return [...state];
    default:
      return state;
  }
}
