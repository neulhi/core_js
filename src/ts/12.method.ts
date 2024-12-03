const arr = [1, 2, 3];

// arr.map(n => n * 2);

function map<T, U>(arr: T[], callback: (n: T) => U): U[] {
	const result:U[] = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	
	return result;
}

map(arr, (n) => n * 2);



type CallBack<T> = (n: T) => void;
type ForEach = <T>(arr: T[], callback: CallBack<T>) => void;

interface _CallBack<T> {
	(n: T): void;
}

interface _ForEach {
	<T>(arr: T[], callback: _CallBack<T>): void;
}

const forEach:ForEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

forEach(arr, (n) => console.log(n))