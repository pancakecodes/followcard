import { useState } from 'react';
import profileImage from '../assets/img/alex-mccarthy-RGKdWJOUFH0-unsplash.jpg';

const FollowCard = () => {
  const [followStatus, setFollowStatus] = useState('Follow');

  const handleFollowClick = () => {
    if (followStatus === 'Follow') {
      setFollowStatus('Following');
      alert('You are now following this person.');
    } else {
      setFollowStatus('Follow');
      alert('You have unfollowed this person.');
    }
  };

  return (
    <div className="follow-card-container">
      <div className="follow-card">
        <div className="follow-card-header">
          <img src={profileImage} alt="profile" className="profile-image" />
          <button
            className={`follow-button ${followStatus === 'Following' ? 'following' : ''}`}
            onClick={handleFollowClick}
          >
            {followStatus}
          </button>
        </div>
        <div className="follow-card-body">
        <div className="follow-info">
            <h3 className="name">Emily Johnson</h3>
            <h4 className="username">@emily_tech</h4>
          </div>
          <p className="bio">Passionate about technology and empowering women in STEM. Let's change the world together!</p>
            <p className="location">San Francisco, CA</p>
          <div className="follow-stats">
            <p className="total-followers">500 followers</p>
            <p className="total-following">500 following</p>
            </div>
        </div>
        <div className="follow-card-footer">
        </div>
        <p className="recomendations">You may know this person because these followers follow this person.</p>
      </div>
    </div>
  );
};

export default FollowCard;
