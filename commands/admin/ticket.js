const {
    ActionRowBuilder,
    ApplicationCommandType,
    StringSelectMenuBuilder,
    Colors,
    PermissionsBitField
} = require('discord.js');

module.exports = {
    name: 'ticket',
    description: '(🔧) Permet d\'envoyer le système de ticket.',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return interaction.reply({
                content: `Vous n'avez pas la permissions d'éxécuter cette commande !`,
                ephemeral: true,
            });
        }

        interaction.channel.send({
            embeds: [
                {
                    title: "Open Ticket",
                    description: `****Welcome to Toolify Shop!

Experience the best marketing with Toolify Shop! 
Choose the ticket type from the dropdown below 
so we can provide you with dedicated support!

> Our support team will get back to you shortly!`,
                    image: { url: "https://share.creavite.co/6751e26501dbfe495dee3f9b.gif" },
                    footer: {
                        text: "Ticket Support",
                    },
                    color: Colors.Blurple,
                },
            ],
            components: [
                new ActionRowBuilder().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('ticket-options')
                        .setPlaceholder('Select an option')
                        .addOptions(
                            {
                                label: 'Contact the staff',
                                description: 'Reach out to the staff for assistance.',
                                emoji: '🎓',
                                value: 'staff',
                            },
                            {
                                label: 'Answer a question',
                                description: 'Get answers to your questions.',
                                emoji: '⁉',
                                value: 'answer',
                            },
                            {
                                label: 'Other',
                                description: 'For other inquiries or support.',
                                emoji: '🔧',
                                value: 'other',
                            }
                        )
                ),
            ],
        });

        interaction.reply({
            content: "Ticket system has been successfully set up!",
            ephemeral: true,
        });
    },
};
