import * as React from 'react';
import { AmiAuthProvider } from 'src/ami/oauth/amiAuthProvider';

export default ({ children }: React.PropsWithChildren<{}>) => {
  return <AmiAuthProvider>{children}</AmiAuthProvider>;
};
