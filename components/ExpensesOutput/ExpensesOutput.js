import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of Shoe",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A Pair of Trousers",
    amount: 109.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2023-02-14"),
  },
  {
    id: "e5",
    description: "Pens",
    amount: 3.99,
    date: new Date("2021-12-29"),
  },
  {
    id: "e6",
    description: "A Pair of Shoe",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e7",
    description: "A Pair of Trousers",
    amount: 109.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e8",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 14.99,
    date: new Date("2023-02-14"),
  },
  {
    id: "e10",
    description: "Pens",
    amount: 3.99,
    date: new Date("2021-12-29"),
  },
  {
    id: "e11",
    description: "A Pair of Shoe",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e12",
    description: "A Pair of Trousers",
    amount: 109.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e13",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e14",
    description: "Book",
    amount: 14.99,
    date: new Date("2023-02-14"),
  },
  {
    id: "e15",
    description: "Pens",
    amount: 3.99,
    date: new Date("2021-12-29"),
  },
];

function ExpenseOutput({ expenses, expensesPeriod }) {
  return (
    <View style = {styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
