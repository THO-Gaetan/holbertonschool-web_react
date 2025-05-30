interface MajorCredits {
  credits: number;
  readonly _majorBrand: unique symbol; // Brand property to uniquely identify this type
}

interface MinorCredits {
  credits: number;
  readonly _minorBrand: unique symbol; // Brand property to uniquely identify this type
}

/**
 * Sums the credits of two major credit subjects
 * @returns Total major credits
 */
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MajorCredits; // Type assertion needed due to the brand property
}

/**
 * Sums the credits of two minor credit subjects
 * @returns Total minor credits
 */
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MinorCredits; // Type assertion needed due to the brand property
}

const subject1: MajorCredits = {
  credits: 3
} as MajorCredits;

const subject2: MajorCredits = {
  credits: 4
} as MajorCredits;

const subject3: MinorCredits = {
  credits: 1
} as MinorCredits;

const subject4: MinorCredits = {
  credits: 2
} as MinorCredits;

console.log(sumMajorCredits(subject1, subject2));
console.log(sumMinorCredits(subject3, subject4));