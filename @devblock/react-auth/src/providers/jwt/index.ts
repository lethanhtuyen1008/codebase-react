import { BaseAuthProvider } from '../../core';
import { cookieProvider } from '../../core/cookieProvider';
import { util } from '../../helpers/utils';
import {
  JwtAuthConfig,
  JwtSignUpRequest,
  JwtSignUpResponse,
  JwtSignInRequest,
  JwtSignInResponse,
  JwtResetPasswordRequest,
  JwtResetPasswordResponse,
  JwtRenewTokenRequest,
  JwtRenewTokenResponse,
  JwtVerifyAccountRequest,
  JwtVerifyAccountResponse,
  JwtResendVerificationRequest,
  JwtResendVerificationResponse,
} from './types';

export class JwtAuthProvider extends BaseAuthProvider<JwtAuthConfig> {
  signUp(endpoint: string, request: JwtSignUpRequest): Promise<JwtSignUpResponse> {
    const { axiosClient } = this.config;
    return axiosClient.post<JwtSignUpRequest, JwtSignUpResponse>(endpoint, request);
  }

  signIn(endpoint: string, request: JwtSignInRequest): Promise<JwtSignInResponse> {
    const { axiosClient } = this.config;
    return axiosClient.post<JwtSignInRequest, JwtSignInResponse>(endpoint, request);
  }

  signOut(): Promise<boolean> {
    const { accessTokenKey, refreshTokenKey } = this.config;
    cookieProvider.multiDelete([accessTokenKey, refreshTokenKey]);

    return Promise.resolve(true);
  }

  isSignedIn(): boolean {
    return cookieProvider.has(this.config.accessTokenKey);
  }

  resetPassword(endpoint: string, request: JwtResetPasswordRequest): Promise<JwtResetPasswordResponse> {
    console.log(request);
    return Promise.resolve({});
  }

  renewToken(endpoint: string, request: JwtRenewTokenRequest): Promise<JwtRenewTokenResponse> {
    const { axiosClient } = this.config;
    return axiosClient.post<JwtRenewTokenRequest, JwtRenewTokenResponse>(endpoint, request);
  }

  verifyAccount(endpoint: string, request: JwtVerifyAccountRequest): Promise<JwtVerifyAccountResponse> {
    const { axiosClient } = this.config;
    const { id, code } = request;
    const formatedEndpoint = util.formatString(endpoint, { id });

    return axiosClient.patch<JwtVerifyAccountRequest, JwtVerifyAccountResponse>(formatedEndpoint, {
      code,
    });
  }

  resendVerification(endpoint: string, request: JwtResendVerificationRequest): Promise<JwtResendVerificationResponse> {
    const { axiosClient } = this.config;

    return axiosClient.post<JwtResendVerificationRequest, JwtResendVerificationResponse>(endpoint, request);
  }
}
