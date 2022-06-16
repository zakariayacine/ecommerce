import {
  Button,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import * as React from "react";
import { useState, useEffect } from "react";
function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('waiting');
  useEffect(() => {
    fetch("http://192.168.31.101:3000/api/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data.products);
      });
  }, []);

  useEffect(() => {
    if(status === 'post'){
        fetch("http://192.168.31.101:3000/api/order/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qtt: 1,
        product_id: order,
        user_id: 1,
        inovice_id: 1,
      }),
    });
    }
    setStatus('waiting');
  }, []);

  function AddOrder(order){
    fetch(
        /*"https://jsonplaceholder.typicode.com/users"*/
        "http://192.168.31.101:3000/api/order/add",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method : "POST",
            body: JSON.stringify({
                qtt: 1,
                product_id: order,
                user_id: 1,
                inovice_id: 1,
              }),
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
}

  const renderItem = function ({ item }) {
    return (
      <View key={item.id}>
        <View style={[styles.item, styles.row]}>
          <Image style={[styles.picture]} source={{ uri: item.photos }} />
          <Text style={[styles.text]}>
            Product name :{item.name} {"\n"}
            Unit price:{item.price}
            {"\n"}
            <View style={[styles.row]}>
              <Button
                onPress={() => {AddOrder(item.id)}}
                title="Add to cart"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
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
          data={products}
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
    flex: 1,
    paddingLeft: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    flex: 3,
    color: "grey",
    fontSize: 18,
    marginLeft: "auto",
    paddingLeft: 20,
  },
  qtt: {
    backgroundColor: "#9D9D9C",
    flex: 3,
    color: "white",
    fontSize: 20,
    marginLeft: "auto",
  },
  ButtonMoin: {
    flex: 3,
  },
});
export default HomeScreen;
