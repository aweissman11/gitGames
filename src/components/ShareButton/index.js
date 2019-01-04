import React from 'react';

import './ShareButton.css';

const ShareButton = (props) => {

  const shareThis = async () => {
    const url = `https://cors-anywhere.herokuapp.com/gitgames.herokuapp.com/api/v1/messaging?username=${props.username}`
    const optionsObject = {
      method: "POST", 
    }
    
    const response = await fetch(url, optionsObject)

    if (response.status === 204) {
      alert('email sent to your gitHub followers')
    } else {
      alert('email not sent')
    }
  }

  return (
    <div className='share-btn-box'>
      <p className='share-btn' onClick={() => shareThis()}>Email Followers</p>
    </div>
  )
}

export default ShareButton;