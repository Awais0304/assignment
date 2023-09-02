var todo = ["awais", "moaz", "talal", "ibrahim"];
if (todo.length % 2 == 0) {
    todo.splice(1, 2);
}
else {
    todo.splice(1, 1);
}
console.log(todo);
