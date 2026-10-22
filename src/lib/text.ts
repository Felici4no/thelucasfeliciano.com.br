/** First "/"-separated segment of a label like "Awaiting results / Live". */
export function firstSegment(value: string) {
  return value.split('/')[0].trim();
}

/** Keeps tables scannable by showing only the first sentence of a result. */
export function firstSentence(value: string) {
  const i = value.search(/[.;]\s/);
  return i === -1 ? value : value.slice(0, i + 1).replace(/;$/, '.');
}
