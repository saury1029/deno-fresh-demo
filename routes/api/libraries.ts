import { FreshContext } from "$fresh/server.ts";

const readJson = async () => {
  const currentDir = Deno.cwd() + "/data/";
  const content = await Deno.readTextFile(`${currentDir}libraries.json`);
  return content;
};

export const handler = async (_req: Request, _ctx: FreshContext) => {
  const content = await readJson();
  return new Response(content, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
