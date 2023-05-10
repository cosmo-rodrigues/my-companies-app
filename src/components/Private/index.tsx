import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface IProps {
  children: ReactNode;
}
export function Private({ children }: IProps) {
  const { user } = useSelector((state: any) => state.auth);

  if (!user.id) return <Navigate to='/sign-in' />;
  return <>{children}</>;
}
