import React, { Fragment, useEffect, useState} from 'react';
import {Alert, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import * as Calendar from 'expo-calendar';
import * as Localization from 'expo-localization';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { v4 as uuidv4 } from 'uuid';
import { useKeyboardHeight } from '@calendar/hooks';
import { useStore } from '@calendar/store';
import { Routes } from '@calendar/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { TypePredicateKind } from 'typescript';

const { width: vw } = Dimensions.get('window');

export default function AddTask({navigation, route}) {
    const { updateTodo } = useStore((state) => ({
        updateTodo: state.updateTodo
    }));
    const keyboardHeight = useKeyboardHeight();
    const createNewCalendar = route.params?.createNewCalendar ?? (() => null);
    const updateTask = route.params?.updateTask ?? (() => null);
    const currentDate = route.params?.currentDate ?? (() => null);
    const [selectedDay, setSelectedDay] = useState({
        [`${moment().format('YYYY')}-${moment().format('MM')}-${moment().format('DD')}`]: {
            selected: true,
            selectedColor: Colors.light.colorBlue700
        }
    });
    const [currentDay, setCurrentDay] = useState(moment().format());
    const [textTask, setTextTask] = useState('');
    const [textNotes, setTextNotes] = useState('');
    const [visibleHeight, setVisibleHeight] = useState(
        Dimensions.get('window').height
    );
    const [isAlarmSet, setAlarmSet] = useState(false);
    const [alarmTime, setAlarmTime] = useState(moment().format());
    const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

    useEffect(() => {
        if (keyboardHeight > 0) {
            setVisibleHeight(Dimensions.get('window').height - keyboardHeight);
        } else if (keyboardHeight === 0) {
            setVisibleHeight(Dimensions.get('window').height);
        }
    }, [keyboardHeight]);

    const synchronizeCalendar = async () => {
        const calendarId = await createNewCalendar();
        try {
            const createEventId = await addEventsToCalendar(calendarId);
            handleCreateEventData(createEventId);
        } catch (e) {
            Alert.alert(e.message);
        }
    };

    const handleAlarmSet = () => {
        setAlarmSet(!isAlarmSet);
    };

    const addEventsToCalendar = async (calendarId) => {
        const event = {
            title: textTask,
            description: textNotes,
            startDate: moment(alarmTime).add(0, 'm').toDate(),
            endDate: moment(alarmTime).add(5, 'm').toDate(),
            timeZone: Localization.timezone
        };
        try {
            const createEventAsyncResNew = await Calendar.createEventAsync(
                calendarId.toString(),
                event
            );
            return createEventAsyncResNew;
        } catch (error) {
            console.log(error);
        }
    };
    const showDateTimePicker = () => setDateTimePickerVisible(true);
    const hideDateTimePicker = () => setDateTimePickerVisible(false);
    const handleCreateEventData = async (createEventId) => {
        const createTodo = {
            key: uuidv4(),
            date: `${moment(currentDay).format('YYYY')}-${moment(currentDay).format('MM')}-${moment(currentDay).format('DD')}`,
            todoList: [
                {
                    key: uuidv4(),
                    title: textTask,
                    notes: textNotes,
                    alarm: {
                        time: alarmTime,
                        createEventAsyncRes: createEventId
                    },
                    color: Colors.light.colorBlue500
                }
            ],
            markedDot: {
                date: currentDay,
                dots: [
                    {
                        key: uuidv4(),
                        color: Colors.light.colorBlue500,
                        selectedDotColor: Colors.light.colorBlue500
                    }
                ]
            }
        };
        navigation.navigate(Routes.HOME);
        await updateTodo(createTodo);
        updateCurrentTask(currentDate);
    };
    const handleDatePicked = (date) => {
        const selectedDatePicked = currentDay;
        const hour = moment(date).hour();
        const minute = moment(date).minute();
        const newModifiedDay = moment(selectedDatePicked).hour(hour).minute(minute);
        setAlarmTime(newModifiedDay);
        hideDateTimePicker();
    };
    return (
        <Fragment>
            <DateTimePicker isVisible={isDateTimePickerVisible} onConfirm={handleDatePicked} onCancel={hideDateTimePicker} mode='time' date={new Date()}/>
            <SafeAreaView style={styles.container}>
                <View style={{ height: visibleHeight }}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}
                                style={{ marginRight: vw / 2 - 120, marginLeft: 20 }}>
                                    <Image
                                        style={{ height: 25, width: 40 }}
                                        source={require('../../assets/images/back.png')}
                                        resizeMode="contain"
                                    />
                            </TouchableOpacity>
                            <Text style={styles.newTask}>New Task</Text>
                        </View>
                        <View style={styles.calendarContainer}>
                            <CalendarList
                                style={{
                                    width: 350,
                                    height: 350
                                }}
                                current={currentDay}
                                minDate={moment().format()}
                                horizontal
                                pastScrollRange={0}
                                pagingEnabled
                                calendarWidth={350}
                                onDayPress={(day) => {
                                    setSelectedDay({
                                        [day.dateString]: {
                                            selected: TypePredicateKind,
                                            selectedColor: Colors.light.colorBlue500
                                        }
                                    });
                                    setCurrentDay(day.dateString);
                                    setAlarmTime(day.dateString);
                                }}
                                monthFormat="yyyy MMMM"
                                hideArrows
                                markingType="custom"
                                theme={{
                                    selectedDayBackgroundColor: Colors.light.colorBlue700,
                                    selectedDayTextColor: '#ffffff',
                                    todayTextColor: Colors.light.colorBlue500,
                                    backgroundColor: '#EAEEF7',
                                    calendarBackground: '#EAEEF7',
                                    textDisabledColor: '#D9DBE0'
                                }}
                                markedDates={selectedDay}
                            />
                        </View>
                        <View style={styles.taskContainer}>
                            <TextInput
                                style={styles.title}
                                onChangeText={setTextTask}
                                value={textTask}
                                placeholder="Enter your task..."
                            />
                            <View style={styles.notesContent} />
                            <View>
                                <Text style={styles.notes}>Description</Text>
                                <TextInput
                                    style={{
                                        height: 25,
                                        fontSize: 19,
                                        marginTop: 3
                                    }}
                                    onChangeText={setTextNotes}
                                    value={textNotes}
                                    placeholder="Enter your description..."
                                />
                            </View>
                            <View style={styles.separator} />
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600'}}>Times</Text>
                                <TouchableOpacity
                                    onPress={() => showDateTimePicker()}
                                    style={{
                                        height: 25,
                                        marginTop: 3
                                    }}
                                >
                                    <Text style={{ fontSize: 19 }}>
                                        {moment(alarmTime).format('h:mm A')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            <Text
                                style={{
                                color: '#9CAAC4',
                                fontSize: 16,
                                fontWeight: '600'
                                }}
                            >Alarm</Text>
                            <View style={{ height: 25, marginTop: 3 }}>
                                <Text style={{ fontSize: 19 }}>
                                    {moment(alarmTime).format('h:mm A')}
                                </Text>
                            </View>
                            <Switch value={isAlarmSet} onValueChange={handleAlarmSet} />
                            </View>
                        </View>
                        <TouchableOpacity
                            disabled={textTask === ''}
                            style={[
                                styles.createTaskButton,
                                {
                                    backgroundColor:
                                     textTask === '' ? 'rgba(46, 102, 231,0.5' : '#2E66E7'
                                }
                            ]}
                            onPress={async () => {
                                if (isAlarmSet) {
                                    await synchronizeCalendar();
                                }
                                if (!isAlarmSet) {
                                    handleCreateEventData();
                                }
                            }}
                        >
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: '#ffffff'
                            }}
                            >ADD YOUR TASK</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    createTaskButton: {
        width: 252,
        height: 48,
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 5,
        justifyContent: 'center'
      },
      separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#979797',
        alignSelf: 'center',
        marginVertical: 20
      },
      notes: {
        color: '#9CAAC4',
        fontSize: 16,
        fontWeight: '600'
      },
      notesContent: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#979797',
        alignSelf: 'center',
        marginVertical: 20
      },
      title: {
        height: 25,
        borderColor: Colors.light.colorBlue500,
        borderLeftWidth: 1,
        paddingLeft: 8,
        fontSize: 19
      },
      taskContainer: {
        height: 400,
        width: 327,
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: '#2E66E7',
        backgroundColor: '#ffffff',
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 22
      },
      calenderContainer: {
        marginTop: 30,
        width: 350,
        height: 350,
        alignSelf: 'center'
      },
      newTask: {
        alignSelf: 'center',
        fontSize: 20,
        width: 120,
        height: 25,
        textAlign: 'center'
      },
      backButton: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
      },
      container: {
        flex: 1,
        backgroundColor: '#eaeef7'
      }
  });