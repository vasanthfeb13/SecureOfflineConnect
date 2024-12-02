// CreateRoom.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CreateRoom: React.FC = () => {
  const [roomCode, setRoomCode] = useState<string>('');

  const handleCreateRoom = async () => {
    try {
      const room = await roomManager.createRoom();
      setRoomCode(room.code);
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  return (
    <View>
      <Text>Create New Room</Text>
      <Button title="Create Room" onPress={handleCreateRoom} />
      {roomCode && <Text>Room Code: {roomCode}</Text>}
    </View>
  );
};
