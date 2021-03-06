import { useCallback } from 'react';
import { ObjectSchema } from 'yup';
import { VALIDATION_ERROR_TYPE } from 'src/commons/constant';

const useYupValidationResolver = (validationSchema: ObjectSchema<Record<string, any>>) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? VALIDATION_ERROR_TYPE,
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );

export default useYupValidationResolver;
