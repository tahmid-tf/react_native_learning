import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import logo from "../assets/icon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Reading List App
      </Text>

      <Link href="/about" style={styles.link}>
        About
      </Link>

      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
