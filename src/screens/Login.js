import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert
} from "react-native";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [passwrod, setPassWord] = useState("");
  const [error, setError] = useState("");

  const url = "http://192.168.64.2/SQLBanHang/User_Login.php";
  var checkEmail = /\S+@\S+\.\S+/;
  var checkPassword = /^[A-Za-z]\w{7,14}$/;

  const checkValidateLogin = () => {
    if (email == "") {
      setError({ emailError: "Xin mời nhập E-mail!" });
      return false;
    } else {
      setError({ emailError: "" });
      if (checkEmail.test(email) === true) {
        if (passwrod == "") {
          setError({ passwordError: "Xin mời nhập mật khẩu!" });
          return false;
        } else {
          setError({ passwordError: "" });
          if (checkPassword.test(passwrod) === true) {
            setError({ passwordError: "" });
            return true;
          } else {
            setError({
              passwordError:
                "Mật khẩu phải có chữ hoa,chữ thường,ít nhất 8 số!",
            });
            return false;
          }
          return true;
        }
        return true;
      } else {
        setError({ emailError: "Sai định dạng E-mail, xin mời nhập lại!" });
        return false;
      }
      return true;
    }
    return true;
  };

  const UserLogin = () => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: passwrod,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // nếu thông báo máy chủ giống với dữ liệu khớp
        if (json === "Login Thanh Cong") {
          navigation.navigate("DrawerNavigation");
        } else {
         Alert.alert("","Tài khoản hoặc mật khẩu sai");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log(json);
  };

  const buttonLogin = () => {
    if (checkValidateLogin() == true) {
      UserLogin();
    }
  };

  const linkSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={{
          uri:
            "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg",
        }}
      />
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          onBlur={checkValidateLogin}
          placeholderTextColor="#003f5c"
          placeholder="E-mail"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={{ color: "red", marginBottom: 10 }}>{error.emailError}</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          onBlur={checkValidateLogin}
          placeholderTextColor="#003f5c"
          placeholder="Mật khẩu"
          secureTextEntry={true}
          
          onChangeText={(passwrod) => setPassWord(passwrod)}
        />
      </View>
      <Text style={{ color: "red", marginBottom: 30 }}>
        {error.passwordError}
      </Text>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.styleButtonLogin} onPress={buttonLogin}>
        <Text style={styles.loginText}>Đăng Nhập</Text>
      </TouchableOpacity>
      <View style={styles.footerText}>
        <Text>Đăng ký tài khoản tại đây?</Text>
        <Text> </Text>
        <TouchableOpacity onPress={linkSignUp}>
          <Text style={styles.footetLink}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  imageLogo: {
    height: 100,
    width: 100,
    marginBottom: 40,
  },
  viewInput: {
    width: "70%",
    height: 45,
    backgroundColor: "#F79F81",
    alignItems: "center",
    marginBottom: 2,
    borderRadius: 30,
  },
  input: {
    height: 50,
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  forgotPassword: {
    height: 30,
    marginLeft: 10,
    marginBottom: 30,
    marginTop: -15,
  },
  styleButtonLogin: {
    width: "80%",
    height: 50,
    backgroundColor: "#c75b39",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 30,
  },
  loginText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 16,
    margin: 5,
    flexDirection: "row",
  },
  footetLink: {
    fontWeight: "bold",
  },
});

export default Login;
