import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFIeldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { FormElementsContainer } from "ui/styles/pages/index.style";
import { ProfessionalPaper } from "ui/styles/pages/index.style";
import { ProfessionalContainer } from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    zip,
    setZip,
    validZip,
    searchProfessionals,
    errorMessage,
    diaristas,
    searchDone,
    loading,
    professionalsRemaining,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Know our professionals"}
        subtitle={"Search for professionals near your area"}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99999-999"}
            label={"Enter your Zip Code"}
            fullWidth
            variant={"outlined"}
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />

          {errorMessage && (
            <Typography color={"error"}> {errorMessage} </Typography>
          )}

          <Button
            variant={"contained"}
            sx={{ color: " #fff" }}
            disabled={!validZip || loading}
            onClick={() => searchProfessionals(zip)}
          >
            {loading ? <CircularProgress size={18} /> : " Search"}
          </Button>
        </FormElementsContainer>

        {searchDone &&
          (diaristas.length > 0 ? (
            <ProfessionalPaper>
              <ProfessionalContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      description={item.cidade}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                    />
                  );
                })}
              </ProfessionalContainer>

              <Container sx={{ textAlign: "center" }}>
                {professionalsRemaining > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...and {professionalsRemaining}
                    {professionalsRemaining > 1
                      ? " others professionals"
                      : " other professional"}
                    available in your area.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"primary"}
                  sx={{ mt: 5, color: "#fff" }}
                >
                  Hire a professional
                </Button>
              </Container>
            </ProfessionalPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              No professionals available in your area.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
