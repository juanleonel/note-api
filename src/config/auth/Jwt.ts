import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { CONFIGURATIONS } from '../configurations';
import UserRepository from '../../repository/user.repository';

const KEY_TOKEN_ACCESS = 'token-access';
const userRepository = new UserRepository();

export default function() {
  const params = {
    secretOrKey: CONFIGURATIONS.KEY_SECRET,
    jwtFromRequest: ExtractJwt.fromHeader(KEY_TOKEN_ACCESS)
  }
  const strategy = new Strategy(params, (payload, done) => {
    userRepository.findOne({ _id: payload.id }).then(user => {
      if (user) {
        return done(null, {
          _id: user._id,
          email: user.email
        });
      }
      return done(null, false)
    }).catch(error => done(error, undefined));

  });
  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate(CONFIGURATIONS.STRATEGY, { session: false });
    }
  };
};
