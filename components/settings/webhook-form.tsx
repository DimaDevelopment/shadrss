"use client";

import { Loader2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Mock available registries - in a real app, this would come from the backend
export const AVAILABLE_REGISTRIES = [
  { id: "shadcn", name: "shadcn/ui" },
  { id: "animate-ui", name: "Animate UI" },
  { id: "acme", name: "Acme Corp" },
];

const webhookFormSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
  registries: z.array(z.string()).min(1, {
    message: "Please select at least one registry to subscribe to.",
  }),
});

export type WebhookFormValues = z.infer<typeof webhookFormSchema>;

interface WebhookFormProps {
  defaultValues?: Partial<WebhookFormValues>;
  onSubmit: (data: WebhookFormValues) => Promise<void>;
  submitLabel?: string;
}

export function WebhookForm({
  defaultValues,
  onSubmit,
  submitLabel = "Create Webhook",
}: WebhookFormProps) {
  const form = useForm<WebhookFormValues>({
    resolver: zodResolver(webhookFormSchema),
    defaultValues: {
      url: "",
      registries: [],
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endpoint URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="https://api.example.com/webhook"
                    className="pl-9"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                The URL where we'll send POST requests.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registries"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Registries</FormLabel>
                <FormDescription>
                  Select the registries you want to receive updates from.
                </FormDescription>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {AVAILABLE_REGISTRIES.map((registry) => (
                  <FormField
                    key={registry.id}
                    control={form.control}
                    name="registries"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={registry.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(registry.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      registry.id,
                                    ])
                                  : field.onChange(
                                      (field.value || []).filter(
                                        (value) => value !== registry.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {registry.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
}
