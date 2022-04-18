export class Constant {
  static readonly DATE_TIME_FORMAT = 'dd/MM/y HH:mm a';
  static readonly DATE_TIME_FORMAT_LAST_ACTIVITY = 'MMM dd, y hh:mm a';
  static readonly DATE_TIME_FORMAT_FIELD = 'MM/dd/yyyy';
  static readonly DEFAULT_LANGUAGE = 'en';
  static readonly UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  static readonly WIDTH_LOGO = 150;
  static readonly HEIGHT_LOGO = 70;
  static readonly DEFAULT_LIMIT_PER_PAGE = 10;

  static readonly BREADCRUM = 'breadcrum';
  static readonly ENTITY_TYPE = 'entityType';
  static readonly ENTITY_ID = 'entityId';
  static readonly MAX_LENGTH_FIELD_NAME = 1000;
  static readonly MAX_DEPTH_LEVEL = 20;
  static readonly MAX_LENGTH_NAME = 300;

  static readonly CTR_KEY = 17;
  static readonly CMD_KEY = 91;
  static readonly V_KEY = 86;
  static readonly C_KEY = 67;
  static readonly SHIFT_KEY = 16;

  static readonly EXCEL_COLUMN_NAMES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  static readonly QUEUE_EXPORT_FILE_NAME_INDEX = 1;
  static readonly COLUMN_HIDDEN = ['id', 'idDisplay', 'rowStatus', 'checkout'];
  static readonly COLUMN_ENTITY_REMOVE = ['NamePath', 'Path', 'Depth'];

  static readonly OPTION_USER = [
    {
      code: '124',
      displayName: 'Quach, Diep',
      firstName: 'Diep',
      fullName: 'Quach, Diep',
      id: '1c518bc1-8256-4913-8225-067651c4269f',
      lastName: 'Quach',
    },
    {
      code: 'code2',
      displayName: 'Quach, Diep 2',
      firstName: 'Diep 2',
      fullName: 'Quach, Diep 2',
      id: '1c518bc1-8256-4913-8225-067651c4269f',
      lastName: 'Quach 2',
    },
  ]; //TODO: Remove when integrate api

  static readonly OPTION_FIELD_BIT = [
    { label: 'True', value: 'true' },
    { label: 'False', value: 'false' },
  ];
}

export const DATE_FIELD_FORMAT = 'yyyy-MM-dd';
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy HH:mm';
export const VALIDATION_ERROR_TYPE = '';
export const GRID_SPACING = 3;
