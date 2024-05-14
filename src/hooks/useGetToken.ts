import { useEffect, useState } from "react";

const useGetToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return token;
};

export default useGetToken;
