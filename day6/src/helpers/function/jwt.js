import {sign} from 'react-native-pure-jwt';
export const signJwt = (username, password) => {
  const token = sign(
    {iss: 'audy@mail.com', end: new Date(), additional: {username, password}},
    'hallo',
  );
  return token;
};

export const login = ({loginData, biometric}) => {
  const dbSignature = // ceritanya ngambil dari db
    'BZJ2Mtfr8Tk7tgcRnJOe+0zA2yHPls5VNxv/OgbeVBcg01kO931YeNFFBpFE62xWC169N+LsBq2HYtnOKTs+ADMbxlebIRTrRVQS+Y3y61+iLPoEcqt9Ya6DVCWQF+bnPnvq/A/Cq2zlMA9/2tNRyAYYo1/qZfdHfzr/CIaI+nQx9MWJ7Akp+nh185SZokLsNYEOSxJPMclfs630KxoLa95azzr/leE31KrPf0gWz/KtzcYFxP++5hhQYFk+OBK/lOD6nOwrDTuUHVmMv3Sg4k+iAdfUlEalY9wZ5OVphBfHpE/f634QGYluAFjp7Hf5dseFyhJNl5+Df+QpahfUJA==';
  return new Promise(async (resolve, reject) => {
    if (biometric) {
      if (dbSignature === biometric.signature) {
        const accessToken = await signJwt();
        resolve({
          accessToken: accessToken,
        });
      } else {
        reject({
          status: 401,
          message: 'signature tidak cocok',
        });
      }
    } else {
      if (loginData.username === 'audy' && loginData.password === 'password') {
        resolve({
          accessToken: signJwt(loginData.username, loginData.password),
        });
      } else {
        reject({
          status: 401,
          message: 'Password atau username salah!',
        });
      }
    }
  });
};
