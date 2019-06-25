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

export const Titulo = styled.Text`
  font-size: 24px;
  margin-top: 2%;
  text-align: center;
  color: ${() => Background};
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

export const Input = styled.TextInput`
  font-size: 12;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #ffffff;
  height: 56px;
  width: 90%;
  border-radius: 5px;
  margin-top: 15px;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const TextSubmit = styled.Text``;

export const Text = styled.Text`
  color: white;
`;

export const Switch = styled.Switch`
  margin-top: 15px;
`;
