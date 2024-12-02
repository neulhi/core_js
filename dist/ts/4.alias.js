/* alias type *

/*
    type -> 중복선언 안 됨
    interface -> = 없음 중복선언 됨 (병합)
*/
const user1 = {
    id: 1,
    name: 'tiger',
    auth: 'admin',
    isPaid: true,
};
const user2 = {
    id: 2,
    name: 'dog',
    auth: 'admin',
    isPaid: true,
};
const user3 = {
    id: 3,
    name: 'dog',
    auth: 'admin',
    isPaid: true,
    address: 'a',
};
const preson = {
    name: 'beom',
    age: 30,
    email: 'tiger@email.com',
};
export {};
