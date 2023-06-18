import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        // { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
        {backgroundColor: "#ffff"}
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="black"
        />
        <Text style={tempStyles}>{temp}°C</Text>
        <Text style={feels}>{`Feels like ${feels_like}°C`}</Text>
        <RowText
          message1={`High: ${temp_max}°C `}
          message2={`Low: ${temp_min}°C`}
          containerStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <RowText
        message1={weather[0]?.description}
        message2={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
    marginBottom: 40,
  },
  tempStyles: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 7,
    marginStart: 35,
  },
  description: {
    color: "white",
    fontSize: 43,
  },
  message: {
    color: "white",
    fontSize: 25,
  },
});
export default CurrentWeather;
