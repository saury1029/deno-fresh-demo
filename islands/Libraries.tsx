import { Library } from "../routes/index.tsx";
const copyText = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

interface Props {
  libraries: Library[];
}
const Libraries = ({ libraries }: Props) => {
  return (
    <>
      {libraries.map((library) => {
        return (
          <div class="py-3 border-b group" key={library.name}>
            <div className="flex items-center gap-2 mb-2">
              <h1 class="flex-1 text-xl font-bold">{library.name}</h1>
              <button
                type="button"
                class="text-xs px-2 py-1 rounded-sm bg-[#ffdb1e] hidden group-hover:block"
                onClick={() => copyText(library.latest)}
              >
                Copy link
              </button>
            </div>
            <p class="text-sm text-gray-500">{library.latest}</p>
          </div>
        );
      })}
    </>
  );
};

export default Libraries;
