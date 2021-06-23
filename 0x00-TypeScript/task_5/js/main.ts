interface MajorCredits {
  credits: number;
  _brand: "major";
}

interface MinorCredits {
  credits: number;
  _brand: "minor";
}

function sumMajorCredits( subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  return sum;
}

function sumMinorCredits( subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  return sum;
}
