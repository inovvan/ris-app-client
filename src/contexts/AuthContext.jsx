import { createContext, useEffect, useState } from "react";
import { api } from "../axiosConfig";
import * as adminInfo from "../components/admin/adminInfo";
import * as berezinskoeInfo from "../components/admin/berezinskoeInfo";
import * as bugskoeInfo from "../components/admin/bugskoeInfo";
import * as dvinskoeInfo from "../components/admin/dvinskoeInfo";

export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [auth, setAuth] = useState({
    id: null,
    role: null,
    organisation: null,
    info: null,
    rolePath: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await api.get("/auth/authCheck");
        
        if (res.data.role === "Администратор") {
          setAuth({ ...res.data, info: adminInfo, rolePath: "main" });
        } else if (res.data.role === "Клиент" || res.data.role === "Путевик") {
          setAuth({ ...res.data });
        } else if (
          res.data.organisation === 'РУ ЭСП "Днепро-Бугский водный путь"'
        ) {
          setAuth({ ...res.data, info: bugskoeInfo, rolePath: "bugskoe" });
        } else if (
          res.data.organisation ===
          'РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
        ) {
          setAuth({
            ...res.data,
            info: dvinskoeInfo,
            rolePath: "dvinskoe",
          });
        } else {
          setAuth({
            ...res.data,
            info: berezinskoeInfo,
            rolePath: "berezinskoe",
          });
        }

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  if (isLoading) return <></>;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
