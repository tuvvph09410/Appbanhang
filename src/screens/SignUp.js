import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

const SignUp = ({ navigation }) => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  var url = "http://192.168.64.2/SQLBanHang/InsertTaiKhoan.php";
  var checkEmail = /\S+@\S+\.\S+/;
  var checkPassword =  /^[A-Za-z]\w{7,14}$/;
  const fullnameValidate = () => {
    if (fullName == "") {
      setError({ fullNameError: "Xin mời nhập họ và tên!" });
      return false;
    } else {
      setError({ fullNameError: "" });
      if (email == "") {
        setError({ emailError: "Xin mời nhập E - mail!" });
        return false;
      } else {
        setError({ emailError: "" });
        if (checkEmail.test(email) === true) {
          if (password == "") {
            setError({ passwordError: "Xin mời nhập mật khẩu!" });
            return false;
          } else {
            setError({ passwordError: "" });
            if (checkPassword.test(password) === true) {
              if (confirmPassword == "") {
                setError({
                  confrimPasswordError: "Xin mời nhập lại mật khẩu!"
                  
                });
                return false;
              } else {
                setError({ confrimPasswordError: "" });
                if (confirmPassword == password) {
                  setError({ passwordError: "" });
                } else {
                  setError({
                    confrimPasswordError: "Mật khẩu nhập lại không trùng khớp!",
                  });
                  return false;
                }
              }
            } else {
              setError({
                passwordError: "Mật khẩu phải có chữ hoa,chữ thường,ít nhất 8 số!",
              });
              return false;
            }
          }
        } else {
          setError({
            emailError: "Nhập sai định dạng E - mail! Vui lòng nhập lại",
          });
          return false;
        }
      }
    }
    return true;
  };
  const buttonValidateUpLoad = () => {
    if(fullnameValidate() == true){
      upLoadData();
      Alert.alert("","Đăng ký thành công");
    }
  };
  const upLoadData = () => {
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Fullname: fullName,
        Email: email,
        Password: password,
      }),
    })
      .then((response) => response.text())
      .then((responseData) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg",
          }}
        />
      </View>
      <View style={{ flex: 3, width: "100%", alignItems: "center" }}>
        <View style={styles.viewInput}>
          <TextInput
            onBlur={fullnameValidate}
            style={styles.input}
            placeholderTextColor="#003f5c"
            placeholder="Họ và Tên"
            onChangeText={(fullName) => setFullname(fullName)}
          />
        </View>

        <Text style={{ marginBottom: 10, color: "red" }}>
          {error.fullNameError}
        </Text>

        <View style={styles.viewInput}>
          <TextInput
            onBlur={fullnameValidate}
            style={styles.input}
            placeholderTextColor="#003f5c"
            placeholder="E-mail"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <Text style={{ marginBottom: 10, color: "red" }}>
          {error.emailError}
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            onBlur={fullnameValidate}
            style={styles.input}
            placeholderTextColor="#003f5c"
            placeholder="Mật khẩu mới"
            secureTextEntry={true}
            onChangeText={(passwrod) => setPassword(passwrod)}
          />
        </View>
        <Text style={{ marginBottom: 10, color: "red" }}>
          {error.passwordError}
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            onBlur={fullnameValidate}
            style={styles.input}
            placeholderTextColor="#003f5c"
            placeholder="Nhập lại mật khẩu mới"
            secureTextEntry={true}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>
        <Text style={{ marginBottom: 10, color: "red" }}>
          {error.confrimPasswordError}
        </Text>
        <TouchableOpacity style={styles.styleButtonLogin} onPress={buttonValidateUpLoad}>
          <Text style={styles.loginText}>Đăng Ký </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
  image: { height: 100, width: 100, marginBottom: 40, marginTop: 40 },
  viewInput: {
    width: "70%",
    height: 45,
    backgroundColor: "#F79F81",
    alignItems: "center",
    marginBottom: 3,
    borderRadius: 30,
  },
  input: {
    height: 50,
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  styleButtonLogin: {
    width: "80%",
    height: 50,
    backgroundColor: "#c75b39",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 20,
  },
  loginText: {
    fontWeight: "bold",
  },
});
export default SignUp;
