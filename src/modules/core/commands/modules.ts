import { Interaction, SlashCommandBuilder } from "discord.js";

import Client from "../../../lib/client.js";
import replies from "../lib/replies.js";

async function execute(client: Client, interaction: Interaction): Promise<void> {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    await interaction.reply(replies.modules(client.modules));
}

const data = new SlashCommandBuilder()
    .setName("modules")
    .setDescription("List of availiable modules.");

export { data, execute };
