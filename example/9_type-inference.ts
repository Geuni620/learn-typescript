var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 10
}

//best common type
var arr =[1, 2, true]
