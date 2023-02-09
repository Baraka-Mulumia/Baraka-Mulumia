import SanityClientConstructor from "@sanity/client";

export const SanityClient = SanityClientConstructor({
  projectId: "k2895d2a",
  dataset: "production",
  //   useCdn: true,
  apiVersion: "2021-03-25",
});
