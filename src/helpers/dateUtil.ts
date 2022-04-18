import { formatDistanceToNow, differenceInDays, format } from 'date-fns';
import { Constant } from 'src/commons/constant';

export class DateUtil {
  public formatDiffFromNow(value: string): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    if (differenceInDays(new Date(), date) > 1) {
      return format(date, Constant.DATE_TIME_FORMAT);
    }

    return formatDistanceToNow(date);
  }

  public formatUTCToLocalDate(
    value: string,
    formatString: string = Constant.DATE_TIME_FORMAT_LAST_ACTIVITY,
  ): string {
    const date = new Date(value);

    return format(date, formatString);
  }
}

export const dateUtil = new DateUtil();
