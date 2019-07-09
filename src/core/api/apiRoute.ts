interface ApiRouteType {
  GET_BASE_INFO: string;
  GET_BALANCE: string;
  GET_INFO: string;
  GET_HISTORY: string;
  GET_WIN_RECORD: string;
  GET_INTRODUCTION: string;
  GET_BET_RECORD: string;
  GET_BET_RECORD_DETAIL: string;
  GET_RECENT_RECORD: string;
  GET_EARN_INFO: string;
  POST_BET: string;
  TOUCH_TOKEN: string;
}

export const ApiRoute: ApiRouteType = {
  GET_BASE_INFO: "/lottery_game/get_base_info/",
  GET_BALANCE: "/user/get_balance/",
  GET_INFO: "/lottery_game/get_info/",
  GET_HISTORY: "/lottery_expect/get_history/",
  GET_WIN_RECORD: "/lottery_bet_records/get_recent_win_record/",
  GET_INTRODUCTION: "/lottery_game/get_introduction/",
  GET_BET_RECORD: "/lottery_bet_records/get_list/",
  GET_BET_RECORD_DETAIL: "/lottery_bet_records/get_detail_list/",
  GET_RECENT_RECORD: "/lottery_expect/get_recent_info/",
  GET_EARN_INFO: "/lottery_bet_records/get_earn_info",
  POST_BET: "/lottery_bet/bet/",
  TOUCH_TOKEN: "/token/touch/",
};
