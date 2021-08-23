import { useParams } from "react-router";
import { Arrow } from "../icons";
import LastMessagesItem from "../LastMessagesItem/LastMessagesItem";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { MessageData, User } from '../../types/index';
import "./LastMessages.scss";
export default function LastMessages({ messages, users }: { messages: MessageData[], users: User[] } ) {
  const { id } = useParams<{id: string}>();
  return (
    <div className={`lastMessagesCol ${id && "hide"}`}>
      <div className="lastMessagesHeader">
        <span>mucahitsah</span>
        <Arrow />
      </div>
      <div className="lastMessages">
        {messages.map((message) => {
          const user = users.find((user) => user.username === message.to);
          if (user) {
            return (
              <LastMessagesItem
                username={user.username}
                userImage={user.userimage}
                lastMessage={message.messages.slice(-1)[0].message}
              />
            );
          }
        })}
        <BottomNavigation />
      </div>
    </div>
  );
};
