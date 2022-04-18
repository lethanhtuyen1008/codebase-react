import mapKeys from 'lodash/mapKeys';

export class Util {
  public isValidNumber(number: any): boolean {
    return !isNaN(number);
  }

  public isValidEmail(email: string) {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,})+$/;
    return !reg.test(email);
  }

  /**
   * Validate phone number
   * @param {String} value
   */
  public isValidPhoneNumber(value: string) {
    const reg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return !reg.test(value);
  }

  /**
   * Validate password
   * @param {String} value
   */
  public isValidPassword(value: string) {
    return value.length >= 8;
  }

  public formatPhoneNumber(phoneNumberString: string) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return null;
  }

  public formatString(value: string, variables: object) {
    if (!value) {
      return '';
    }

    const resutl = value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
      return encodeURIComponent(variables[match.replace(/\{|\}|:/g, '')] || '');
    });

    return resutl;
  }

  public getBreadcrumDefault(value: string): { breadcrum: string[]; newPathName: string[] } {
    const pathName: string[] = value.split('/');
    pathName.shift();
    const newPathName = pathName.filter((item) => !item.includes('?'));

    const breadcrum = newPathName.map((item) => {
      return encodeURIComponent(`{"value": "${item}", "name":"${item}"}`);
    });

    return { breadcrum, newPathName };
  }

  public randomString(length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  public formatNumberWithComma(value: any, defaultValue?: any): string {
    if (!value) {
      return defaultValue !== undefined ? defaultValue : '0';
    }

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public convertBase64ToBlob(data: string): Promise<any> {
    return fetch(data).then((res) => res.blob());
  }

  public convertBlobToFile(blob: Blob, fileName: string): File {
    var b: any = blob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>blob;
  }

  public isJson(data: string) {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }

  public hiddenText(data: string, maxLength: number = 25) {
    if (data?.length > maxLength) {
      return `${data.substr(0, maxLength)}...`;
    }
    return data;
  }

  public removeKeyInObject(value: any, keyRemove: string) {
    const result = {};
    mapKeys(value, (item: string, key: string) => {
      if (!key.toLocaleLowerCase().includes(keyRemove.toLocaleLowerCase())) {
        result[key] = item;
      }
    });

    return result;
  }

  public sortNumber(x: number, y: number) {
    if (x > y) {
      return { start: y, end: x };
    }

    return { start: x, end: y };
  }

  public stringIsNumber(value: any) {
    return !isNaN(value * 1);
  }

  public isValidDate(value: any) {
    return this.stringIsNumber(value) || new Date(value).toString() === 'Invalid Date';
  }
}

export const util = new Util();
