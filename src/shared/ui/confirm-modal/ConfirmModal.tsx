import React from 'react';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { IDoc } from 'types/docs';
import { Header, Text } from './styles';

interface Props {
  selectedDate: moment.Moment;
  selectedTime: string;
  isShowModal: boolean;
  docInfo: IDoc;
  handleClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2, 4, 3),
      margin: theme.spacing(4, 6),
    },
  }),
);

export const ConfirmModal: React.FC<Props> = ({ selectedDate, selectedTime, isShowModal, handleClose, docInfo }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isShowModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={isShowModal}>
        <div className={classes.paper}>
          <Header id="simple-modal-title">Confirmation</Header>
          <Text>
            Doctor:
            <span>
              {docInfo.firstName} {docInfo.lastName}
            </span>
          </Text>
          <Text>
            An appointment is available {moment(selectedDate).format('MMM DD, YYYY')} at <span>{selectedTime}</span>
          </Text>
        </div>
      </Fade>
    </Modal>
  );
};
