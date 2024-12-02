// room-call.test.ts
describe('Room and Call Integration', () => {
  test('should establish call when joining room', async () => {
    const room = await roomManager.createRoom();
    const call = await callService.initializeCall();
    
    expect(call.isConnected()).toBe(true);
  });
});
