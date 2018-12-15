import crypto from "crypto";

import { IUserData, IDatabase } from "./types";

class InMemoryDatabase implements IDatabase {
  private inMemoryData: { users: { [key: string]: IUserData } };

  constructor() {
    this.inMemoryData = {
      users: {}
    };
  }

  reset() {
    this.inMemoryData = { users: {} };
  }

  userDataById(userId: string) {
    return this.inMemoryData.users[userId] || null;
  }

  userDataByEmail(email: string) {
    const userData = Object.keys(this.inMemoryData.users)
      .map(userId => this.inMemoryData.users[userId])
      .find(user => user.email === email);
    return userData || null;
  }

  insertUserData({
    name,
    email,
    password
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const _id = this.createId();
    const passwordHash = this.calcHash(password);

    this.inMemoryData.users[_id] = {
      _id,
      name,
      email,
      passwordHash
    };

    return this.inMemoryData.users[_id];
  }

  userDataByEmailAndPassword({
    email,
    password
  }: {
    email: string;
    password: string;
  }) {
    const passwordHash = this.calcHash(password);
    const userData = Object.keys(this.inMemoryData.users)
      .map(key => this.inMemoryData.users[key])
      .find(user => user.email === email && user.passwordHash === passwordHash);
    return userData || null;
  }

  private createId(): string {
    return crypto.randomBytes(10).toString("hex");
  }

  private calcHash(word: string): string {
    return crypto
      .createHash("md5")
      .update(word)
      .digest("hex");
  }
}

export { InMemoryDatabase };
