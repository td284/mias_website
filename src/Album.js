import React from 'react';
import {
  Link
} from "react-router-dom";

function Art(props) {
  return (
    <img className="art" src={props.src} alt={props.alt} />
  )
}

class Album extends React.Component {
  state = {
    images: [],
  }

  componentDidMount() {
    const albumID = this.props.match.params.albumID
    fetch(`https://api.imgur.com/3/album/${albumID}/images`, {
      headers: {
        'Authorization': 'Client-ID 156c744b0bf614d'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            images: result.data
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
      <h1>Album</h1>

      <div className="art-gallary">
        {this.state.images.map((img, i)=>
          <Link key={i} to={`/images/${img.id}`} >
            <Art src={img.link} alt={img.title} />
          </Link>
        )}
      </div>
    </div>
  }

}

export default Album;
