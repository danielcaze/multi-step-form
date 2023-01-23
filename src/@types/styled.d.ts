import { DefaultThemeType } from "../styles/theme/default";

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType { }
}