interface Testable {
  name: string;
}

export default function whoAmI(): Testable {
  return {name: "Testable"};
}
