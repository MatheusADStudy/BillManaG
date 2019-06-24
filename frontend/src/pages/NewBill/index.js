import React, { Component } from "react";

import { Background } from "./../../config/global";
import { TouchableOpacity, Text, Switch } from "react-native";

import { Container, Titulo, CardForm, OuterForm, Input } from "./styles";

import api from "./../../services/api";
// import { Container } from './styles';

export default class New extends Component {
  state = {
    title: "",
    description: "",
    amount: 0,
    isParcels: false,
    parcels: 0,
    updatedAt: ""
  };

  // handleSubmit = async () => {
  //   const data = new FormData();

  //   data.append("title", this.state.title);
  //   data.append("description", this.state.description);
  //   data.append("amount", this.state.amount);
  //   data.append("isParcels", this.state.isParcels);
  //   data.append("parcels", this.state.parcels);

  //   await api.post("item", data);

  //   this.props.navigation.navigate("ListBill");
  // };

  render() {
    return (
      <Container>
        <Titulo>Cadastrar Contas</Titulo>

        <CardForm>
          <Input
            placeholder="Título"
            placeholderTextColor={Background}
            onChangeText={title => this.setState({ title })}
          />
        </CardForm>

        <CardForm>
          <Input
            placeholder="Descrição"
            placeholderTextColor={Background}
            onChangeText={description => this.setState({ description })}
          />
        </CardForm>

        <CardForm>
          <Input
            placeholder="Valor"
            placeholderTextColor={Background}
            onChangeText={amount => this.setState({ amount })}
          />
        </CardForm>
        <Switch
          value={this.state.isParcels}
          onValueChange={isParcels => this.setState({ isParcels })}
        />
        <CardForm>
          <Input
            placeholder="Quantidade de Parcelas"
            placeholderTextColor={Background}
            onChangeText={parcels => this.setState({ parcels })}
          />
        </CardForm>
        <CardForm>
          <TouchableOpacity
            style={styles.sendButtonText}
            onPress={this.handleSubmit}
          >
            <Text> Finalizar</Text>
          </TouchableOpacity>
        </CardForm>
      </Container>
    );
  }
}

const styles = {
  sendButtonText: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 5,
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
};
