import RNFS from 'react-native-fs';
import {RSA} from 'react-native-rsa-native';

export const bodyGenerator = async (body = {}) => {
  try {
    const path = RNFS.DocumentDirectoryPath + '/public.pem'; // Provide the correct path to the file
    const fileExists = await RNFS.exists(path);

    if (!fileExists) {
      await RNFS.copyFileAssets('public.pem', path);
    }
    const pubKey = await RNFS.readFile(path, 'utf8');
    // const rsa = new RSA();
    const encryptedData = (
      await RSA.encrypt(JSON.stringify(body), pubKey)
    ).toString();
    return encryptedData;
  } catch (error) {
    console.error('Error checking file existence:', error);
  }
};
