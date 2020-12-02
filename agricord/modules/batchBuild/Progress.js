import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {BasicStyles} from 'common';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class Progress extends Component {
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isModalOn}
        style={styles.ModalContainer}
        onRequestClose={() => {
          this.props.closeModal();
        }}
        collapsable={true}>
        <View style={styles.BatchBuildContainer}>
          <TouchableOpacity
            style={styles.IconContainer}
            onPress={() => {
              this.props.closeModal();
            }}>
            <FontAwesomeIcon
              color="#9E9E9E"
              icon={faTimes}
              size={25}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleTextStyle}>{this.props.title}</Text>
          </View>
          <View style={styles.SubtitleContainer}>
            <Text style={styles.SubtitleTextStyle}>{this.props.subtitle}</Text>
          </View>
          {/*Slider here*/}
          <View style={styles.SwipeTextContainer}>
            <Text style={styles.SwipeTextStyle}>Swipe Right to Confirm</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  IconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  ModalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BatchBuildContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 120,
    marginHorizontal: 50,
    elevation: 10,
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  TitleContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  TitleTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#92CE64',
    fontWeight: 'bold',
  },
  SubtitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  SubtitleTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  SwipeTextContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: '12%',
  },
  SwipeTextStyle: {
    fontSize: BasicStyles.normalText.fontSize,
    color: '#D5D5D5',
  },
});

export default Progress;
