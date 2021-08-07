/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
