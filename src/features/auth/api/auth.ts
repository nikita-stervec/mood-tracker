import { FirebaseError } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const handleFirebaseError = (error: unknown) => {
  if (error instanceof FirebaseError) {
    throw new Error(error.message);
  }
  throw new Error('An unexpected error occurred');
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    );
    return userCredential.user;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const register = async (userData: {
  email: string;
  password: string;
}) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    );
    return userCredential.user;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const logout = async () => {
  const auth = getAuth();
  try {
    await auth.signOut();
  } catch (error) {
    handleFirebaseError(error);
  }
};
