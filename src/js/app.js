export default function getHealth(options) {
  const health = options.health;

  if (health > 50) {
    return "healthy";
  }
  if (health <= 50 && health >= 15) {
    return "wounded";
  }
  if (health < 15 && health > 0) {
    return "critical";
  }
  return 'health value is negative';
}
