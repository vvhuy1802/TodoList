import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Modal } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik } from 'formik';

export default function Popup({ newTask }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDate, setIsStartDate] = useState(true);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        if (isStartDate) {
            setStartDate(date);
            setIsStartDate(false);
        }
        else {
            setEndDate(date);
            setIsStartDate(true);
        }
        hideDatePicker();
    };
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', description: '', datestart: '', dateend: '' }}
                onSubmit={(values) => {
                    values.datestart = startDate.toDateString();
                    values.dateend = endDate.toDateString();
                    if (values.title == '') {
                        newTask('');
                    } else {
                        var task = "\nTitle: " + values.title + "\nDescription: " + values.description + "\nStart: " + values.datestart + "\nEnd: " + values.dateend;
                        newTask(task);
                    }
                }}>
                {(props) => (
                    <View>
                        <Text style={styles.textStyle}>
                            Popup
                        </Text>
                        <TextInput style={styles.title}
                            placeholder="Tittle"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            style={styles.description}
                            placeholder="Description"
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                        />
                        <View style={styles.datePicker}>
                            <TouchableOpacity
                                style={styles.button}
                                setIsStartDate={true}
                                onPress={showDatePicker}
                            >
                                <Text style={{ color: 'green' }}>Start Task</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                setIsStartDate={false}
                                style={styles.button}
                                onPress={showDatePicker}
                            >
                                <Text style={{ color: 'green' }}>End Task</Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />

                        </View>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.save}
                                onPress={props.handleSubmit}
                            >
                                <Text style={{ color: 'red' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </Formik>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    textStyle: {
        fontSize: 30,
        padding: 20,
        alignSelf: 'center',
        color: 'black'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 48,
        width: 300,
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1, },
        shadowRadius: 2,
        elevation: 4,
        shadowOpacity: 0.4,
        paddingLeft: 20,
        marginTop: 20,
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 120,
        width: 300,
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1, },
        shadowRadius: 2,
        elevation: 4,
        shadowOpacity: 0.4,
        paddingLeft: 20,
        marginTop: 20,
    },
    datePicker: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '75%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        width: '40%',
        backgroundColor: '#add8e6',
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowRadius: 2,
        elevation: 4,
        shadowOpacity: 0.4,
    },
    save: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        width: '25%',
        backgroundColor: 'pink',
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowRadius: 2,
        elevation: 4,
        shadowOpacity: 0.4,
    }
})
