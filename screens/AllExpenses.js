import { View, Text, StyleSheet} from 'react-native';
import ExpenseOutput from '../components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
    return <ExpenseOutput expensesPeriod="Total"/>
}
export default AllExpenses;