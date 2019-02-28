export interface Weather {
    base: string;
    clouds: any;
    cod: number;
    coord: { lon: number, lat: number };
    dt: number;
    id: number;
    main: { temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number };
    name: string;
    rain: any;
    sys: any;
    visibility: number;
    weather: any[];
    wind: any;
}
