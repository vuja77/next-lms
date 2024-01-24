
import SideBar from "@/components/functional/sideBar";
import Header from "@/components/functional/header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Appearance from "@/components/functional/appereance";
import ProfileSettings from "@/components/functional/profileSettings";
import { detailsAction } from "@/app/actions/auth";
export default async function Setting() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row">
        <SideBar></SideBar>
        <div className="p-10 space-y-5 ">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-accent">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>

          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Edit profile</TabsTrigger>
              <TabsTrigger value="appereance">Apperance</TabsTrigger>
              <TabsTrigger value="display">About us</TabsTrigger>
            </TabsList>
            <Separator className="mt-5"></Separator>

            <TabsContent value="profile">
              <ProfileSettings></ProfileSettings>
            </TabsContent>
            <TabsContent value="appereance">
              <Appearance></Appearance>
            </TabsContent>
            <TabsContent value="display"></TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
