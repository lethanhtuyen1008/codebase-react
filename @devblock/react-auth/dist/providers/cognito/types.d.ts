import { AuthConfig, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse, SignOutRequest, SignOutResponse, ResetPasswordRequest, ResetPasswordResponse, RenewTokenRequest, RenewTokenResponse, ResendVerificationRequest, ResendVerificationResponse, VerifyAccountRequest, VerifyAccountResponse } from '../../core/types';
export declare class CognitoAuthConfig extends AuthConfig {
}
export declare class CognitoSignInRequest extends SignInRequest {
}
export declare class CognitoSignInResponse extends SignInResponse {
}
export declare class CognitoSignUpRequest extends SignUpRequest {
}
export declare class CognitoSignUpResponse extends SignUpResponse {
}
export declare class CognitoSignOutRequest extends SignOutRequest {
}
export declare class CognitoSignOutResponse extends SignOutResponse {
}
export declare class CognitoResetPasswordRequest extends ResetPasswordRequest {
}
export declare class CognitoResetPasswordResponse extends ResetPasswordResponse {
}
export declare class CognitoRenewTokenRequest extends RenewTokenRequest {
}
export declare class CognitoRenewTokenResponse extends RenewTokenResponse {
}
export interface CognitoVerifyAccountRequest extends VerifyAccountRequest {
}
export interface CognitoVerifyAccountResponse extends VerifyAccountResponse {
}
export interface CognitoResendVerificationRequest extends ResendVerificationRequest {
}
export interface CognitoResendVerificationResponse extends ResendVerificationResponse {
}
