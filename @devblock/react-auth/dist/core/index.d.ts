import { AuthConfig, RenewTokenRequest, RenewTokenResponse, ResendVerificationRequest, ResendVerificationResponse, ResetPasswordRequest, ResetPasswordResponse, SignInRequest, SignInResponse, SignOutRequest, SignOutResponse, SignUpRequest, SignUpResponse, VerifyAccountRequest, VerifyAccountResponse } from './types';
export interface AuthProvider {
    signUp(endpoint: string, request: SignUpRequest): Promise<SignUpResponse>;
    signIn(endpoint: string, request: SignInRequest): Promise<SignInResponse>;
    signOut(endpoint?: string, request?: SignOutRequest): Promise<SignOutResponse>;
    isSignedIn(): boolean;
    resetPassword(endpoint: string, request: ResetPasswordRequest): Promise<ResetPasswordResponse>;
    renewToken(endpoint: string, request: RenewTokenRequest): Promise<RenewTokenResponse>;
    verifyAccount(endpoint: string, request: VerifyAccountRequest): Promise<VerifyAccountResponse>;
    resendVerification(endpoint: string, request: ResendVerificationRequest): Promise<ResendVerificationResponse>;
}
export declare abstract class BaseAuthProvider<T extends AuthConfig> implements AuthProvider {
    config: T;
    constructor(config: T);
    abstract signUp(endpoint: string, request: SignUpRequest): Promise<SignUpResponse>;
    abstract signIn(endpoint: string, request: SignInRequest): Promise<SignInResponse>;
    abstract signOut(endpoint?: string, request?: SignOutRequest): Promise<SignOutResponse>;
    abstract isSignedIn(): boolean;
    abstract resetPassword(endpoint: string, request: ResetPasswordRequest): Promise<ResetPasswordResponse>;
    abstract renewToken(endpoint: string, request: RenewTokenRequest): Promise<RenewTokenResponse>;
    abstract verifyAccount(endpoint: string, request: VerifyAccountRequest): Promise<VerifyAccountResponse>;
    abstract resendVerification(endpoint: string, request: ResendVerificationRequest): Promise<ResendVerificationResponse>;
}
