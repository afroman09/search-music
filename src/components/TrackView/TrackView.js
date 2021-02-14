import React from 'react'
import { useHistory } from "react-router-dom";

const TrackView = (props) => {

    const history = useHistory();

    const trackchange = (id) => {
        history.push(`/Search?query=${id}`);
    }

    return (
        <div>
            
      {props.track.map(({ name, id }) => (
        <div>
          <p onClick={() => trackchange(id)}>{name}</p>
        </div>
      ))}
        </div>
    )
}

export default TrackView
