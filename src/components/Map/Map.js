import React from 'react';
import styles from './Map.module.css';
import { connect } from 'react-redux';

class Map extends React.Component {

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate(prevProps) {
    // if pick up coordinates changed...
    if (prevProps.pickUpCoordinates !== this.props.pickUpCoordinates) {
      // remove or add marker ONLY if it doesn't exist yet
      if (this.props.pickUpCoordinates) {
        if (!this.pickUpMarker) {
          this.pickUpMarker = new window.google.maps.Marker({
            position: {
              lat: this.props.pickUpCoordinates.latitude,
              lng: this.props.pickUpCoordinates.longitude
            },
            map: this.map,
            icon: 'svg/pickUpMarker.svg'
          });
        }
      } else {
        this.pickUpMarker.setMap(null);
        this.pickUpMarker = undefined;
      }
    }

    // same process for drop off coordinates
    else if (prevProps.dropOffCoordinates !== this.props.dropOffCoordinates) {
      if (this.props.dropOffCoordinates) {
        this.dropOffMarker = new window.google.maps.Marker({
          position: {
            lat: this.props.dropOffCoordinates.latitude,
            lng: this.props.dropOffCoordinates.longitude
          },
          map: this.map,
          icon: 'svg/dropOffMarker.svg'
        });
      } else {
        this.dropOffMarker.setMap(null);
        this.dropOffMarker = undefined;
      }
    }
  }

  initMap() {
    let Paris = {
      lat: 48.8660479,
      lng: 2.3145896
    };
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: Paris,
      disableDefaultUI: true
    });
  }

  render() {
    return (
      <div id="map" className={styles.map}></div>
    );
  }
}

const mapStateToProps = (state) => ({
  pickUpCoordinates: state.pickUpCoordinates,
  dropOffCoordinates: state.dropOffCoordinates
});

export default connect(mapStateToProps)(Map);
