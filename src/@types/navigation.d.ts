import { IUser } from "../core/types/common";

/**
 * Define as rotas disponíveis no projeto
 */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      //aqui dentro é definido cada rota com seus parâmetros, não é recomendado passar objetos complexos
      home: { user: any };
      login: undefined;
      startCheckList: { user: any };
      checkList: { user: any };
    }
  }
}
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   home: undefined;
//   login: undefined;
// };

// export type NavigationProps = StackNavigationProp<RootStackParamList>;
