import {useState, useMemo, useEffect, useCallback} from 'react';
import {
  BiometryTypes,
  default as ReactNativeBiometrics,
} from 'react-native-biometrics';
import {login} from '../function/jwt';

export const useBiometriks = (username, password) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [signature, setSignature] = useState('');
  const [error, setIsError] = useState(null);

  const rnBiometrics = useMemo(() => {
    return new ReactNativeBiometrics();
  }, []);

  const promptBio = useCallback(async () => {
    const resultObject = await rnBiometrics.isSensorAvailable();
    const {available, biometryType} = resultObject;
    const checkIsSupported =
      available &&
      (biometryType === BiometryTypes.TouchID ||
        biometryType === BiometryTypes.FaceID ||
        biometryType === BiometryTypes.Biometrics);

    if (checkIsSupported) {
      const res = await rnBiometrics.biometricKeysExist();
      if (res.keysExist) {
        const results = await rnBiometrics.createSignature({
          promptMessage: 'Open Biometrics',
          payload: JSON.stringify({username, password}),
        });

        if (results.success) {
          setSignature(results.signature);
          setIsSuccess(true);
          const data = await login({
            biometric: {signature: results.signature},
          });
        } else {
          setIsError(results);
        }
      } else {
        await rnBiometrics.createKeys();
        promptBio();
      }
    }
  }, [rnBiometrics, username, password]);

  return {isSuccess, signature, error, promptBio};
};
