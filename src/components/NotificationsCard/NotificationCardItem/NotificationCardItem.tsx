import './NotificationCardItem.scss';
export default function ThisWeekItem() {
  return (
    <div className="notificationCardItem">
      <div className="notificationCardItemAvatar">
        <img src="https://picsum.photos/200" alt="avatar" />
      </div>
      <div className="notificationCardItemTitle">
        <span>cnecati</span>
        <span>&nbsp;liked your photo.</span>
        <span>&nbsp;3d</span>
      </div>
      <div className="notificationCardItemLikedphoto">
        <img src="https://picsum.photos/200" alt="post" />
      </div>
    </div>
  );
}
