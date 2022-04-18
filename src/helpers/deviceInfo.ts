import { osMapping } from 'src/commons/osInfoMapping';

export const getDeviceInfo = () => {
  return `Browser: ${getOSName()}, OS: ${getOSName()}`;
};

export const getBrowserName = (): string => {
  const browerInfoMatch =
    navigator.userAgent.match(
      /(firefox|msie|trident|chrome|safari|opera|edg|ucbrowser|googlebot|fxios|crios|opr|opera)\/?\s*(\.?\d+(\.\d+)*)/i,
    ) || [];

  const browserName = browerInfoMatch[1] || 'Unknow';
  const version = browerInfoMatch[2] || 'Unknow';
  return [browserName, version].join(' ');
};

export const getOSName = () => {
  for (const id in osMapping) {
    const listNameDevice = osMapping[id];

    if (listNameDevice.label.test(navigator.userAgent)) {
      return listNameDevice.value;
    }
  }

  return 'Unknow';
};
