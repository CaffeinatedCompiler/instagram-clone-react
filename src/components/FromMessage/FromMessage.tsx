import { More } from "../icons";
import "./FromMessage.scss";
export default function FromMessage({ userImage, message }: {userImage: string, message: string}){
  return (
    <div className="fromMessageItem">
      <img src={userImage} alt="chatHeaderAvatar" />
      <div className="fromMessage">
        <span>{message}</span>
      </div>
      <More />
    </div>
  );
};
