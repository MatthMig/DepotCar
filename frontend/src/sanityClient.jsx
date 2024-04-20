import { createClient } from "@sanity/client";

export default createClient({

  projectId: "xkojrun8", // find this at manage.sanity.io or in your sanity.json

  dataset: "production", // this is from those question during 'sanity init'

});