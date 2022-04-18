import { AxiosInstance } from '../../@types/axios';
import { AuthConfig, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse, SignOutRequest, SignOutResponse, ResetPasswordRequest, ResetPasswordResponse, RenewTokenRequest, RenewTokenResponse, VerifyAccountRequest, VerifyAccountResponse, ResendVerificationRequest, ResendVerificationResponse } from '../../core/types';
export interface JwtAuthConfig extends AuthConfig {
    axiosClient: AxiosInstance;
    accessTokenKey: string;
    refreshTokenKey: string;
}
export declare class JwtSignInRequest extends SignInRequest {
    email: string;
    password: string;
}
export declare class JwtSignInResponse extends SignInResponse {
    token?: string;
    refreshToken: string;
    id: string;
    email: string;
    userStatus: string;
    message: string;
}
export declare class JwtSignUpRequest extends SignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export declare class JwtSignUpResponse extends SignUpResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}
export declare class JwtSignOutRequest extends SignOutRequest {
}
export declare class JwtSignOutResponse extends SignOutResponse {
}
export declare class JwtResetPasswordRequest extends ResetPasswordRequest {
}
export declare class JwtResetPasswordResponse extends ResetPasswordResponse {
}
export declare class JwtRenewTokenRequest extends RenewTokenRequest {
    refreshToken: string;
}
export declare class JwtRenewTokenResponse extends RenewTokenResponse {
    token: string;
    refreshToken: string;
}
export interface JwtVerifyAccountRequest extends VerifyAccountRequest {
    id: string;
    code: string;
}
export interface JwtVerifyAccountResponse extends VerifyAccountResponse {
    firstName: string;
    lastName: string;
    email: string;
    userStatus: string;
}
export interface JwtResendVerificationRequest extends ResendVerificationRequest {
    uid: string;
}
export interface JwtResendVerificationResponse extends ResendVerificationResponse {
}
