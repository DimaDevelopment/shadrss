"use client";

import { useState } from "react";
import { Plus, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { WebhookForm, WebhookFormValues } from "./webhook-form";
import { WebhookCard, Webhook } from "./webhook-card";

// Mock data - in a real app, this would come from the backend
const MOCK_WEBHOOKS: Webhook[] = [
  {
    id: "1",
    url: "https://api.example.com/webhooks/registry-updates",
    registries: ["shadcn", "animate-ui"],
    isActive: true,
    lastTriggered: "2 minutes ago",
    status: "healthy",
  },
  {
    id: "2",
    url: "https://internal.app/api/sync",
    registries: ["shadcn"],
    isActive: false,
    status: "pending",
  },
];

export function WebhooksSettings() {
  const [webhooks, setWebhooks] = useState<Webhook[]>(MOCK_WEBHOOKS);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingWebhook, setEditingWebhook] = useState<Webhook | null>(null);

  const toggleWebhook = (id: string) => {
    setWebhooks(
      webhooks.map((w) => (w.id === id ? { ...w, isActive: !w.isActive } : w))
    );
    toast.success("Webhook status updated");
  };

  const deleteWebhook = (id: string) => {
    setWebhooks(webhooks.filter((w) => w.id !== id));
    toast.success("Webhook deleted");
  };

  const onSubmit = async (data: WebhookFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (editingWebhook) {
      setWebhooks(
        webhooks.map((w) =>
          w.id === editingWebhook.id
            ? { ...w, url: data.url, registries: data.registries }
            : w
        )
      );
      setEditingWebhook(null);
      toast.success("Webhook updated successfully");
    } else {
      const newWebhook: Webhook = {
        id: Math.random().toString(36).substr(2, 9),
        url: data.url,
        registries: data.registries,
        isActive: true,
        status: "pending",
      };
      setWebhooks([...webhooks, newWebhook]);
      toast.success("Webhook created successfully");
    }
    setIsCreateOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Webhooks</h3>
          <p className="text-sm text-muted-foreground">
            Receive updates when registries change.
          </p>
        </div>
        <Dialog
          open={isCreateOpen}
          onOpenChange={(open) => {
            setIsCreateOpen(open);
            if (!open) setEditingWebhook(null);
          }}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Webhook
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editingWebhook ? "Edit Webhook" : "Create Webhook"}
              </DialogTitle>
              <DialogDescription>
                {editingWebhook
                  ? "Update webhook details and subscriptions."
                  : "Add a new webhook URL to receive notifications when registries update."}
              </DialogDescription>
            </DialogHeader>
            <WebhookForm
              onSubmit={onSubmit}
              defaultValues={
                editingWebhook
                  ? {
                      url: editingWebhook.url,
                      registries: editingWebhook.registries,
                    }
                  : undefined
              }
              submitLabel={editingWebhook ? "Save Changes" : "Create Webhook"}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4">
        {webhooks.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-10 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Globe className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No webhooks configured</h3>
              <p className="text-sm text-muted-foreground max-w-sm mt-1 mb-6">
                You haven't set up any webhooks yet. Create one to start
                receiving registry updates.
              </p>
              <Button onClick={() => setIsCreateOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Webhook
              </Button>
            </CardContent>
          </Card>
        ) : (
          webhooks.map((webhook) => (
            <WebhookCard
              key={webhook.id}
              webhook={webhook}
              onToggle={toggleWebhook}
              onDelete={deleteWebhook}
              onEdit={(webhook) => {
                setEditingWebhook(webhook);
                setIsCreateOpen(true);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
