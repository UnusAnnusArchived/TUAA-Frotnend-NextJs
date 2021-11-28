import ***REMOVED*** IEpisodeAround ***REMOVED*** from "../../src/types";

const getEpisodesAround = (currentEpisodeCode: string) => ***REMOVED***
  try ***REMOVED***
    const currentEpisode = parseInt(currentEpisodeCode.slice(-3));
    const next = currentEpisode + 1;
    const prev = currentEpisode - 1;

    if (currentEpisodeCode.includes("s01")) ***REMOVED***
      const prevEp = `s01.e$***REMOVED***(currentEpisode - 1).toString().padStart(3, "0")***REMOVED***`;
      const nextEp = `s01.e$***REMOVED***(currentEpisode + 1).toString().padStart(3, "0")***REMOVED***`;

      const response: IEpisodeAround = ***REMOVED***
        nextEp: next >= 1 && next <= 368 ? nextEp : null,
        prevEp: prev >= 1 && prev <= 368 ? prevEp : null,
  ***REMOVED***;

      return response;
***REMOVED*** else if (currentEpisodeCode.includes("s00")) ***REMOVED***
      const prevEp = `s00.e$***REMOVED***(currentEpisode - 1).toString().padStart(3, "0")***REMOVED***`;
      const nextEp = `s00.e$***REMOVED***(currentEpisode + 1).toString().padStart(3, "0")***REMOVED***`;

      const response: IEpisodeAround = ***REMOVED***
        nextEp: next >= 1 && next <= 14 ? nextEp : null,
        prevEp: prev >= 1 && prev <= 14 ? prevEp : null,
  ***REMOVED***;
      return response;
***REMOVED*** else ***REMOVED***
      return null;
***REMOVED***
***REMOVED*** catch (err) ***REMOVED***
    return null;
***REMOVED***
***REMOVED***;

export default getEpisodesAround;
