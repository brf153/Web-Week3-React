import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

const useAuthProtection = () => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  return token;
};

export default useAuthProtection;