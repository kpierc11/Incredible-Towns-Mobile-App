import React from "react";
import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext({loggedIn:false});