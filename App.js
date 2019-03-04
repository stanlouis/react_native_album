import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View style={styles.container}>
    <Header headerText="Albums!" />
    <AlbumList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

export default App;
