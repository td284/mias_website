import React from 'react';
import {
  Link
} from "react-router-dom";

class Albums extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    fetch("https://api.imgur.com/3/account/Chickenmanasdf/albums", {
      headers: {
        'Authorization': 'Client-ID 156c744b0bf614d'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            albums: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return <div>
      <h1>Albums</h1>

      <div value="hash" className="art-gallary">
        {this.state.albums.map((album, i)=>
          <Art key={i} id={album.id} src={`https://i.imgur.com/${album.cover}.jpeg`} alt={album.title} />
        )}
      </div>
    </div>
  }

}

function Art(props) {
  return (
    <Link to={`/albums/${props.id}`} >
      <img className="art" src={props.src} alt={props.alt} />
    </Link>
  )
}

export default Albums;
