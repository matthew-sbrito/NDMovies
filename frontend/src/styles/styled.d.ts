import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    
    primaryColor: string;
    secondaryColor: string;
    icon: string;
  }
}
