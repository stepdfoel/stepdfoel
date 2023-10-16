import Character from '../src/js/character';

test('Создание персонажа с заданными свойствами', () => {
  const character = new Character('John Snow', 'Swordsman');
  const expected = {
    name: 'John Snow',
    type: 'Swordsman',
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(expected);
});

test('Нанесение урона уменьшает health', () => {
  const character = new Character('John Snow', 'Swordsman');
  const received = character.damage(10);
  expect(received.health).toBe(94);
});

test('Нанесение урона большего, чем здоровье персонажа, не дает отрицательный health', () => {
  const character = new Character('John Snow', 'Swordsman');
  const received = character.damage(200);
  expect(received.health).toBe(0);
});

test('Вызов без параметров не наносит урон', () => {
  const character = new Character('John Snow', 'Swordsman');
  const received = character.damage();
  expect(received.health).toBe(100);
});
