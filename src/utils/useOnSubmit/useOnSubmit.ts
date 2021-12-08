import { IUserValues } from "../../types";
import { useNavigate } from "react-router-dom";

const useOnSubmit = () => {
  const navigate = useNavigate();
  const signUpUser = (email: string, password: string) => {
    try {
      const userDetails: IUserValues = {
        email: email,
        password: password,
        favoritePokemon: "pikachu",
        theme: "light",
      };
      localStorage.setItem(email, JSON.stringify(userDetails));
      localStorage.setItem("activeUser", email);
      navigate("/profilepage");
    } catch (err) {
      console.log(err);
    }
  };

  const logUserIn = async (email: string, password: string) => {
    const doesUserExistAlready = localStorage.getItem(email);
    const userParsed: IUserValues = JSON.parse(doesUserExistAlready || "{}");
    if (userParsed.password != password) {
      alert("Entered password is not correct!");
    } else {
      localStorage.setItem("activeUser", email);
      navigate("/profilepage");
    }
  };

  const onSubmitRedirect = async (email: string, password: string) => {
    const doesUserExistAlready = localStorage.getItem(email);
    if (!doesUserExistAlready) {
      return signUpUser(email, password);
    } else if (doesUserExistAlready) {
      logUserIn(email, password);
    }
  };
  return { onSubmitRedirect };
};

export default useOnSubmit;
