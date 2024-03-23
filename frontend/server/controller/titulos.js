import { mysqlClient } from "../utils/index.js";

const client = mysqlClient();

export const getTitles = async () => {
  try {
    const res = await client.query("SELECT * FROM titulo;");
    return res[0]
  } catch (e) {
    console.error("Error ao obter títulos:", e.message);
    throw e;
  }
};

export const getTitleByCod = async (e) => {
  const cod_titulo = parseInt(e.context.params.cod_titulo)
  const gtitle = async (cod_titulo) => {
    try {
      const result = await client.query("SELECT * FROM titulo WHERE cod_titulo = ?", [
        cod_titulo]);
      return result[0];
    } catch (e) {
      console.error("Error ao obter títulos:", e.message);
      throw e;
    }
  }
  const titulo = await gtitle(cod_titulo);
  let tptitulo = titulo[0].tipo_titulo;
  tptitulo = tptitulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  tptitulo = tptitulo.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .trim();
  const url = `SELECT * FROM ${tptitulo} WHERE cod_titulo = ?`
  try {
    const result = await client.query(url, [
      cod_titulo]);
    return result[0];
  } catch (e) {
    console.error("Error ao obter título:", e.message);
    throw e;
  }


};