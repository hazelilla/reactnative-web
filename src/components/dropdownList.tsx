import React, {useCallback, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Arrow from '../assets/svg/angle-down.svg';

const DropdownList: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={toggleExpanded}>
        <Text style={styles.text}>Select Category</Text>
      </TouchableOpacity>
      {expanded ? (
        <Modal visible={expanded} transparent>
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View style={styles.backDrop}>
              <View style={styles.options}>
                <FlatList
                  keyExtractor={item => item.value}
                  data={[
                    {value: 'Sports', label: 'st'},
                    {value: 'Electronics', label: 'el'},
                    {value: 'Clothes', label: 'Cl'},
                    {value: 'Sports', label: 'st'},
                    {value: 'Electronics', label: 'el'},
                    {value: 'Clothes', label: 'Cl'},
                    {value: 'Sports', label: 'st'},
                    {value: 'Electronics', label: 'el'},
                    {value: 'Clothes', label: 'Cl'},
                  ]}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.optionItem}>
                      <Text>{item.value}</Text>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ) : null}
      <View>
        <Arrow width={10} height={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    marginTop: 25,
  },
  optionItem: {
    height: 45,
    justifyContent: 'center',
  },
  separator: {
    height: 4,
  },
  options: {
    position: 'absolute',
    top: 35,
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 6,
    maxHeight: 150,
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
  },
});

export default DropdownList;
