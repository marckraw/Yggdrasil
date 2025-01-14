import { z } from 'zod';

/* 
    This is closure based service - functional replacement for class based service.
    Its using closure to create private variables and functions.
    Exports a public interface that can be used to interact with the service.
    Encapsulates the service logic and data within the factory function.
*/
export const createValidationService = () => {
  const validate = (data: any, schema: any) => {
    return z.object(schema).safeParse(data);
  };

  // Exposed public interface
  return {
    validate,
  };
};

const validationService = createValidationService();
export { validationService };
