/* alias type *

/*
	type -> 중복선언 안 됨
	interface -> = 없음 중복선언 됨 (병합)
*/

type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

type User1 = {
  address: string;
};

type mixed = User & User1;

// = 없음
interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user1: User = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true,
};

const user2: _User = {
  id: 2,
  name: 'dog',
  auth: 'admin',
  isPaid: true,
};

const user3: mixed = {
  id: 3,
  name: 'dog',
  auth: 'admin',
  isPaid: true,
  address: 'a',
};

/* index signature */
// 객체의 키가 동적으로 결정될 때 유용하게 사용 가능
type Person = {
  name: string;
  age: number;
  email: string;
  [key: string]: string | number;
};

const preson: Person = {
  name: 'beom',
  age: 30,
  email: 'tiger@email.com',
};
