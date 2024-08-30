import { bakeTracker } from "@tailjs/next";
import { ConfiguredClientTracker } from "./ConfiguredTracker.client";
import configuration from "@/../tailjs.client.config";

export const ConfiguredTracker = bakeTracker(
  configuration,
  ConfiguredClientTracker
);
