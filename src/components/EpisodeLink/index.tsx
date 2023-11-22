"use client";

import { IBunnySource, IMetadata } from "@/zodTypes";
import getBunnyEpisode from "@/tools/getBunnyEpisode";
import getBunnyEpisodeLinks, { EpisodeLinks } from "@/tools/getBunnyEpisodeLink";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Video } from "bunny-stream";
import Image from "next/image";
import EpisodeThumbnail from "./thumbnail";
import EpisodeLinkLoading from "./loading";

export interface IProps {
  episode: IMetadata;
}

const EpisodeLink: React.FC<IProps> = ({ episode }) => {
  const [bunnyEpisode, setBunnyEpisode] = useState<Video>();
  const [episodeLinks, setEpisodeLinks] = useState<EpisodeLinks>();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      const bunnySource = episode.sources.find((source) => source.type === "bunny")! as IBunnySource;

      const newBunnyEpisode = await getBunnyEpisode(bunnySource.bunnyId, {
        signal: abortController.signal,
      });
      const newEpisodeLinks = getBunnyEpisodeLinks(newBunnyEpisode);

      setBunnyEpisode(newBunnyEpisode);
      setEpisodeLinks(newEpisodeLinks);
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  if (bunnyEpisode && episodeLinks) {
    return (
      <Paper sx={{ padding: "1rem", height: "100%" }} elevation={2}>
        <EpisodeThumbnail episode={episode} episodeLinks={episodeLinks} />
        <Typography>{episode.title}</Typography>
      </Paper>
    );
  }

  return <EpisodeLinkLoading />;
};

export default EpisodeLink;
