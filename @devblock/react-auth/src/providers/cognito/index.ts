import { BaseAuthProvider } from '../../core';
import {
  CognitoAuthConfig,
  CognitoRenewTokenRequest,
  CognitoRenewTokenResponse,
  CognitoResendVerificationRequest,
  CognitoResendVerificationResponse,
  CognitoResetPasswordRequest,
  CognitoResetPasswordResponse,
  CognitoSignInRequest,
  CognitoSignInResponse,
  CognitoSignOutRequest,
  CognitoSignOutResponse,
  CognitoSignUpRequest,
  CognitoSignUpResponse,
  CognitoVerifyAccountRequest,
  CognitoVerifyAccountResponse,
} from './types';

export class CognitoAuthProvider extends BaseAuthProvider<CognitoAuthConfig> {
  signUp(request: CognitoSignUpRequest): Promise<CognitoSignUpResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  signIn(request: CognitoSignInRequest): Promise<CognitoSignInResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  signOut(request: CognitoSignOutRequest): Promise<CognitoSignOutResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  isSignedIn(): boolean {
    return false;
  }

  resetPassword(request: CognitoResetPasswordRequest): Promise<CognitoResetPasswordResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  renewToken(request: CognitoRenewTokenRequest): Promise<CognitoRenewTokenResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  verifyAccount(endpoint: string, request: CognitoVerifyAccountRequest): Promise<CognitoVerifyAccountResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  resendVerification(
    endpoint: string,
    request: CognitoResendVerificationRequest
  ): Promise<CognitoResendVerificationResponse> {
    console.log(request);
    return Promise.resolve({});
  }
}
