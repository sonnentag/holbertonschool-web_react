export interface MajorCredits {
  credit: number;
  _brand: "major";
}

export interface MinorCredits {
  credit: number;
  _brand: "minor";
}

export function sumMajorCredits( subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  return sum;
}

export function sumMinorCredits( subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  return sum;
}
