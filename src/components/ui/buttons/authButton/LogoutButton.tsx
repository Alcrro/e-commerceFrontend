'use client';
import ButtonLink from '../defaultButton/Button';
import LogoutIcon from '../../icon/LogoutIcon';

const LogoutButton = ({ classname }: { classname?: string }) => {
  return (
    <ButtonLink
      label={'Logout'}
      usedForm={false}
      variant="danger"
      ariaLabel="logout"
      classname={`${classname} w-full align-middle gap-2 hover:opacity-30 hover:text-[#797979] transition-colors duration-300 ease-in-out
  `}
      icon={<LogoutIcon />}
    />
  );
};
export default LogoutButton;
