import { useContext } from 'react';
import { AmiAuthContext } from 'src/ami/oauth/amiAuthContext';

export const useAmiAuthState = () => useContext(AmiAuthContext);
