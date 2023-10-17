import Facebook from "@/icons/Socials/Facebook";
import Linkedin from "@/icons/Socials/Linkedin";
import Medium from "@/icons/Socials/Medium";
import Reedit from "@/icons/Socials/Reedit";
import Slack from "@/icons/Socials/Slack";
import Telegram from "@/icons/Socials/Telegram";
import Twitter from "@/icons/Socials/Twitter";
import Web from "@/icons/Socials/Web";

const Social = ({ url = "" }) => {
  if (url.includes("facebook")) {
    return <Facebook />;
  }

  if (url.includes("medium")) {
    return <Medium />;
  }

  if (url.includes("reddit")) {
    return <Reedit />;
  }

  if (url.includes("t.me")) {
    return <Telegram />;
  }

  if (url.includes("slack")) {
    return <Slack />;
  }

  if (url.includes("twitter")) {
    return <Twitter />;
  }

  if (url.includes("linkedin")) {
    return <Linkedin />;
  }

  return <Web />;
};

export default Social;
