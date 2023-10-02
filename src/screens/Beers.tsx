import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { BeerCard } from "../components/BeerCard";
import { styles } from "../utils/styles";
import { BeersType } from "../utils/types";

const beersData: BeersType[] = require("../../assets/cervezas.json");

export const Beers = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState<BeersType>();

  const showModal = (beer: BeersType) => {
    console.log("Modal abierto", beer.name);
    setSelectedBeer(beer);
    setModalVisible(true);
  };

  const hiddenModal = () => {
    console.log("Modal cerrado");
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        data={beersData}
        keyExtractor={(beer) => beer.name}
        renderItem={({ item }) => (
          <BeerCard beer={item} onPress={() => showModal(item)} />
        )}
        numColumns={1}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={hiddenModal}>
            <Text style={styles.title}>{selectedBeer?.name}</Text>
            <Image source={{ uri: selectedBeer?.img }} style={styles.image} />
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Estilo: </Text>
              <Text style={styles.tag}>{selectedBeer?.category}</Text>
            </Text>
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Color: </Text>
              <Text style={styles.tag}>{selectedBeer?.color}</Text>
            </Text>
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Origen: </Text>
              <Text style={styles.tag}>{selectedBeer?.origin}</Text>
            </Text>
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Tipo: </Text>
              <Text style={styles.tag}>{selectedBeer?.type}</Text>
            </Text>
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Tono: </Text>
              <Text style={styles.tag}>{selectedBeer?.tone}</Text>
            </Text>
            <Text style={styles.tagContainer}>
              <Text style={styles.tagTitle}>Alcohol: </Text>
              <Text style={styles.tag}>{selectedBeer?.alcohol}</Text>
            </Text>

            <Text style={{marginTop:20, fontWeight:'bold'}}>Descripción:</Text>
            <Text>{selectedBeer?.description}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
