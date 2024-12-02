// encryption.ts
import { AES, enc } from 'crypto-js';

class EncryptionService {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  encrypt(data: string): string {
    return AES.encrypt(data, this.key).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = AES.decrypt(encryptedData, this.key);
    return bytes.toString(enc.Utf8);
  }
}
