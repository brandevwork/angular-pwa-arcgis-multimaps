import { Injectable } from '@angular/core';
import { Coordinates } from '../pages/models/coordinates.model';

@Injectable()
export class CoordsService {

  // get user coordinates from successful geolocation request
  public storeUserLocation(): void {
    const getCoords = (position: any): void => {
      console.log('getCoords position.coords: ', position.coords);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const userPosition = { latitude, longitude };
      try {
        sessionStorage.setItem('coords', JSON.stringify(userPosition));
      } catch (err) {
        console.error('Error saving to localStorage', err);
      }
    };

    // handle error if geolocation request unsuccesful
    function handleError(error: any) {
      let errorStr;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorStr = 'User denied the request for Geolocation.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorStr = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          errorStr = 'The request to get user location timed out.';
          break;
        case error.UNKNOWN_ERROR:
          errorStr = 'An unknown error occurred.';
          break;
        default:
          errorStr = 'An unknown error occurred.';
      }
      console.error('An error occurred: ' + errorStr);
    }

    //get user geolocation
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, handleError);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
