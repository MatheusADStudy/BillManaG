import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FingerprintScanner from "react-native-fingerprint-scanner";

import styles from "./Application.container.styles";
import FingerprintPopup from "./FingerprintPopup.component";

class Application extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    errorMessage: undefined,
    popupShowed: false
  };

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

  componentDidMount() {
    FingerprintScanner.isSensorAvailable().catch(error =>
      this.setState({ errorMessage: error.message })
    );
  }

  goHome = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    const { errorMessage, popupShowed } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Clique Abaixo Para Fazer o Login</Text>

        <TouchableOpacity
          style={styles.fingerprint}
          onPress={this.handleFingerprintShowed}
          disabled={!!errorMessage}
        >
          <Image source={require("./assets/finger_print.png")} />
        </TouchableOpacity>

        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        {popupShowed && (
          <FingerprintPopup
            style={styles.popup}
            handlePopupDismissed={this.handleFingerprintDismissed}
            goHome={this.goHome}
          />
        )}
      </View>
    );
  }
}

export default Application;
