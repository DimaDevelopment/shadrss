export const isRssOutput = (output: string) => {
  return (
    output.includes("<rss") ||
    output.includes("<feed") ||
    output.includes("<RDF")
  );
};
