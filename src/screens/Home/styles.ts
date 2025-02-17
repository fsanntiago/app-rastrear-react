import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  /* justify-content: center; */

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const WidgetContainer = styled.View`
  width: 100%;
  gap: ${RFValue(2)}px;
  padding: 20px 16px;
  /* height: 280px; */
  flex-direction: row;
  justify-content: space-between;
`;

export const Widget = styled.View`
  /* margin-top: -20px; */
  /* height: 280px; */
  /* background-color: #fff; */
  padding: 0px 15px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const TicketTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(15)}px;
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const MyVehiclesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(15)}px;
  align-self: flex-start;
  margin-bottom: 8px;
  padding-left: 10px;
`;

export const MiniWidget = styled.View`
  flex-direction: row;
  /* height: 30px;*/
  margin: 16px 0;
  /* width: ${RFValue(200)}px; */
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.button_color};
  border-radius: 20px;
  margin: 20px 0px 40px;
`;

export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CarInfo = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const LicensePlateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const CarTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const CarType = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`;
