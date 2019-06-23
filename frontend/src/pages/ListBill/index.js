import React, { Component } from "react";

import {
  Container,
  Card,
  CardHeader,
  Titulo,
  Botoes,
  Pagar,
  Excluir,
  Descricao,
  CardBody,
  Valor,
  Parcela,
  CardFooter,
  UpdatedAt
} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import { FlatList } from "react-native-gesture-handler";

import { Vermelho, Secondary } from "./../../config/global";

import api from "./../../services/api";

export default class ListBill extends Component {
  state = {
    bills: []
  };

  async componentDidMount() {
    const response = await api.get("bills");

    console.log(response.data);

    this.setState({ bills: response.data.docs });
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.bills}
          keyExtractor={bill => bill._id}
          renderItem={({ item }) => (
            <Card>
              <CardHeader>
                <Titulo>{item.title}</Titulo>
                <Botoes>
                  <Pagar>
                    {/* money-off */}
                    <Icon name="attach-money" size={24} color={Secondary} />
                  </Pagar>
                  <Excluir>
                    <Icon name="delete" size={24} color={Vermelho} />
                  </Excluir>
                </Botoes>
              </CardHeader>
              <Descricao>{item.description}</Descricao>
              <CardBody>
                <Valor>Valor: R$ {item.amount}</Valor>
                <Parcela>Parcela: {item.parcels}</Parcela>
              </CardBody>
              <CardFooter>
                <UpdatedAt>Atualizado em: {item.updatedAt}</UpdatedAt>
              </CardFooter>
            </Card>
          )}
        />
      </Container>
    );
  }
}
