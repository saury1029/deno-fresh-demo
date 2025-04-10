import { Handlers, PageProps } from "$fresh/server.ts";
import Libraries from "../islands/Libraries.tsx";

// 定义数据类型
export interface Library {
  name: string;
  latest: string;
}

interface PageData {
  libraries: Library[];
}

export const handler: Handlers<PageData> = {
  GET: async (_req, ctx) => {
    const content = await Deno.readTextFile(
      `${Deno.cwd()}/data/libraries.json`,
    );
    return ctx.render({
      libraries: JSON.parse(content).results,
    });
  },
};

export default function Home(
  { data }: PageProps<PageData>,
) {
  return (
    <div class="px-4 py-8 mx-auto ">
      <div class="max-w-screen-md mx-auto ">
        <div class="flex flex-col items-center justify-center bg-[#86efac]">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
        </div>
        <Libraries libraries={data.libraries} />
      </div>
    </div>
  );
}
