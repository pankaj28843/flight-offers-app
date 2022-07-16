const AMADEUS_DURATION_REGEX = /PT(?<hours>\d+)H(?:(?<minutes>\d+)M)?/i;

export const parseAmadeusTravelDuration = (
  durationString: string
): { hours: number; minutes: number } => {
  const match = durationString.match(AMADEUS_DURATION_REGEX);
  if (!match) {
    throw new Error(`Invalid Value: ${durationString}`);
  }

  return {
    hours: parseInt(match[1]),
    minutes: typeof match[2] === 'string' ? parseInt(match[2]) : 0,
  };
};
