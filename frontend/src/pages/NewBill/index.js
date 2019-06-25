import React, { Component } from "react";

import { Background } from "./../../config/global";

import {
  Container,
  Titulo,
  CardForm,
  Input,
  Submit,
  TextSubmit,
  Switch
} from "./styles";

import api from "./../../services/api";

export default class New extends Component {
  state = {
    title: "",
    description: "",
    amount: 0,
    isParcels: false,
    parcels: 1
  };

  handleSubmit = async () => {
    const parcel = this.state.isParcels ? this.state.parcels : 1;
    this.setState({ parcel });

    await api.post("bills", {
      title: this.state.title,
      description: this.state.description,
      amount: this.state.amount,
      isParcels: this.state.isParcels,
      parcels: this.state.parcels,
      state: 0
    });

    this.props.navigation.navigate("ListBill");
  };

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
        <TextSubmit>Parcelado ?</TextSubmit>
        <Switch
          value={this.state.isParcels}
          onValueChange={isParcels => this.setState({ isParcels })}
        />
        <CardForm>
          <Input
            placeholder="Quantidade de Parcelas"
            placeholderTextColor={Background}
            onChangeText={parcels => this.setState({ parcels })}
            editable={this.state.isParcels}
          />
        </CardForm>
        <Submit onPress={this.handleSubmit}>
          <TextSubmit> Finalizar</TextSubmit>
        </Submit>
      </Container>
    );
  }
}
