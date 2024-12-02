// JoinRoom.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const JoinRoom: React.FC = () => {
  const [roomCode, setRoomCode] = useState('');

  const handleJoinRoom = async () => {
    try {
      await roomManager.joinRoom(roomCode);
      // Navigate to call screen
    } catch (error) {
      console.error('Failed to join room:', error);
    }
  };

  return (
    <View>
      <TextInput
        value={roomCode}
        onChangeText={setRoomCode}
        placeholder="Enter Room Code"
      />
      <Button title="Join Room" onPress={handleJoinRoom} />
    </View>
  );
};
