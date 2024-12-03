/* Omit(특정 속성 제외 하기) */
type User = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Omit<User, 'email'>;

const user: PublicUser = {
  id: 1,
  name: 'tiger',
};

/* Pick(특정 속성만 선택 해서 사용) */
const user2: Pick<User, 'id' | 'name'> = {
  id: 2,
  name: 'beom',
};

/* Partial(모든 속성을 선택적 속성 타입으로) */
type Address = {
  lat: number;
  long: number;
};

type User3 = {
  id: number;
  name?: string;
  email?: string;
  address: Address;
};

const user3: Partial<User3> = {
  name: 'seon',
};

/* readonly(읽기 전용 재할당 안 됨) */
type User4 = {
  id: number;
  name: string;
  email: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: 'tiger',
  email: 'tiger@email.com',
};

// user4.id = 3;

/* Required(특정 부분은 옵셔널이지만 모두 필수 입력) */
const user5: Required<User3> = {
  id: 1,
  name: 'tiger',
  email: 'tiger@email.com',
  address: {
    lat: 20,
    long: 33.5,
  },
};

/* ShallowPartial(부분만 필수 적용) */
type ShallowPartial<T> = {
	[K in keyof T]? : T[K]
}

const user6: ShallowPartial<User3> = {
  name: 'tiger',
  address: {
    lat: 20,
    long: 33.5,
  },
};
