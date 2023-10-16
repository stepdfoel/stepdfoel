/**
 * Создание персонажа
 *
 * @param {string} name - Имя персонажа
 * @param {string} type - Тип персонажа
 *
 * @throws Ошибка при неверном введении имени или типа персонажа
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

function damage(points = 0) {
  const harm = points * (1 - this.defence / 100);
  if (this.health > harm) {
    this.health = this.health - harm;
  } else this.health = 0;
  return this;
}

Character.prototype.damage = damage;

export default Character;
