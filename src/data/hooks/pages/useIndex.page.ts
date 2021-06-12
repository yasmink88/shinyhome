import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [zip, setZip] = useState(""),
    validZip = useMemo(() => {
      return ValidationService.zip(zip);
    }, [zip]),
    [errorMessage, setErrorMessage] = useState(""),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [professionalsRemaining, setProfessionalsRemaining] = useState(0);

  async function searchProfessionals(zip: string) {
    setSearchDone(false);
    setLoading(true);
    setErrorMessage("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + zip.replace(/\D/g, ""));

      setDiaristas(data.diaristas);
      setProfessionalsRemaining(data.quantidade_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      setErrorMessage("ZIP Code not found");
      setLoading(false);
    }
  }

  return {
    zip,
    setZip,
    validZip,
    searchProfessionals,
    errorMessage,
    diaristas,
    searchDone,
    loading,
    professionalsRemaining,
  };
}
