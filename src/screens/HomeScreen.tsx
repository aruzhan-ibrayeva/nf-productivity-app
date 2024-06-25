import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, Task } from '../actions';
import { RootState, AppDispatch } from '../store/store';
import { RootStackParamList } from '../types';
import { format, startOfWeek, addDays, isToday } from 'date-fns';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
    const dispatch: AppDispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const today = new Date();

    const handleAddTask = () => {
        const newTask: Task = { id: Date.now(), name: 'New Task' };
        dispatch(addTask(newTask));
    };

    const handleRemoveTask = (taskId: number) => {
        dispatch(removeTask(taskId));
    };

    const renderWeekView = () => {
        const startWeek = startOfWeek(today, { weekStartsOn: 0 });

        const days = Array.from({ length: 7 }).map((_, index) => {
            const day = addDays(startWeek, index);
            return {
                date: format(day, 'dd'),
                dayOfWeek: format(day, 'EEE'),
                isToday: isToday(day),
            };
        });

        return (
            <View style={styles.weekContainer}>
                {days.map(({ date, dayOfWeek, isToday }) => (
                    <View key={date} style={[styles.dayContainer, isToday && styles.today]}>
                        <Text style={styles.dayText}>{dayOfWeek}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            <Button title="Add Task" onPress={handleAddTask} />
            {renderWeekView()}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    weekContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    dayContainer: {
        alignItems: 'center',
    },
    today: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
    },
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 12,
    },
});

export default HomeScreen;
