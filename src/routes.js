const HOME = "/";

const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//USERS
const USERS = "/users";

const USER_PROFILE = "/:id";
const USER_EDIT = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const DELETE_USERS = "/:id/delete";

//VIDEOS
const VIDOES = "/videos";

const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userProfile: USER_PROFILE,
  userEdit: USER_EDIT,
  changePassword: CHANGE_PASSWORD,
  deleteUsers: DELETE_USERS,
  videos: VIDOES,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: VIDEO_DETAIL,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
