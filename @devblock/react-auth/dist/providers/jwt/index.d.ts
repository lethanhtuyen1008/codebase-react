import { BaseAuthProvider } from '../../core';
import { JwtAuthConfig, JwtSignUpRequest, JwtSignUpResponse, JwtSignInRequest, JwtSignInResponse, JwtResetPasswordRequest, JwtResetPasswordResponse, JwtRenewTokenRequest, JwtRenewTokenResponse, JwtVerifyAccountRequest, JwtVerifyAccountResponse, JwtResendVerificationRequest, JwtResendVerificationResponse } from './types';
export declare class JwtAuthProvider extends BaseAuthProvider<JwtAuthConfig> {
    signUp(endpoint: string, request: JwtSignUpRequest): Promise<JwtSignUpResponse>;
    signIn(endpoint: string, request: JwtSignInRequest): Promise<JwtSignInResponse>;
    signOut(): Promise<boolean>;
    isSignedIn(): boolean;
    resetPassword(endpoint: string, request: JwtResetPasswordRequest): Promise<JwtResetPasswordResponse>;
    renewToken(endpoint: string, request: JwtRenewTokenRequest): Promise<JwtRenewTokenResponse>;
    verifyAccount(endpoint: string, request: JwtVerifyAccountRequest): Promise<JwtVerifyAccountResponse>;
    resendVerification(endpoint: string, request: JwtResendVerificationRequest): Promise<JwtResendVerificationResponse>;
}
