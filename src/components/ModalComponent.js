// CustomModal.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColor from '../theme/AppColor';

const CustomModal = ({ isVisible, onClose, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{ color: AppColor.white, alignItems: "center" }}>Add Items</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    {children}
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: AppColor.dark,
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 5,
    },
    closeButtonText: {
        color: AppColor.white,
    },
});

export default CustomModal;
