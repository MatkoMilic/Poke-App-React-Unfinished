import { IUserValues } from "../../types";

export const getActiveUser = (): string | null => {
  const activeUser = localStorage.getItem("activeUser");
  return activeUser;
};

export const removeActiveUser = (): void => {
  localStorage.removeItem("activeUser");
};

export const getActiveUserDetails = (): IUserValues | undefined => {
  const email = getActiveUser();
  if (email) {
    const details = localStorage.getItem(email);
    if (details) {
      const userDetailsParsed: IUserValues = JSON.parse(details);
      return userDetailsParsed;
    }
  }
};
