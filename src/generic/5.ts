/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, UValue> {
  key: TKey,
  value: UValue,
}

let test: KeyValuePair<number, string> = { key: 10, value: "Test" };


export {};