import React from 'react';

function Art(props) {
  return (
    <img className="art" src={props.src} alt={props.alt} />
  )
}

class Gallary extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    fetch("https://api.imgur.com/3/album/XMIUxf2/images", {
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
      <h1>Gallary</h1>

      <div className="art-gallary">
        {this.state.images.map((img, i)=>
          <Art key={i} src={img.link} alt={img.title} />
        )}
        <Art src="https://i.imgur.com/d9jmOJU.jpg" alt="duck" />
      </div>
    </div>
  }


}

export default Gallary;
