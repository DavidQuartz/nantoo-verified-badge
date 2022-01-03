import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'inline',
    position: 'relative'
  },
  iconBg: {
    backgroundColor: 'white',
    display: 'inline-block',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  icon: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    width: '1rem',
    zIndex: 1

  },
  iconInfo: {
    zIndex: '50',
    left: '50%',
    width: 'max-content',
    top: '0',
    transform: 'translate(-50%, 50%)',
  },
  parent: {
    position: 'relative',
    display: 'inline-block',
    height: '100%',
    width: '1rem'
  },
  child: {
    height: '0.875rem',
    width: '0.875rem',
    paddind: '0',
    borderRadius: '9999px'
  }
}));

const VerificationCheck = ({ status, type }) => {
  const classes = useStyles();

  const renderVerificationIcon = (verificationStats) => {
    switch (verificationStats) {
      case 'idVerified':
        return (
          <div className={classes.parent}>
            <div className={`${classes.child} ${classes.iconBg}`}></div>
            <img
              src='./assets/half-verified-badge.svg'
              alt="verification badge"
              className={classes.icon}
              title="Profile verified with ID"
            />
          </div>
        );

      case 'selfieVerified':
        return (
          <div className={classes.parent}>
            <div className={`${classes.child} ${classes.iconBg}`}></div>
            <img
              src='./assets/half-verified-badge.svg'
              alt="verification badge"
              className={classes.icon}
              title="Profile verified with live selfie"
            />
          </div>
        );

      case 'completelyVerified':
        return (
          <div className={classes.parent}>
            <div className={`${classes.child} ${classes.iconBg}`}></div>
            <img
              src='./assets/verified-badge.svg'
              alt="verification badge"
              className={classes.icon}
              title="Profile verified with ID and selfie"
            />
          </div>
        );

      default:
        if (status) {
          return (
            <div className={classes.parent}>
              <div
                className={`${classes.child} ${classes.iconBg}`}
              ></div>
              <img
                src='./assets/verified-badge.svg'
                alt="verification badge"
                className={classes.icon}
                title="Profile verified"
              />
            </div>
          );
        } else {
          return <></>;
        }
    }
  };

  return <div className={classes.wrapper}>{renderVerificationIcon(type)}</div>;
};

VerificationCheck.propTypes = {
  status: PropTypes.bool,
  type: PropTypes.string,
};

VerificationCheck.defaultProps = {
  status: false,
}

export default VerificationCheck;
