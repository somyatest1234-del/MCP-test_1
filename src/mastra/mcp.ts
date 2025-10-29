import { HttpServer } from "@modelcontextprotocol/sdk/dist/http/server.js";

export const cdataMcp = new HttpServer({
  name: "cdata",
  type: "http",
  url: "https://mcp.cloud.cdata.com/mcp",
  headers: {
    Authorization: "Basic c29teWFzQGNkYXRhLmNvbTpCSEx6V01qcWM4c1U2TXl4WU9CZ0s5TWVyd0svWmdlN1BPcWVSZTNtODBDTjMvengK",
  }
});

