import styled from "styled-components/native";
import {
  Primary,
  Secondary,
  Tertiary,
  Background
} from "./../../config/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${() => Primary};
  align-items: center;
`;

export const Card = styled.View`
  min-width: 70%;
  margin: 0 5%;

  margin-top: 20px;

  background-color: ${props => (props.color == 0 ? Background : Secondary)};
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 15px 20px 0px 20px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  flex: 1;
  text-align: center;
  color: ${() => Primary};
`;

export const Botoes = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Pagar = styled.TouchableOpacity``;

export const Excluir = styled.TouchableOpacity``;

export const Descricao = styled.Text`
  font-size: 16px;
  padding: 0px 20px 15px 20px;
`;

export const CardBody = styled.View`
  padding: 0px 20px 15px 20px;
`;

export const Valor = styled.Text`
  font-size: 16px;
`;

export const Parcela = styled.Text`
  font-size: 16px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px 10px 20px;
  background-color: ${() => Background};
`;

export const UpdatedAt = styled.Text``;
