import { Metadata } from "next";
import { WebhooksSettings } from "@/components/settings/webhooks";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
};

export default function SettingsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-10">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-medium">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <div className="border rounded-lg p-6">
          <WebhooksSettings />
        </div>
      </div>
    </div>
  );
}
