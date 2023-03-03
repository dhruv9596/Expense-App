import { View , Text , StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpense() {
    return (
        <ExpenseOutput expensesPeriod="Total"/>
    );

}
export default RecentExpense;