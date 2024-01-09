const map1 = [
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 's', 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0]
];

const map2 = [
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 's', 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 0, 'w', 'w', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 0, 'w', 'w', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0]
];

const map3 = [
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 's', 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 0, 'w', 'w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w', 'w', 0, 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  [0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 0, 'w', 'w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['w', 'w', 'w', 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 'w', 'w', 'w', 'w'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 'w', 'w', 'w', 'w', 0, 'w', 'w', 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 0]
];