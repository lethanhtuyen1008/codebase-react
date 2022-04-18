class CookieProvider {
  public set(key: string, value: string, timeoutInMinutes: number = 60): void {
    const time = Date.now() + timeoutInMinutes * 60 * 1000;
    const expirationTime = new Date(time);

    document.cookie = `${key}=${value};expires=${expirationTime.toUTCString()}`;
  }

  public get(key: string, defaultValue?: string): string {
    const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
    if (match) {
      return match[2];
    }

    return defaultValue || '';
  }

  public has(key: string): boolean {
    return !!this.get(key);
  }

  public delete(key: string): void {
    this.set(key, '', -1000);
  }

  public multiDelete(keys: string[]): void {
    for (const key of keys) {
      this.delete(key);
    }
  }

  public updateExpirationTime(key: string, value: string, timeoutInMinutes: number = 60): void {
    this.set(key, value, timeoutInMinutes);
  }
}

export const cookieProvider = new CookieProvider();
