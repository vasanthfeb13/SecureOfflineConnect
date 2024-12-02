// roomManager.ts
interface Room {
  id: string;
  code: string;
  participants: Map<string, Participant>;
  encryptionKey: string;
}

class RoomManager {
  private activeRooms: Map<string, Room>;

  constructor() {
    this.activeRooms = new Map();
  }

  createRoom(): Room {
    const roomId = this.generateUniqueId();
    const roomCode = this.generateRoomCode();
    const encryptionKey = this.generateEncryptionKey();

    const room: Room = {
      id: roomId,
      code: roomCode,
      participants: new Map(),
      encryptionKey
    };

    this.activeRooms.set(roomId, room);
    return room;
  }

  joinRoom(roomCode: string): Room | null {
    // Room joining logic
  }
}
