import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { BackButton } from "../../../common";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../theme/colors";

const CreatePost = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Select post type</Text>
      </View>
      <View style={styles.typeWrapper}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              { backgroundColor: colors.secondary.bg },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.secondary.text}
            />
            <Text
              style={[styles.typeButtonText, { color: colors.secondary.text }]}
            >
              Dengue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              Yellow fever
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              Chikungunya
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              Zika
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              Cholera
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              Leptospirosis
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.disabledTypeButton,
              { backgroundColor: colors.grey.light },
            ]}
          >
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              color={colors.grey.dark}
            />
            <Text
              style={[
                styles.disabledTypeButtonText,
                { color: colors.grey.dark },
              ]}
            >
              COVID-19
            </Text>
            <Text
              style={[
                styles.disabledTypeButtonTextLabel,
                { color: colors.warning.primary },
              ]}
            >
              Coming Soon
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
