import { Text ,FlatList } from "react-native";
import Expenseitem from "./ExpenseItem";
function renderExpenseItem(itemData) {
  return <Expenseitem {...itemData.item}/>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
