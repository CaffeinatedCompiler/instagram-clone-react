import NewMessage from '../../components/NewMessage/NewMessage';
import HomeBox from '../../components/HomeBox/HomeBox';
import './Direct.scss';
import LastMessages from '../../components/LastMessages/LastMessages';
import { useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router';
import Chat from '../../components/Chat/Chat';

export default function Direct() {
  const { id } = useParams<{ id: string }>();
  let messages = useAppSelector((state) => state.messages);
  let users = useAppSelector((state) => state.users);
  return (
    <HomeBox>
      <div className="direct">
        <LastMessages messages={messages} users={users} />
        {id ? <Chat messages={messages} users={users} /> : <NewMessage />}
      </div>
    </HomeBox>
  );
}
