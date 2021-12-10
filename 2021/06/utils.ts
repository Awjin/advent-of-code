import { read } from "../../utils/input";

export function getPopulationSize(initialFish: number[], days: number): number {
  // The breeding calendar is a circular list, so its length needs to be at
  // least as long as a baby fish's breeding time. This ensures that new entries
  // wrap around properly.
  const calendar = Array(9).fill(0);
  initialFish.forEach((i) => calendar[i]++);

  for (let i = 0; i < days; i++) {
    const today = i % calendar.length;
    const breeders = calendar[today];
    // New babies breed in 9 days.
    calendar[(today + 9) % calendar.length] += breeders;
    // Adults breed again in 7 days.
    calendar[(today + 7) % calendar.length] += breeders;
    calendar[today] -= breeders;
  }

  return calendar.reduce((accumulator, num) => accumulator + num);
}

export function getData(): number[] {
  return read(2021, 6)[0][0]
    .split(",")
    .map((num) => parseInt(num));
}
