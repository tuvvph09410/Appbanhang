import React, { useState } from "react";
import { View, Text, FlatList, Image, Switch } from "react-native";

const ketnoimangXH = () => {
  const [dataCN, setDataCN] = useState([
    {
      urlZalo:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ae1e0117229179.562b755ac0ef2.png",
      zalo: "Liên kết zalo",
      urlFB:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoU_g3nzN0_8SRGbg5XUM084BYp7NuJJdIMjk2OdPdfl-zNpSi6PczY2nM27BlPxI5P8&usqp=CAU",
      fb: "Liên kết Facebook",
      urlGoole:
        "https://lh3.googleusercontent.com/proxy/VT_LSwa3ib2CzwWfrqJ9usvjRzSl7l6Y6Wd17mJxECPO2FSGS6EkWFGlr4RcP25EvcTJVczDX-2hZb_hL49nIMTtARudhfYeO_BQIXmskjVrx-THhg",
      google: "Liên kết Google",
    },
  ])
  const [isEnabledZalo, setIsEnabledZalo] = useState(false);
  const [isEnabledFB, setIsEnabledFB] = useState(false);
  const [isEnableGoogole, setIsEnabledGoogle] = useState(false);
  const toggleSwitchZalo = () => setIsEnabledZalo((previousState) => !previousState);
  const toggleSwitchFb = () => setIsEnabledFB((previousState) => !previousState);
  const toggleSwitchGoole = () => setIsEnabledGoogle((previousState) => !previousState);
  return (
    <View>
      <FlatList
        data={dataCN}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: "#F2F2F2",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  width: "100%",
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    marginBottom: 5,
                    flex: 2,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.urlZalo }}
                  />
                </View>
                <View style={{ flex: 6 }}>
                  <Text style={{ fontSize: 16 }}>{item.zalo}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Switch
                    ios_backgroundColor="#D3D3D3"
                    onValueChange={toggleSwitchZalo}
                    value={isEnabledZalo}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  width: "100%",
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    marginBottom: 5,
                    flex: 2,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.urlFB }}
                  />
                </View>
                <View style={{ flex: 6 }}>
                  <Text style={{ fontSize: 16 }}>{item.fb}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Switch
                    ios_backgroundColor="#D3D3D3"
                    onValueChange={toggleSwitchFb}
                    value={isEnabledFB}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  width: "100%",
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    marginBottom: 5,
                    flex: 2,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.urlGoole }}
                  />
                </View>
                <View style={{ flex: 6 }}>
                  <Text style={{ fontSize: 16 }}>{item.google}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Switch
                    ios_backgroundColor="#D3D3D3"
                    onValueChange={toggleSwitchGoole}
                    value={isEnableGoogole}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default ketnoimangXH;
