const mass5 = ["Пр", 2,3];
const mass4 = ["ив",4 ,5];
const mass3 = ["ет",6, 7];
const mass2 = [" !",8 ,9];
const mass1 = ["!!",10,11];

let massCatalogue = [...mass5, ...mass4, ...mass3, ...mass2, ...mass1];
//Done!

let obj = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 4,
    key5: 5
};
let obj2 = {
    ...obj,
    key6: 6,
    key7: 7,
    key8: 8,
};
// Done!