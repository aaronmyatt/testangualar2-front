export class ProfileInterface {
  constructor(
    public username: string = '',
    public email: string = '',
    public latest_point_lat: number = 0.0,
    public latest_point_lng: number = 0.0,
    public mapper: boolean = false
  ) {}
}
