import { atomFamily, selectorFamily, useRecoilState } from "recoil";
import {fetchAccount} from '../utils/api'

export const $state = atomFamily({
  key: "account-info::state",
  default: selectorFamily({
    key: "account-info::default",
    get: (address) => async () => {
      return fetchAccount(address);
    },
  }),
});

// export const $status = atomFamily({
//   key: "account-info::status",
//   default: IDLE,
// });

export const useAccountInfo = (address: string) => {
  const [accountInfo, setAccountInfo] = useRecoilState($state(address));
//   const [status, setStatus] = useRecoilState($status(address));

  return {
    accountInfo,
    status,
    async refresh() {
    //   setStatus(PROCESSING);
      await fetchAccount(address).then(setAccountInfo);
    //   setStatus(IDLE);
    },
  };
}

export const useCurrentContractInfo = () => {
  
}

// export const accountInfo = atom({
//     key: "USER_INFO",
//     default:{
//       addr:'',
//       balance:0,
//       code:''
//     }
//   })
