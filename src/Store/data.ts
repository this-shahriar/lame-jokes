import { Subject } from "rxjs";
import cookies from "js-cookie";

const subject = new Subject();
const initialState = {
  status: "",
  data: cookies.get("data") ? JSON.parse(cookies.get("data") || "") : {},
  dataCount: cookies.get("data")
    ? Object.values(JSON.parse(cookies.get("data") || "")).length
    : 0,
  error: "",
};

let state = initialState;

const dataStore = {
  init: () => {
    state = { ...state };
    subject.next(state);
  },
  subscribe: (setState: any) => subject.subscribe(setState),
  createData: (value: any) => {
    state = {
      ...state,
      data: {
        ...state.data,
        [state.dataCount + 1]: { _id: state.dataCount + 1, ...value },
      },
      dataCount: state.dataCount + 1,
    };
    cookies.set("data", JSON.stringify(state.data));
    subject.next(state);
  },
  editData: (value: any, editId: number) => {
    state = {
      ...state,
      data: { ...state.data, [editId]: { _id: editId, ...value } },
    };
    cookies.set("data", JSON.stringify(state.data));
    subject.next(state);
  },
  state : () => state,
  initialState,
};

export default dataStore;
