import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Know our professionals"}
        subtitle={"Search for professionals near your area"}
      />
      <UserInformation
        name={"Yasmin K"}
        description={"São Paulo"}
        picture={"https://www.github.com/yasmink88.png"}
        rating={4}
      />
    </div>
  );
}
