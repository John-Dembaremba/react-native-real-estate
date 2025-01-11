import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/hooks/useGlobalContext";
import { Redirect, Slot } from "expo-router";

const AppLayout = () => {
  const { isLoggedIn, loading } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }
  return <Slot />;
};

export default AppLayout;
