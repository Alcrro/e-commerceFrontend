import ModalCloseButton from '@/components/buttons/ModalCloseButton';
import style from './modalHeader.module.scss';

const ModalHeader = () => (
  <div className={style.profile_modal_header}>
    <ModalCloseButton />
  </div>
);
export default ModalHeader;
