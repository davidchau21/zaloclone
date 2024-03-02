import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faChevronLeft, faMagnifyingGlass, faPhone, faPlus, faQrcode, faVideo } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Pressable } from 'react-native';
import { styles } from "./style";

const ChatDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable style={styles.pressBack} onPress={()=> {navigation.navigate('Messages')}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 10}} color='#F5F8FF' size={20} />
          <Text style={styles.txtInHeader}>Tên người dùng</Text> 
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 170}}
            color="#F1FFFF"
            size={22}
            icon={faPhone}
          />
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 20 }}
            color="#F1FFFF"
            size={22}
            icon={faVideo}
          />
        </Pressable>

        <Pressable>
          <FontAwesomeIcon
            style={{ marginLeft: 20}}
            color="#F1FFFF"
            size={22}
            icon={faBars}
          />
        </Pressable>
      </View>

    </View>
  )
}

export default ChatDetails;
