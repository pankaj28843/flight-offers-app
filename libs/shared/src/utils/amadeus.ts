const AMADEUS_DURATION_REGEX = /PT(?<hours>\d+)H(?<minutes>\d+)M/i;

export const parseAmadeusTravelDuration = (
  duration: string
): { hours: number; minutes: number } => {
  const match = duration.match(AMADEUS_DURATION_REGEX);
  if (!match) {
    throw new Error('Invalid Value');
  }

  return { hours: parseInt(match[1]), minutes: parseInt(match[2]) };
};
