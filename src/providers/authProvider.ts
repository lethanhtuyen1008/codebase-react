import { JwtAuthProvider } from '@devblock/react-auth/dist/providers/jwt';
import history from '../helpers/history';
import { RouteName } from '../routers/routeName';

export class AppAuthProvider extends JwtAuthProvider {
  async signOut(): Promise<any> {
    await super.signOut();
    history.replace(RouteName.SIGN_IN);
  }
}
