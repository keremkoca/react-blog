import axiosMock from "axios-mock-adapter";
import axios from "./axios";

const mockAdepter = new axiosMock(axios);

export default mockAdepter;
