import React from 'react';
import styles from './CreateJobCard.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { LOCATION_STATUS } from '../../utils';
import { setPickUpAddressInput, setDropOffAddressInput, setPickUpStatus, setDropOffStatus, setCreatingJob, setPickUpCoordinates, setDropOffCoordinates, removePickUpCoordinates, removeDropOffCoordinates } from '../../redux/action-creators';
import { geocode } from '../../api/stuart';

class CreateJobCard extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.submitGeocode = this.submitGeocode.bind(this);
    this.createJob = this.createJob.bind(this);
    this.timeout = undefined;
  }

  onInputChange(e) {
    e.persist();

    if (e.target.name === 'pickUpAddress') {
      this.props.setPickUpAddressInput(e.target.value);
    } else if (e.target.name === 'dropOffAddress') {
      this.props.setDropOffAddressInput(e.target.value);
    }

    clearTimeout(this.timeout);

    // geocode address after user stops typing for one second
    this.timeout = setTimeout(() => {
      this.submitGeocode(e);
    }, 1000);
  }

  async submitGeocode(e) {
    e.persist();
    clearTimeout(this.timeout);

    try {
      const response = await geocode(e.target.value);
      if (e.target.name === 'pickUpAddress') {
        this.props.setPickUpStatus(LOCATION_STATUS.SUCCESS);
        this.props.setPickUpCoordinates(response.data.latitude, response.data.longitude);
      } else if (e.target.name === 'dropOffAddress') {
        this.props.setDropOffStatus(LOCATION_STATUS.SUCCESS);
        this.props.setDropOffCoordinates(response.data.latitude, response.data.longitude);
      }
    } catch (error) {
      if (e.target.name === 'pickUpAddress') {
        this.props.setPickUpStatus(LOCATION_STATUS.ERROR);
        this.props.removePickUpCoordinates();
      } else if (e.target.name === 'dropOffAddress') {
        this.props.setDropOffStatus(LOCATION_STATUS.ERROR);
        this.props.removeDropOffCoordinates();
      }
    }

  }

  async createJob() {
    // TODO: send api request, clear inputs and show toast
  }

  render() {
    return (
      <div className={styles.card}>
        <div>
          <div className={`mb-16 ${styles['input-row']}`}>
            <img
              className={`mr-8 ${styles.svg}`}
              src={`svg/pickUpBadge${this.props.pickUpStatus}.svg`}
              alt="Pick up status"
            />
            <input
              onChange={this.onInputChange}
              onBlur={this.submitGeocode}
              value={this.props.pickUpAddressInput}
              name="pickUpAddress"
              type="text"
              placeholder="Pick up address"
            />
          </div>
          <div className={`mb-16 ${styles['input-row']}`}>
            <img
              className={`mr-8 ${styles.svg}`}
              src={`svg/dropOffBadge${this.props.dropOffStatus}.svg`}
              alt="Drop off status"
            />
            <input
              onChange={this.onInputChange}
              onBlur={this.submitGeocode}
              value={this.props.dropOffAddressInput}
              name="dropOffAddress"
              type="text"
              placeholder="Drop off address"
            />
          </div>
          <div style={{ paddingLeft: '40px' }}>
            <Button
              clicked={this.createJob}
              // create job button only enabled when both addresses are successful and request is not pending
              disabled={this.props.pickUpStatus !== LOCATION_STATUS.SUCCESS || this.props.dropOffStatus !== LOCATION_STATUS.SUCCESS || this.props.isCreatingJob}
            >
              {this.props.isCreatingJob ? 'Creating...' : 'Create job'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pickUpAddressInput: state.pickUpAddressInput,
  dropOffAddressInput: state.dropOffAddressInput,
  pickUpStatus: state.pickUpStatus,
  dropOffStatus: state.dropOffStatus,
  isCreatingJob: state.isCreatingJob
});

export default connect(mapStateToProps, {
  setPickUpAddressInput,
  setDropOffAddressInput,
  setPickUpStatus,
  setDropOffStatus,
  setCreatingJob,
  setPickUpCoordinates,
  setDropOffCoordinates,
  removePickUpCoordinates,
  removeDropOffCoordinates
})(CreateJobCard);
