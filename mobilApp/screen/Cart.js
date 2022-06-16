import {
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import * as React from "react";
import { useState, useEffect } from "react";

function Cart() {
  const [order, setOrder] = useState([]);
  const [productId, setProductId] = useState('');

    fetch("http://192.168.31.101:3000/api/orders/1")
      .then((res) => res.json())
      .then((result) => {
        setOrder(result.data.orders);
      });

      function increment(id){
        fetch("http://192.168.31.101:3000/api/order/qtt/"+id+"/1")
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
      function decrement (id){
        fetch("http://192.168.31.101:3000/api/order/qtt/"+id+"/0")
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
  const renderItem = function ({ item }) {
    return (
      <View key={item.id}>
        <View style={[styles.item, styles.row]}>
        <Image style={[styles.picture]} source={{ uri: item.photos }} />
          <Text style={[styles.text]}>
            Product name :{item.name} {"\n"}
            Unit price:{item.price}{"\n"} 
            Total price:{item.total}{"\n"} {"\n"} 
            <View style={[styles.row]}>
            <Button
            onPress={() => {decrement(item.id)}}
            title="-"
            color="#841584"
            accessibilityLabel="decrement"
            />
            <Text style={styles.qtt}>{" " +  item.qtt + " "}</Text>
            <Button
            title="+"
            onPress={() => {increment(item.id)}}
            color="#841584"
            accessibilityLabel="encrement"
            />
            </View>
          </Text>

        </View>
      </View>
    );
  };
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={order}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 25,
    backgroundColor: "#fff",
  },
  picture: {
    flex:1,
    paddingLeft: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    flex:3,
    color:"grey",
    fontSize: 18,
    marginLeft: "auto",
    paddingLeft:20,
  },
  qtt: {
    backgroundColor:"#9D9D9C",
    flex:3,
    color:"white",
    fontSize: 20,
    marginLeft: "auto",
  },
  ButtonMoin:{
    flex:3,
  },
});
export default Cart;
