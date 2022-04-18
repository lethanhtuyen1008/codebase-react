declare class CookieProvider {
    set(key: string, value: string, timeoutInMinutes?: number): void;
    get(key: string, defaultValue?: string): string;
    has(key: string): boolean;
    delete(key: string): void;
    multiDelete(keys: string[]): void;
    updateExpirationTime(key: string, value: string, timeoutInMinutes?: number): void;
}
export declare const cookieProvider: CookieProvider;
export {};
