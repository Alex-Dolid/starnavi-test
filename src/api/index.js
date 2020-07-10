// Core
import axios from "axios";
// Config
import {baseURL} from "./config";

const instance = axios.create({baseURL});

export default instance;
