import { ReactNode } from 'react';

// app/@modal/default.tsx
export default function DefaultModalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="modal-wrapper">{children}</div>;
}
