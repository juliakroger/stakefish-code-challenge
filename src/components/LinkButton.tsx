import Social from "@/icons/Socials";

const LinkButton = ({ url = "" }) => {
  return url && url.includes("http") ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#66A390] border border-[#67AE97] flex items-center justify-center w-8 h-8 rounded text-white"
      href={url}
    >
      <Social url={url} />
    </a>
  ) : null;
};

export default LinkButton;
