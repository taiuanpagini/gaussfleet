import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Icon } from 'react-native-eva-icons';
import Modal from 'react-native-modal';

const style = StyleSheet.create({
  listaOptions: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 20,
  },
  containerBtnCancelar: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancelar: {
    fontSize: 16,
    color: '#FF5B57',
    fontWeight: '600',
  },
  containerBtnOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  containerOptions: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  borderTop: {
    borderTopColor: '#efefef',
    borderTopWidth: 1,
  },
  fontOption: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
  },
});

export default function BottomSheet({ activeMenu, abreMenu, options }) {
  function onCancelOptions() {
    abreMenu();
  }

  return (
    activeMenu && (
      <Modal
        isVisible={activeMenu}
        backdropOpacity={1}
        backdropColor="rgba(0,0,0,.2)"
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={100}
        animationOutTiming={100}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
        style={{
          left: -21,
          top: 0,
          position: 'absolute',
          width: '102%',
          height: '100%',
        }}
      >
        <View style={style.listaOptions}>
          <FlatList
            data={options}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => item.onClick()}
                style={[
                  style.containerBtnOptions,
                  index > 0 && style.borderTop,
                ]}
              >
                <Icon
                  fill="#FF5B57"
                  name={item.icon}
                  width={28}
                  height={28}
                  style={style.icon}
                />
                <Text style={style.fontOption}>{item.title}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={style.containerOptions}
          />
          <TouchableOpacity
            onPress={onCancelOptions}
            style={style.containerBtnCancelar}
          >
            <Text style={style.btnCancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  );
}
