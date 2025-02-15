import MainLayout from '@/components/layouts/mainLayout/MainLayout';
import ModalLogoutButton from './auth/components/ModalLogoutButton';

export default function Home() {
  return (
    <MainLayout>
      <div className=" w-20">
        <ModalLogoutButton />
      </div>
    </MainLayout>
  );
}
