import { CommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";

import Client from "../../../lib/client.js";
import I18n from "../lib/i18n.js";
import { controller } from "../module.js";

async function execute(client: Client, interaction: CommandInteraction) {
    if (!interaction.guild || !interaction.channel) {
        return;
    }

    const player = controller.get(interaction.guild.id, interaction.channel as TextChannel);

    if (!player) {
        return;
    }

    const state = player.pause();

    await interaction.reply({ embeds: [I18n.embeds.paused(state)] });
}

const data = new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Toggle pause on player.")
    .setDMPermission(false);

export { data, execute };
