// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "bllxcrc4",
  dataset: "production",
  apiVersion: "2024-05-15",
  useCdn: false,
};

const client = createClient(config);

export default client;