import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {};
const DashboardPage = async (props: Props) => {
  // Authentication

  const auth = await onAuthenticateUser();
  if (auth.status === 200 || auth.status === 201) {
    return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}`);
  }

  if (auth.status === 400 || auth.status === 500 || auth.status === 404) {
    return redirect("/auth/sign-in");
  }
  // Check if the user is authenticed and exists
  // if not redirect to the login/sign-in page
  return <div>DashboardPage</div>;
};
export default DashboardPage;
