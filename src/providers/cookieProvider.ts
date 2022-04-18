class CookieProvider {
  public set(key: string, value: string, timeoutInMinutes: number = 60): void {
    const time = Date.now() + timeoutInMinutes * 60 * 1000;
    const expirationTime = new Date(time);

    document.cookie = `${key}=${value};expires=${expirationTime.toUTCString()};path=/`;
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

  public updateExpirationTime(key: string, value: string): void {
    this.set(key, value);
  }

  public setObject(key: string, value: any, timeoutInMinutes?: number): void {
    this.set(key, JSON.stringify(value), timeoutInMinutes);
  }

  public getObject<T>(key: string, defaultValue?: T | null): T | null {
    const val = this.get(key);
    try {
      return val ? JSON.parse(val) : defaultValue;
    } catch (err) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw err;
    }
  }
}

export const cookieProvider = new CookieProvider();
