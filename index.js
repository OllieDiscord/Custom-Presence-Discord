const clientId = 'go on discord.dev make a application and get the user id x';
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: 'ipc' })

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: ``,
        largeImageKey: ``,
        state: '',
        largeImageText: ``,
        smallImageKey: ``,
        smallImageText: ``,
        instance: false,
        buttons: [
            {
                label: ``,
                url: ``
            },
            {
                label: ``,
                url: ``,
            }
        ]
    });
}

RPC.on("ready", async () => {
    console.log(`Presence is now online with no errors.`)
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
})

RPC.login({ clientId }).catch((err) => console.log(err));