import React, { Component } from "react";
import moment from "moment";
import io from "socket.io-client";

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
  static navigationOptions = {
    header: null
  };

  state = {
    bills: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("bills");

    console.log(response.data.docs);

    this.setState({ bills: response.data.docs });
  }

  registerToSocket = () => {
    const socket = io("http://192.168.1.6:3334");

    socket.on("bill", newBill => {
      this.setState({ bills: [newBill, ...this.state.bills] });
    });

    socket.on("inactive", inactiveBill => {
      this.setState({
        bills: this.state.bills.filter(bill => bill._id !== inactiveBill._id)
      });
    });

    socket.on("paid", update => {
      this.setState({
        bills: this.state.bills.map(bill =>
          bill._id === update._id ? update : bill
        )
      });
    });
  };

  handlePay = async item => {
    const state = item.state == 0 ? 1 : 0;
    await api.put(`bills/${item._id}/paid`, {
      state
    });
  };

  handleDelete = async item => {
    const state = -1;
    await api.put(`bills/${item._id}/inactive`, {
      state
    });
  };

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.bills}
          keyExtractor={bill => bill._id}
          renderItem={({ item }) => (
            <Card color={item.state}>
              <CardHeader>
                <Titulo>{item.title}</Titulo>
                <Botoes>
                  <Pagar onPress={() => this.handlePay(item)}>
                    {/* money-off */}
                    <Icon
                      name={item.state == 0 ? "attach-money" : "money-off"}
                      size={24}
                      color={item.state == 0 ? Secondary : "black"}
                    />
                  </Pagar>
                  <Excluir onPress={() => this.handleDelete(item)}>
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
                <UpdatedAt>
                  Atualizado em: {moment(item.UpdatedAt).format("DD/MM/YYYY")}
                </UpdatedAt>
              </CardFooter>
            </Card>
          )}
        />
      </Container>
    );
  }
}
