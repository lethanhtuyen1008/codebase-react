import * as React from 'react';
import { createContext } from 'react';
import { ResponseAuthType } from './useVerifiedAuth';

export type AmiAuthState = {
  token: string | null;
  verifiedResponseAuth: ResponseAuthType | null;
};

export enum ActionsTokenTypes {
  STORE_TOKEN = 'storeToken',
  DELETE_TOKEN = 'deleteToken',
}

export type AmiAuthActions =
  | {
      type: ActionsTokenTypes.STORE_TOKEN;
      token: string;
      verifiedResponseAuth: ResponseAuthType;
    }
  | {
      type: ActionsTokenTypes.DELETE_TOKEN;
    };

const initialState: AmiAuthState = {
  token: null,
  verifiedResponseAuth: null,
};

const initialAmiAuthContext: {
  amiAuthState: AmiAuthState;
  updateAmiAuth: React.Dispatch<AmiAuthActions>;
} = {
  amiAuthState: initialState,
  updateAmiAuth: () => {},
};

export const AmiAuthContext = createContext(initialAmiAuthContext);
