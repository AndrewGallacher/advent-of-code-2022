export function getPriority(type: string): number {
  const asciiCode = type.charCodeAt(0);

  if (asciiCode >= "a".charCodeAt(0) && asciiCode <= "z".charCodeAt(0)) {
    return asciiCode - "a".charCodeAt(0) + 1;
  }

  if (asciiCode >= "A".charCodeAt(0) && asciiCode <= "Z".charCodeAt(0)) {
    return asciiCode - "A".charCodeAt(0) + 27;
  }

  return 0;
}
