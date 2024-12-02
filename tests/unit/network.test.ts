// network.test.ts
import { MeshNetwork } from '../../app/src/services/network/meshNetwork';

describe('MeshNetwork', () => {
  let network: MeshNetwork;

  beforeEach(() => {
    network = new MeshNetwork();
  });

  test('should initialize successfully', async () => {
    await expect(network.initializeNetwork()).resolves.not.toThrow();
  });
});
