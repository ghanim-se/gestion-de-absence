const inputArray = u('.inpt').nodes

u('.clearBtn').on('click', () => {
    inputArray.forEach(element => {
        element.value = ''
    });
})