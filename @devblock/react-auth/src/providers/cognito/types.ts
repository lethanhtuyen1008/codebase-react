import {
  AuthConfig,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  SignOutRequest,
  SignOutResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RenewTokenRequest,
  RenewTokenResponse,
  ResendVerificationRequest,
  ResendVerificationResponse,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '../../core/types';

export class CognitoAuthConfig extends AuthConfig {}

export class CognitoSignInRequest extends SignInRequest {}

export class CognitoSignInResponse extends SignInResponse {}

export class CognitoSignUpRequest extends SignUpRequest {}

export class CognitoSignUpResponse extends SignUpResponse {}

export class CognitoSignOutRequest extends SignOutRequest {}

export class CognitoSignOutResponse extends SignOutResponse {}

export class CognitoResetPasswordRequest extends ResetPasswordRequest {}

export class CognitoResetPasswordResponse extends ResetPasswordResponse {}

export class CognitoRenewTokenRequest extends RenewTokenRequest {}

export class CognitoRenewTokenResponse extends RenewTokenResponse {}

export interface CognitoVerifyAccountRequest extends VerifyAccountRequest {}

export interface CognitoVerifyAccountResponse extends VerifyAccountResponse {}

export interface CognitoResendVerificationRequest extends ResendVerificationRequest {}

export interface CognitoResendVerificationResponse extends ResendVerificationResponse {}
