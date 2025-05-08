function recursiva(i) {
    console.log(i);
    if (i <= 0) {
        return
    } else {
        recursiva(i - 1);
    }
}

recursiva(5)