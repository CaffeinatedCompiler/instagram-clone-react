import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ChatInputs from '../ChatInputs/ChatInputs'
import FromMessage from '../FromMessage/FromMessage'
import { Info } from '../icons'
import MyMessage from '../MyMessage/MyMessage'
import { MessageData, User } from '../../types/index'
import './Chat.scss'

export default function Chat({ messages, users }: { messages: MessageData[]; users: User[] }) {
  const { id } = useParams<{ id: string }>()
  const [messagesData, setMessagesData] = useState<MessageData | null>(null)
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    var element = document.querySelector('.chatMessages') as HTMLDivElement
    element.scrollTop = element.scrollHeight
  }, [])

  useEffect(() => {
    setMessagesData(messages.find((message) => message.to === id))
    setUser(users.find((user) => user.username === id))
  }, [id])
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderAvatar">
          <img src={user && user.userimage} alt="chatHeaderAvatar" />
        </div>
        <div className="chatHeaderUsername">
          <span>{user && user.username}</span>
        </div>
        <Info />
      </div>
      <div className="chatMessages">
        {messagesData &&
          user &&
          messagesData.messages.map((message) => {
            if (message.from === user.username) {
              return <FromMessage userImage={user.userimage} message={message.message} />
            } else {
              return <MyMessage message={message.message} />
            }
          })}
      </div>
      <ChatInputs to={user && user.username} />
    </div>
  )
}
