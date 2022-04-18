import * as React from 'react';
import { useReducer } from 'react';
import {
  AmiAuthState,
  AmiAuthActions,
  AmiAuthContext,
  ActionsTokenTypes,
} from 'src/ami/oauth/amiAuthContext';
import { CookieKey } from 'src/commons/cookieKey';
import { cookieProvider } from 'src/providers/cookieProvider';

const reducer = (state: AmiAuthState, action: AmiAuthActions) => {
  switch (action.type) {
    case ActionsTokenTypes.STORE_TOKEN:
      return {
        token: action.token,
        verifiedResponseAuth: action.verifiedResponseAuth,
      };
    case ActionsTokenTypes.DELETE_TOKEN:
      return {
        token: null,
        verifiedResponseAuth: null,
      };
    default:
      return state;
  }
};

const initialState: AmiAuthState = {
  token: cookieProvider.get(CookieKey.ACCESS_TOKEN),
  verifiedResponseAuth: cookieProvider.getObject(CookieKey.VERIFIED_RESPONSE_AUTH),
};

export function AmiAuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AmiAuthContext.Provider value={{ amiAuthState: state, updateAmiAuth: dispatch }}>
      {children}
    </AmiAuthContext.Provider>
  );
}
