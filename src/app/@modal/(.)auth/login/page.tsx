'use client';
import AuthForm from '@/app/auth/components/AuthForm';
import TitleForm from '@/app/auth/components/TitleForm';
import AuthLayout from '@/components/layouts/authLayout/AuthLayout';
import style from './modal.module.scss';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginModal() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(3); // Countdown starts at 5 seconds

  const handleLoginSuccess = () => {
    setIsRedirecting(true); // Start the countdown
  };

  // Countdown effect
  useEffect(() => {
    if (isRedirecting) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // Redirect after 5 seconds
      const redirectTimeout = setTimeout(() => {
        setIsModalOpen(false);
        router.push('/');
        router.refresh();
      }, 3000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimeout);
      };
    }
  }, [isRedirecting, router]);

  return (
    <>
      {isModalOpen && (
        <div className={style.modal}>
          <div className={style.modal_content}>
            {!isRedirecting ? (
              <>
                <TitleForm titleName="Login" />
                <AuthForm action="login" onSuccess={handleLoginSuccess} />
              </>
            ) : (
              <div className={`${style.redirect_message} text-center`}>
                <h2 className="text-green-600">Login Successful!</h2>
                <p>Redirecting to homepage in {countdown} seconds...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
