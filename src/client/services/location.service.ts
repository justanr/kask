import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Location, Beer, KegSize} from '../models';

@Injectable()
export class LocationService {

    constructor(
        private http: Http
    ) {}

    getLocations(): Observable<Location[]> {
        return this.http.get('/api/beers/locations')
        .map(res => res.json());
    }

    getLocation(locationId: number): Observable<Location[]> {
        return this.http.get(`/api/beers/location/${locationId}`)
        .map(res => res.json());
    }

    getLocationContents(locationId: number): Observable<(Beer & {Size?: KegSize})[]> {
        return this.http.get(`/api/beers/contents/location/${locationId}`)
        .map(res => res.json());
    }
}
