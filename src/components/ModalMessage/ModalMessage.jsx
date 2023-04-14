import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { ModalMessageStyled } from './ModalMessage.styled';
import { Button } from 'components/Styled';
import { selectError } from 'redux/auth/selectors';

export const ModalDailyCalories = () => {
  const message = useSelector(selectError);

  return (
    <Modal>
      <ModalMessageStyled>
        <div>{message}</div>
        <div className="button-container">
          <Button className="white" type="button">
            Close
          </Button>
        </div>
      </ModalMessageStyled>
    </Modal>
  );
};
