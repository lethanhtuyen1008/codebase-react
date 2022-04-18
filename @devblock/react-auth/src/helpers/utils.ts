export class Util {
  public formatString(value: string, variables: object) {
    if (!value) {
      return '';
    }

    return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
      return variables[match.replace(/\{|\}|:/g, '')] || '';
    });
  }
}

export const util = new Util();
