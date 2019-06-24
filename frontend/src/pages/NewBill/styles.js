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
  width: 90%;
  margin: 0 5%;

  margin-top: 16px;

  background-color: white;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 15px 20px 0px 20px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  margin-top: 2%;
  text-align: center;
  color: ${() => Background};
`;

export const Botoes = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardForm = styled.View`
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  border: 1px solid #fff;
  height: 56px;
  width: 90%;
  margin: 30px 20px 6px 20px;
  padding: 10px;
`;

export const Pagar = styled.Text``;

export const Excluir = styled.Text``;

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

export const OuterForm = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  font-size: 12;
`;

export const UpdatedAt = styled.Text``;
