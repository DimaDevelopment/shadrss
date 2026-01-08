import React from "react";

import * as CossSheet from "@/components/ui/sheet";
import * as CossFrame from "@/components/ui/frame";
import * as CossCollapse from "@/components/ui/collapsible";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Activity,
  Alert,
  ArrowDown01FreeIcons,
  Box,
  Clock,
  ExternalLink,
  Love,
  Star,
  Webhook,
} from "@hugeicons/core-free-icons";
import { ScrollArea } from "../ui/scroll-area";

type RegistryDetailsProps = {
  trigger: React.ReactNode;
};

export const RegistryDetails: React.FC<RegistryDetailsProps> = ({
  trigger,
}) => {
  return (
    <CossSheet.Sheet>
      <CossSheet.SheetTrigger>{trigger}</CossSheet.SheetTrigger>
      <CossSheet.SheetPopup>
        <CossSheet.SheetHeader>
          <CossSheet.SheetTitle className="flex items-center gap-x-2">
            <div className="flex items-center justify-center size-6 rounded-sm bg-background/50 overflow-hidden ">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="500"
                viewBox="0 0 500 500"
              >
                <path
                  d="M0 0 C165 0 330 0 500 0 C500 165 500 330 500 500 C335 500 170 500 0 500 C0 335 0 170 0 0 Z"
                  fill="var(--foreground)"
                />
                <path
                  d="M0 0 C7.92 0 15.84 0 24 0 C24 8.25 24 16.5 24 25 C20.04 25 16.08 25 12 25 C12 28.96 12 32.92 12 37 C7.71 37 3.42 37 -1 37 C-1 40.96 -1 44.92 -1 49 C-4.96 49 -8.92 49 -13 49 C-13 53.29 -13 57.58 -13 62 C-17.29 62 -21.58 62 -26 62 C-26 65.96 -26 69.92 -26 74 C-29.96 74 -33.92 74 -38 74 C-38 78.29 -38 82.58 -38 87 C-41.96 87 -45.92 87 -50 87 C-50 90.96 -50 94.92 -50 99 C-54.29 99 -58.58 99 -63 99 C-63 102.96 -63 106.92 -63 111 C-66.96 111 -70.92 111 -75 111 C-75 115.29 -75 119.58 -75 124 C-78.96 124 -82.92 124 -87 124 C-87 127.96 -87 131.92 -87 136 C-91.29 136 -95.58 136 -100 136 C-100 139.96 -100 143.92 -100 148 C-103.96 148 -107.92 148 -112 148 C-112 152.29 -112 156.58 -112 161 C-116.29 161 -120.58 161 -125 161 C-125 164.96 -125 168.92 -125 173 C-128.96 173 -132.92 173 -137 173 C-137 177.29 -137 181.58 -137 186 C-140.96 186 -144.92 186 -149 186 C-149 189.96 -149 193.92 -149 198 C-153.29 198 -157.58 198 -162 198 C-162 201.96 -162 205.92 -162 210 C-165.96 210 -169.92 210 -174 210 C-174 214.29 -174 218.58 -174 223 C-177.96 223 -181.92 223 -186 223 C-186 226.96 -186 230.92 -186 235 C-194.25 235 -202.5 235 -211 235 C-211 227.08 -211 219.16 -211 211 C-206.71 211 -202.42 211 -198 211 C-198 206.71 -198 202.42 -198 198 C-194.04 198 -190.08 198 -186 198 C-186 194.04 -186 190.08 -186 186 C-182.04 186 -178.08 186 -174 186 C-174 181.71 -174 177.42 -174 173 C-169.71 173 -165.42 173 -161 173 C-161 169.04 -161 165.08 -161 161 C-157.04 161 -153.08 161 -149 161 C-149 157.04 -149 153.08 -149 149 C-145.04 149 -141.08 149 -137 149 C-137 144.71 -137 140.42 -137 136 C-132.71 136 -128.42 136 -124 136 C-124 132.04 -124 128.08 -124 124 C-120.04 124 -116.08 124 -112 124 C-112 120.04 -112 116.08 -112 112 C-107.71 112 -103.42 112 -99 112 C-99 107.71 -99 103.42 -99 99 C-95.04 99 -91.08 99 -87 99 C-87 95.04 -87 91.08 -87 87 C-83.04 87 -79.08 87 -75 87 C-75 82.71 -75 78.42 -75 74 C-70.71 74 -66.42 74 -62 74 C-62 70.04 -62 66.08 -62 62 C-58.04 62 -54.08 62 -50 62 C-50 58.04 -50 54.08 -50 50 C-46.04 50 -42.08 50 -38 50 C-38 45.71 -38 41.42 -38 37 C-33.71 37 -29.42 37 -25 37 C-25 33.04 -25 29.08 -25 25 C-21.04 25 -17.08 25 -13 25 C-13 21.04 -13 17.08 -13 13 C-8.71 13 -4.42 13 0 13 C0 8.71 0 4.42 0 0 Z"
                  fill="var(--background)"
                  transform="translate(325,114)"
                />
                <path
                  d="M0 0 C7.92 0 15.84 0 24 0 C24 7.92 24 15.84 24 24 C19.71 24 15.42 24 11 24 C11 27.96 11 31.92 11 36 C7.04 36 3.08 36 -1 36 C-1 40.29 -1 44.58 -1 49 C-4.96 49 -8.92 49 -13 49 C-13 52.96 -13 56.92 -13 61 C-17.29 61 -21.58 61 -26 61 C-26 64.96 -26 68.92 -26 73 C-29.96 73 -33.92 73 -38 73 C-38 77.29 -38 81.58 -38 86 C-41.96 86 -45.92 86 -50 86 C-50 89.96 -50 93.92 -50 98 C-54.29 98 -58.58 98 -63 98 C-63 101.96 -63 105.92 -63 110 C-66.96 110 -70.92 110 -75 110 C-75 114.29 -75 118.58 -75 123 C-79.29 123 -83.58 123 -88 123 C-88 126.96 -88 130.92 -88 135 C-91.96 135 -95.92 135 -100 135 C-100 139.29 -100 143.58 -100 148 C-107.92 148 -115.84 148 -124 148 C-124 140.08 -124 132.16 -124 124 C-120.04 124 -116.08 124 -112 124 C-112 119.71 -112 115.42 -112 111 C-108.04 111 -104.08 111 -100 111 C-100 107.04 -100 103.08 -100 99 C-95.71 99 -91.42 99 -87 99 C-87 94.71 -87 90.42 -87 86 C-83.04 86 -79.08 86 -75 86 C-75 82.04 -75 78.08 -75 74 C-70.71 74 -66.42 74 -62 74 C-62 70.04 -62 66.08 -62 62 C-58.04 62 -54.08 62 -50 62 C-50 57.71 -50 53.42 -50 49 C-46.04 49 -42.08 49 -38 49 C-38 45.04 -38 41.08 -38 37 C-33.71 37 -29.42 37 -25 37 C-25 33.04 -25 29.08 -25 25 C-21.04 25 -17.08 25 -13 25 C-13 20.71 -13 16.42 -13 12 C-8.71 12 -4.42 12 0 12 C0 8.04 0 4.08 0 0 Z"
                  fill="var(--background)"
                  transform="translate(358,235)"
                />
              </svg>
            </div>
            8bitcn
          </CossSheet.SheetTitle>
          <div className="flex items-start">
            <RegistryChanges />
          </div>
          <CossSheet.SheetDescription>
            A set of 8-bit styled retro components. Works with your favorite
            frameworks. Open Source. Open Code.
          </CossSheet.SheetDescription>
        </CossSheet.SheetHeader>
        <CossSheet.SheetPanel>
          <div className="flex items-center gap-x-3">
            <GithubInfo />
            <Separator orientation="vertical" className="bg-gray-100" />
            <RegistrySyncStatus />
            <Separator orientation="vertical" className="bg-gray-100" />
            <RegistryInventoryStats />
            <Separator orientation="vertical" className="bg-gray-100" />
          </div>
          <RegistryItems />
        </CossSheet.SheetPanel>
        <CossSheet.SheetFooter className="sm:flex-row sm:justify-between">
          <RegistryToolbar />
          <Button>Get promt to upgrade</Button>
        </CossSheet.SheetFooter>
      </CossSheet.SheetPopup>
    </CossSheet.Sheet>
  );
};

