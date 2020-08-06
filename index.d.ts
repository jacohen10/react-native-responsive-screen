declare module 'react-native-responsive-screen' {

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange(orientationHookDispatch: Dispatch<any>): void;
  export function removeOrientationListener(): void;
}
