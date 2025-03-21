/**
 * Mock WebSocket Feed Simulator
 * 
 * This module simulates real-time data feeds from multiple channels
 * to demonstrate resource subscription updates.
 */

type DataCallback = (channel: string, data: string) => void;

export function startMockWsFeed(onData: DataCallback) {
  const channels = ["ws1", "ws2", "ws3"];
  const intervalIds: NodeJS.Timeout[] = [];
  
  console.log("[MOCK WS] Starting mock WebSocket feed");
  
  // Create a periodic data emitter for each channel
  channels.forEach((chan, idx) => {
    // Each channel has a different update frequency
    const intervalId = setInterval(() => {
      const timestamp = new Date().toISOString();
      const randomValue = Math.floor(Math.random() * 10000);
      const msg = `Random #${randomValue} at ${timestamp}`;
      
      // Call the callback with channel and data
      onData(chan, msg);
      
      console.log(`[MOCK WS] Channel ${chan} emitted: ${msg}`);
    }, 3000 + idx * 2000); // Stagger intervals: 3s, 5s, 7s
    
    intervalIds.push(intervalId);
  });
  
  // Return a cleanup function (though we won't use it in this example)
  return () => {
    intervalIds.forEach(id => clearInterval(id));
    console.log("[MOCK WS] Feed stopped");
  };
}