const RegistryItems: React.FC = () => {
  return (
    <CossCollapse.Collapsible>
      <CossFrame.Frame className="w-full mt-5">
        <CossCollapse.CollapsibleTrigger
          render={
            <CossFrame.FrameHeader>
              <CossFrame.FrameTitle className="flex items-center justify-between">
                Items <HugeiconsIcon icon={ArrowDown01FreeIcons} size={12} />
              </CossFrame.FrameTitle>
              <CossFrame.FrameDescription>
                List of registry items
              </CossFrame.FrameDescription>
            </CossFrame.FrameHeader>
          }
        >
          {/* <ChevronDownIcon className="size-4" /> */}
        </CossCollapse.CollapsibleTrigger>

        <CossCollapse.CollapsiblePanel>
          <ScrollArea className="h-[50vh]" scrollFade>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">chapter-intro</h2>
              <p className="text-muted-foreground text-sm">
                A cinematic chapter/level intro with pixel art background.
              </p>
            </CossFrame.FramePanel>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">button</h2>
              <p className="text-muted-foreground text-sm">
                A simple 8-bit button component
              </p>
            </CossFrame.FramePanel>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">input</h2>
              <p className="text-muted-foreground text-sm">
                A simple 8-bit input component
              </p>
            </CossFrame.FramePanel>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">input</h2>
              <p className="text-muted-foreground text-sm">
                A simple 8-bit input component
              </p>
            </CossFrame.FramePanel>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">input</h2>
              <p className="text-muted-foreground text-sm">
                A simple 8-bit input component
              </p>
            </CossFrame.FramePanel>
            <CossFrame.FramePanel>
              <h2 className="font-semibold text-sm">input</h2>
              <p className="text-muted-foreground text-sm">
                A simple 8-bit input component
              </p>
            </CossFrame.FramePanel>
          </ScrollArea>
        </CossCollapse.CollapsiblePanel>
      </CossFrame.Frame>
    </CossCollapse.Collapsible>
  );
};

