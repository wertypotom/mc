import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

type HeaderPrivacy = "public" | "private" | "auth";
type Props = {
  privacy: HeaderPrivacy;
};

export function AppHeader({ privacy }: Props) {
  const isShowProfile = privacy !== "auth";

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isShowProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
