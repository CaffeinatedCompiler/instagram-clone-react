import { KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks'
import { addMessageAction } from '../../redux/actions/messagesAction';
import { Heart, Photo, Smile } from '../icons';
import './ChatInputs.scss';

export default function ChatInputs({ to }: { to: string }) {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const sendMessage = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (to !== '' && message !== '') {
        dispatch(addMessageAction(message, 'mucahitsahin', to));
        setMessage('');
      }
    }
  };
  return (
    <div className="chatInputRow">
      <div className="chatInput">
        <Smile />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => sendMessage(e)}
        />
        <Photo />
        <Heart />
      </div>
    </div>
  );
}
