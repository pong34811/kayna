export const fetchChannelData = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCC_P34t35REbiPzbHO_bifA&key=AIzaSyDcsfn7EkqklHYJwMS83-mfm7_O0uDHJAc"
      );
      const data = await response.json();
      const { subscriberCount, videoCount, viewCount } = data.items[0].statistics;
      return { subscriberCount, videoCount, viewCount };
    } catch (error) {
      console.error("Error fetching channel data:", error);
      return { subscriberCount: 0, videoCount: 0, viewCount: 0 };
    }
  };