const GithubInfo: React.FC = () => {
  return (
    <div className="flex items-center gap-x-1">
      <HugeiconsIcon
        icon={Star}
        size={12}
        color="oklch(0.86 0.17 92)"
        fill="oklch(0.86 0.17 92)"
      />
      <span className="text-xs">1.4k</span>
    </div>
  );
};

const RegistryInventoryStats: React.FC = () => {
  return (
    <div className="flex items-center gap-x-1">
      <HugeiconsIcon icon={Box} size={12} />
      <span className="text-xs">50 components</span>
    </div>
  );
};

const RegistrySyncStatus: React.FC = () => {
  return (
    <div className="flex items-center gap-x-1">
      <HugeiconsIcon icon={Clock} size={12} />
      <span className="text-xs">2 hours ago</span>
    </div>
  );
};

const RegistryChanges: React.FC = () => {
  return (
    <Badge variant="error">
      <HugeiconsIcon icon={Alert} size={12} />
      Breaking changes
    </Badge>
  );
};

const RegistryToolbar: React.FC = () => {
  return (
    <div className="flex items-center gap-x-2">
      {/* <Button size="icon-sm" variant="ghost">
        <HugeiconsIcon icon={Activity} size={12} />
      </Button> */}
      <Button size="icon-sm" variant="ghost">
        <HugeiconsIcon icon={Love} size={12} />
      </Button>
      <Button size="icon-sm" variant="ghost">
        <HugeiconsIcon icon={Webhook} size={12} />
      </Button>
      <Button size="icon-sm" variant="ghost">
        <HugeiconsIcon icon={ExternalLink} size={12} />
      </Button>
    </div>
  );
};
