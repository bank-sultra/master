import Geolocation from '@react-native-community/geolocation';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  PermissionStatus,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {RNCamera} from 'react-native-camera';
import {launchCamera} from 'react-native-image-picker';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function App() {
  const camera = useRef(null);

  const [location, setLocation] = useState(null);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(position => {
      setLocation(position);
    });
  }, []);

  const requestLocation = useCallback(async () => {
    const locationGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    if (locationGranted === 'granted') {
      getCurrentLocation();
    }
  }, [getCurrentLocation]);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  console.log(location);

  return (
    <View style={styles.container}>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: location?.coords?.latitude ?? -3.988623,
          longitude: location?.coords?.longitude ?? 122.511356,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: -3.988623, longitude: 122.51224}}
          title="ATM Cabang Sao sao"
          description="this is my house"
        />

        <Marker
          coordinate={{latitude: -3.984712, longitude: 122.515623}}
          title="mahome"
          description="this is my house"
        />
      </MapView> */}
      <TouchableOpacity
        onPress={async () => {
          const photo = await launchCamera({
            cameraType: 'back',
          });
          console.log(photo);
        }}>
        <Text>Capture</Text>
      </TouchableOpacity>
    </View>
  );
}
