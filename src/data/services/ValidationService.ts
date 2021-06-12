export const ValidationService = {
  zip(zip = ""): boolean {
    return zip.replace(/\D/g, "").length === 8;
  },
};
