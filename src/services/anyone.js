import { Anon } from "@anyone-protocol/anyone-client";

let hiddenServiceAddress = null;


const anonClient = new Anon();

export const startHiddenService = async () => {
  try {
    await anonClient.start();
    const serviceInfo = await anonClient.createHiddenService({
      serviceName: "secure-chat",
      localPort: 3000, 
    });
    hiddenServiceAddress = serviceInfo.address;
    console.log("Hidden Service Address:", hiddenServiceAddress);
    return hiddenServiceAddress;
  } catch (err) {
    console.error("Error starting hidden service:", err);
    throw err;
  }
};

// Get the hidden service address
export const getHiddenServiceAddress = () => hiddenServiceAddress;


export default anonClient;
