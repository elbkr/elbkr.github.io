import React from "react";
import DiscordIcon from "./icons/discord-icon.svg";
import ExternalIcon from "./icons/external-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import LinkButton from "./link-button";
import MailIcon from "./icons/mail-icon.svg";

export const MainCard: React.FC = () => (
  <main
    id="main-card"
    className="z-10 flex flex-col items-center rounded-3xl bg-card p-4 shadow-md md:flex-row md:p-6 max-lg:pt-6 gap-5"
    itemScope itemType="https://schema.org/Person"
  >
    <img
      fetchPriority="high"
      itemProp="image"
      src="/avatar.jpg"
      alt="elbkr's avatar"
      height={128}
      width={128}
      className="h-32 w-32 rounded-2xl bg-placeholder"
    />
    <div className="flex flex-col gap-2 md:mr-2">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold leading-9" itemProp="name">elbkr</h1>
        <p className="text-text-secondary" itemProp="description">Developer of Vibe, a Discord music bot</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <ul className="flex flex-row gap-2 w-full *:flex-1 list-none">
          <LinkButton
            url="https://github.com/elbkr"
            text="GitHub"
            Icon={GitHubIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="https://discord.gg/nMJJ8PAcD9"
            text="Vibe Support Server"
            Icon={DiscordIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="mailto:elbkr@playvibe.gg"
            text="Email"
            Icon={MailIcon}
            itemProp="sameAs"
          />
        </ul>
      </div>
    </div>
  </main>
);

export default MainCard;
