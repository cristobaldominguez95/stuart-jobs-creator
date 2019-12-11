import React from 'react';
import styles from './Map.module.css';

class Map extends React.Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    let Paris = {
      lat: 48.8660479,
      lng: 2.3145896
    };
    new window.google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: Paris
    });
  }

  render() {
    return (
      <div id="map" className={styles.map}></div>
    );
  }
}

export default Map;
