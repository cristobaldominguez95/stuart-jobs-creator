import React from 'react';
import './index.css';
import Map from './components/Map/Map';
import CreateJobCard from './components/CreateJobCard/CreateJobCard';
import Toast from './components/Toast/Toast';
import styles from './App.module.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <>
      <Map />
      <div className={styles['div-card']}>
        <CreateJobCard />
      </div>
      {props.displayToast && <Toast />}
    </>
  );
}

const mapStateToProps = (state) => ({
  displayToast: state.displayToast
});

export default connect(mapStateToProps)(App);
