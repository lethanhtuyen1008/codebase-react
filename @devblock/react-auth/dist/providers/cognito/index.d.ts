import { BaseAuthProvider } from '../../core';
import { CognitoAuthConfig, CognitoRenewTokenRequest, CognitoRenewTokenResponse, CognitoResendVerificationRequest, CognitoResendVerificationResponse, CognitoResetPasswordRequest, CognitoResetPasswordResponse, CognitoSignInRequest, CognitoSignInResponse, CognitoSignOutRequest, CognitoSignOutResponse, CognitoSignUpRequest, CognitoSignUpResponse, CognitoVerifyAccountRequest, CognitoVerifyAccountResponse } from './types';
export declare class CognitoAuthProvider extends BaseAuthProvider<CognitoAuthConfig> {
    signUp(request: CognitoSignUpRequest): Promise<CognitoSignUpResponse>;
    signIn(request: CognitoSignInRequest): Promise<CognitoSignInResponse>;
    signOut(request: CognitoSignOutRequest): Promise<CognitoSignOutResponse>;
    isSignedIn(): boolean;
    resetPassword(request: CognitoResetPasswordRequest): Promise<CognitoResetPasswordResponse>;
    renewToken(request: CognitoRenewTokenRequest): Promise<CognitoRenewTokenResponse>;
    verifyAccount(endpoint: string, request: CognitoVerifyAccountRequest): Promise<CognitoVerifyAccountResponse>;
    resendVerification(endpoint: string, request: CognitoResendVerificationRequest): Promise<CognitoResendVerificationResponse>;
}
