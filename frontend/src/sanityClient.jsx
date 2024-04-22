import { createClient } from "@sanity/client";

export default createClient({

  projectId: "xkojrun8", 

  dataset: "production",

  apiVersion: '2024-04-22',

  useCdn: false

});