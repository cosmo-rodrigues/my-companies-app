import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      danger: string;
      primary: string;
      secondary: string;
      text: string;
    };
  }
}
