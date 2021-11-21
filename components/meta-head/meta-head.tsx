import Head from "next/head";
import React from "react";

interface IProps ***REMOVED***
  baseTitle?: string;
  video?: string;
  embed?: string;
  date?: number
  description?: string;
  image?: string;
  width?: string;
  height?: string;
***REMOVED***

const MetaHead: React.FC<IProps> = (***REMOVED***
  baseTitle,
  video,
  embed,
  date,
  description,
  image,
  width = "1920",
  height = "1080",
***REMOVED***) => ***REMOVED***
  // TODO: Change in production
  const baseDomain = "https://unusann.us/";

  if (!image.startsWith("http")) ***REMOVED***
    image = baseDomain + image;
***REMOVED***

  return (
    <Head>
      <title>***REMOVED***baseTitle ? baseTitle + " | The Unus Annus Archive" : "The Unus Annus Archive"***REMOVED***</title>
      ***REMOVED***/* <!-- Schema.org for Google --> */***REMOVED***
      <meta itemProp="name" content=***REMOVED***baseTitle***REMOVED*** />
      ***REMOVED***/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */***REMOVED***
      <meta name="og:title" content=***REMOVED***baseTitle***REMOVED*** />
      
      <meta name="og:image" content=***REMOVED***image***REMOVED*** />
      <meta name="og:url" content="https://unusann.us/" />
      <meta name="og:site_name" content="The Unus Annus Archive" />
      <meta name="og:locale" content="en_UK" />
      <meta name="og:type" content=***REMOVED***video ? "video.other" : "website"***REMOVED*** />
      <meta name="og:image:width" content=***REMOVED***width***REMOVED*** />
      <meta name="og:image:height" content=***REMOVED***height***REMOVED*** />
      ***REMOVED***/* <!-- Twitter --> */***REMOVED***
      <meta name="twitter:card" content=***REMOVED***video ? "player" : "summary"***REMOVED*** />
      <meta name="twitter:title" content=***REMOVED***baseTitle***REMOVED*** />
      <meta name="twitter:image:src" content=***REMOVED***image***REMOVED*** />
      <meta name="twitter:site" content="@UA_Archive" />

      ***REMOVED*** video && <React.Fragment>
        <meta name="twitter:player" content=***REMOVED***embed***REMOVED*** />
        <meta name="twitter:player:stream" content=***REMOVED***video***REMOVED*** />
        <meta name="og:video" content=***REMOVED***video***REMOVED*** />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:player:stream:content_type" content="video/mp4" />
        <meta name="video:type" content="video/mp4" />
        <meta name="video:release_date" content=***REMOVED***date.toString()***REMOVED*** />
      </React.Fragment> ***REMOVED***

      ***REMOVED*** description && <React.Fragment>
        <meta name="description" content=***REMOVED***description***REMOVED*** />
        <meta itemProp="description" content=***REMOVED***description***REMOVED*** />
        <meta name="og:description" content=***REMOVED***description***REMOVED*** />
        <meta name="twitter:description" content=***REMOVED***description***REMOVED*** />
      </React.Fragment> ***REMOVED***

      ***REMOVED*** image && <React.Fragment>
        <meta name="image" content=***REMOVED***image***REMOVED*** />
        <meta itemProp="image" content=***REMOVED***image***REMOVED*** />
      </React.Fragment> ***REMOVED***
    </Head>
  );
***REMOVED***;

export default MetaHead;
