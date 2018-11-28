import * as bcrypt from 'bcryptjs';

bcrypt.hash('123qwe', bcrypt.genSaltSync()).then(hash => {
    console.log(hash);
});