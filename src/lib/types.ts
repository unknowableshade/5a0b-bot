import { ApplicationCommandData, CommandInteraction } from "discord.js";

import Client from "./client.js";

export interface Module {
    name: string;
    description?: string;
    author: string;
    tag: string;
    controller?: unknown;
    rootDir: string;
}

export interface ModuleMetadata extends Module {
    commands: string[];
    events: string[];
}

export interface Command {
    data: ApplicationCommandData;
    execute: (client: Client, interaction: CommandInteraction) => Promise<void>;
}

export interface Event {
    name: string;
    execute: (client: Client, eventee: unknown[]) => Promise<void>;
}
