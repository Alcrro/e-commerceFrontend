'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, ReactNode } from 'react';
import { useClickOutside } from '@/utils/useClickOutside';
import style from './modal.module.scss';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useUtilsStore } from '@/store/useUtilsStore';
import SuccessRedirect from '@/components/ui/redirect/SuccessRedirect';
import RedirectTo from '@/components/ui/redirect/SuccessRedirect';

export default function AuthPage({ children }: { children: ReactNode }) {
  const { auth } = useParams(); // 'login' or 'signup'
  const pathname = usePathname();
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isLogin = auth === 'login';
  const formType = isLogin ? 'login' : 'Sign up';
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isRedirecting = useUtilsStore((store) => store.isRedirecting);
  const setIsRedirecting = useUtilsStore((store) => store.setIsRedirecting);
  const [countdown, setCountdown] = useState(3);

  // Prevent useClickOutside from firing instantly
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useClickOutside({
    ref: wrapperRef,
    callback: () => {
      if (mounted && !isRedirecting) {
        setIsModalOpen(false);
        const prevURL =
          useSettingsStore
            .getState()
            .settings.find((s) => s.key === 'auth-prev-url')?.value || '/';
        router.replace(prevURL);
      }
    },
  });

  useEffect(() => {
    if (isRedirecting) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const redirectTimeout = setTimeout(() => {
        setIsModalOpen(false);
        router.push('/');
        setIsRedirecting(); // ✅ Reset redirecting state
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimeout);
      };
    }
  }, [isRedirecting, router, pathname]);
  const addSettingsStore = useSettingsStore((store) => store.addToSettings);
  const settingsStore = useSettingsStore((store) => store.settings);

  useEffect(() => {
    const saved = settingsStore.some(
      (setting) => setting.key === 'auth-prev-url'
    );

    const referrer = document.referrer;
    const isReferrerAuth = referrer.includes('/auth');

    if (!saved && !pathname.startsWith('/auth') && !isReferrerAuth) {
      addSettingsStore({ key: 'auth-prev-url', value: pathname });
    }
  }, [pathname, addSettingsStore, settingsStore]);

  // ✅ Hide modal if user is not on /auth/login or /auth/signup
  useEffect(() => {
    if (!pathname.startsWith('/auth')) {
      setIsModalOpen(false);
      router.replace(pathname); // force unmount this page
    }
  }, [pathname]);

  return (
    <>
      {isModalOpen && (
        <div className={`${style.modal} md:p-5`}>
          <div className={style.modal_content} ref={wrapperRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
