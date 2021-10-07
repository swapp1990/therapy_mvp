//Initialize harmony contract: https://github.com/harmony-one/sdk/tree/master/packages/harmony-contract

import React, { createContext, useReducer } from "react";
import fs from "fs";

const Dispatcher = require("flux").Dispatcher;
const Emitter = require("events").EventEmitter;

const dispatcher = new Dispatcher();
const emitter = new Emitter();

class Store {
  constructor() {
    this.store = {
      account: { name: "Ryan" },
    };

    dispatcher.register(
      function (payload) {
        switch (payload.type) {
          case "CONFIGURE":
            this.configure(payload);
            break;
          default: {
          }
        }
      }.bind(this)
    );
  }

  configure = async (payload) => {};

  getStore() {
    return this.store;
  }

  setStore(obj) {
    this.store = { ...this.store, ...obj };
    return emitter.emit("StoreUpdated");
  }
}

const store = new Store();
const stores = {
  store: store,
  dispatcher: dispatcher,
  emitter: emitter,
};
export default stores;
